import React, { useContext, useState } from 'react';
import {
  Avatar, Badge, Button, Popover,
} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useApolloClient, useMutation } from '@apollo/client';
import {
  AUTH_VK, AuthVK, AuthVKVariables,
  GET_VK_OATH_REDIRECT_URL, GetVKOAuthRedirect,
} from '../../apollo';
import { AuthContext } from '../../context/auth';

import s from './Profile.module.sass';

const Profile: React.FC = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const {
    token,
    login,
    logout,
    user,
  } = useContext(AuthContext);
  const [
    authVK,
  ] = useMutation<AuthVK, AuthVKVariables>(AUTH_VK);
  const apolloClient = useApolloClient();

  const vkSignHandler = async (e: any) => {
    e.preventDefault();
    setAuthLoading(true);

    async function authHandler(this: Window, event: MessageEvent) {
      // 'this' = children window
      if ((/^react-devtools/gi).test(event?.data?.source)) {
        return;
      }

      // eslint-disable-next-line react/no-this-in-sfc
      this.close();
      const { code } = event.data.payload;
      window.removeEventListener('message', authHandler);

      try {
        const { data, errors } = await authVK({ variables: { code } });

        if (errors || !data) return;

        const { token: responseToken } = data.authVK;
        login(responseToken);
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
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      const loginWindow = window.open(url, 'OAuth')!;

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

  const scores = user?.score || '0';
  const content = (
    <div>
      Мои баллы: {scores}
      <Button type="text" block danger onClick={logout}>Выйти</Button>
    </div>
  );

  return (
    <Popover
      content={content}
      title={`${user?.name.givenName} ${user?.name.familyName}`}
      trigger="hover"
    >
      <div className={s.profile}>
        <span className={s.profileName}>{user?.name.givenName}</span>
        <Badge count={scores} size="small">
          <Avatar src={user?.photos[0].url} />
        </Badge>
      </div>
    </Popover>
  );
};

export default Profile;
