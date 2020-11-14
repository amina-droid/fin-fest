import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { useLazyQuery } from '@apollo/client';
import { GET_QUESTIONS, GetQuestions } from '../../apollo';

import s from './Test.module.sass';

type Props = {
  page: string;
};

const Test: React.FC<Props> = ({ page }) => {
  const [disabled, setDisabled] = useState(Boolean(localStorage.getItem(page)));
  const [isOpen, setOpen] = useState(false);
  const [getQuestions, { data }] = useLazyQuery<GetQuestions>(GET_QUESTIONS);

  useEffect(() => {
    if (!disabled && !data) {
      getQuestions();
    }
  }, [disabled, data]);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button
        onClick={openModal}
        className={s.button}
        disabled={disabled || isOpen}
        type="primary"
        block
      >{disabled ? 'Вы уже прошли тест этой площадки' : 'Пройти тест'}
      </Button>
      <Modal
        visible={isOpen}
        onCancel={closeModal}
      >
        sdasas
      </Modal>
    </>
  );
};

export default Test;
