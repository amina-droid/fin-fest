import React, { useContext, useState } from 'react';
import {
  Avatar, Badge, Button, Menu, Modal,
} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useApolloClient, useMutation } from '@apollo/client';
import {
  AUTH_VK, AuthVK, AuthVKVariables,
  GET_VK_OATH_REDIRECT_URL, GetVKOAuthRedirect,
} from '../../apollo';
import { AuthContext } from '../../context/auth';
import { SCORES_WORDS, PRIZE_WORDS } from '../../dictionaries';

import s from './Profile.module.sass';

const PRIZE_REGEX = /Приз: (.*?),/;
const Profile: React.FC = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const {
    token,
    login,
    logout,
    userState,
    user,
  } = useContext(AuthContext);
  const [
    authVK,
  ] = useMutation<AuthVK, AuthVKVariables>(AUTH_VK);
  const [isOpenModal, setOpenModal] = useState(false);
  const apolloClient = useApolloClient();

  const onPrizeOpen = () => setOpenModal(true);
  const onPrizeClose = () => setOpenModal(false);

  const vkSignHandler = async (e: any) => {
    e.preventDefault();
    const loginWindow = window.open('', 'OAuth')!;
    setAuthLoading(true);

    async function authHandler(this: Window, event: MessageEvent) {
      // 'this' = children window
      if ((/^react-devtools/gi).test(event?.data?.source)) {
        return;
      }

      // eslint-disable-next-line react/no-this-in-sfc
      this.close();
      window.removeEventListener('message', authHandler);

      try {
        const code = event.data.payload?.code;
        if (code) {
          const { data, errors } = await authVK({ variables: { code } });

          if (errors || !data) return;

          const { token: responseToken } = data.authVK;
          login(responseToken);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        throw error;
      } finally {
        setAuthLoading(false);
      }
    }

    try {
      const { data } = await apolloClient.query<GetVKOAuthRedirect>({
        query: GET_VK_OATH_REDIRECT_URL,
      });

      const { url } = data.getVKOAuthRedirect;
      loginWindow.location.href = url;

      window.addEventListener('message', authHandler.bind(loginWindow));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      throw error;
    }
  };

  if (!token && !user) {
    return (
      <Button
        type="primary"
        icon={<LoginOutlined />}
        onClick={vkSignHandler}
        loading={authLoading}
      >
        Войти через VK
      </Button>
    );
  }

  const scores = userState?.score || '0';
  const codes = Boolean(userState?.codes?.length) && userState?.codes;
  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={['']} mode="horizontal">
        <Menu.SubMenu
          key="key1"
          title={(
            <>
              <span className={s.profileName}>{user?.name.givenName}</span>
              <Badge count={scores} size="small">
                <Avatar src={user?.photos[0].url} />
              </Badge>
            </>
          )}
        >
          <Menu.Item>{user?.name.givenName} {user?.name.familyName}</Menu.Item>
          <Menu.Item disabled>У вас <b>{scores} {SCORES_WORDS[scores]}</b></Menu.Item>
          {codes
        && (
          <Menu.Item onClick={onPrizeOpen} disabled={!codes.length}>
            У вас <b>{codes.length} {PRIZE_WORDS[codes.length]}</b>
          </Menu.Item>
        )}
          <Menu.Item>
            <Button type="text" block danger onClick={logout}>Выйти</Button>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
      <Modal
        title="Мои призы"
        visible={isOpenModal}
        onCancel={onPrizeClose}
        footer={<Button onClick={onPrizeClose}>Закрыть</Button>}
      >
        {codes && (
          <ul>{codes.map(code => {
            const groups = PRIZE_REGEX.exec(code);
            if (groups) {
              const prizeName = groups[1];

              return <li key={code}>{prizeName}</li>;
            }
            return null;
          })}
          </ul>
        )}
      </Modal>
    </>
  );
};

export default Profile;
