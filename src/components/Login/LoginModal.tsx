import React, { useContext, useState } from 'react';
import { Button, Modal } from 'antd';
import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client';
import {
  AUTH_VK, AuthVK, AuthVKVariables,
  GET_VK_OATH_REDIRECT_URL, GetVKOAuthRedirect,
} from '../../apollo';
import { AuthContext } from '../../context/auth';

type Props = {
  onClose: () => void;
  visible: boolean;
}

const LoginModal: React.FC<Props> = ({
  onClose,
  visible,
}) => {
  const [authLoading, setAuthLoading] = useState(false);
  const {
    token, user, login, logout,
  } = useContext<AuthContext>(AuthContext);

  const [
    authVK,
  ] = useMutation<AuthVK, AuthVKVariables>(AUTH_VK);
  const apolloClient = useApolloClient();

  const vkSignHandler = async (e: any) => {
    e.preventDefault();
    setAuthLoading(true);
    console.log('ti pidoe');

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
        console.error(error);
        throw error;
      } finally {
        setAuthLoading(false);
        onClose();
      }
    }

    try {
      const { data } = await apolloClient.query<GetVKOAuthRedirect>({
        query: GET_VK_OATH_REDIRECT_URL,
      });

      const { url } = data.getVKOAuthRedirect;
      const loginWindow = window.open(url, 'OAuth')!;

      window.addEventListener('message', authHandler.bind(loginWindow));
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <Modal
      visible={visible}
      title="Войти через соц. сети"
      footer={[
        <Button key="back" onClick={onClose}>
          Закрыть
        </Button>,
      ]}
    >
      <Button onClick={vkSignHandler}>Войти через VK</Button>
    </Modal>
  );
};

export default LoginModal;
