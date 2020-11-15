import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useLazyQuery } from '@apollo/client';
import { GET_QUESTIONS, GetQuestions } from '../../apollo';

import s from './Test.module.sass';

type Props = {
  page: string;
};
const Test: React.FC<Props> = ({ page }) => {
  const IS_TEST_DONE = Boolean(localStorage.getItem(`${page}_testDone`));

  const [disabled, setDisabled] = useState(IS_TEST_DONE);
  const [isOpen, setOpen] = useState(false);
  const [getQuestions, { data, loading }] = useLazyQuery<GetQuestions>(
    GET_QUESTIONS,
    {
      fetchPolicy: 'no-cache',
    },
  );

  const openModal = () => {
    getQuestions();
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button
        onClick={openModal}
        className={s.button}
        disabled={disabled || isOpen}
        loading={loading}
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
