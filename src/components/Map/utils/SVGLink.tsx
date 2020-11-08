/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

// @ts-nocheck
import React, { useState } from 'react';
import { LinkProps, useHistory } from 'react-router-dom';
import { Button, Modal } from 'antd';

type Props = LinkProps & {
  className?: string;
};

const SVGLink: React.FC<Props> = ({
  children, to, className, onClick,
}) => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const handlerClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    setVisible(true);
    // history.push(to);
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
        Раздел в работе, но скоро будет доступен!
      </Modal>
    </>
  );
};

export default SVGLink;
