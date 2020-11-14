/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// @ts-nocheck
import React, { useContext, useState } from 'react';
import { LinkProps, useHistory } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { ALLOWED_USERS, AuthContext } from '../../../context/auth';

type Props = LinkProps & {
  className?: string;
};

const SVGLink: React.FC<Props> = ({
  children, to, className, onClick,
}) => {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const hasAccess = Boolean(user) && ALLOWED_USERS.some(id => user?.id === id);

  const handlerClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }

    if (!hasAccess) {
      setVisible(true);
      return;
    }
    history.push(to);
  };
  return (
    <>
      <a xlinkHref={to} role="link" className={className} onClick={handlerClick}>
        {children}
      </a>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="back" onClick={() => setVisible(false)}>
            Закрыть
          </Button>,
        ]}
      >
        <p>Данный раздел недоступен</p>
        <p>Вы сможете в него войти с 18 ноября а также если авторизуетесь!</p>
      </Modal>
    </>
  );
};

export default SVGLink;
