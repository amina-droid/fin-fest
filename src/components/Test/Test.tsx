import React, { useContext, useEffect, useState } from 'react';
import {
  Button, Modal, Typography, Form,
} from 'antd';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_QUESTIONS, GetQuestions } from '../../apollo';
import Question from './Question/Question';

import s from './Test.module.sass';
import { SEND_ANSWERS, SendAnswers, SendAnswersVariables } from '../../apollo/mutations/SendAnswers';
import { AuthContext } from '../../context/auth';
import { QUESTION_WORDS } from '../../dictionaries';

const { Title } = Typography;

type Props = {
  page: string;
};
const Test: React.FC<Props> = ({ page }) => {
  const IS_TEST_DONE = Boolean(localStorage.getItem(`${page}_testDone`));

  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState({});

  const [disabled, setDisabled] = useState(IS_TEST_DONE);
  const [isOpen, setOpen] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [getQuestions, { data, loading }] = useLazyQuery<GetQuestions>(
    GET_QUESTIONS,
    {
      fetchPolicy: 'no-cache',
    },
  );
  const [
    sendAnswers,
    { data: answersData },
  ] = useMutation<SendAnswers, SendAnswersVariables>(SEND_ANSWERS);
  const { updateScore } = useContext(AuthContext);

  useEffect(() => {
    if (data?.questions && Object.keys(answers).length === data?.questions.length) {
      sendAnswers({
        variables: { answers },
      });
    }
  }, [answers, data, sendAnswers]);

  useEffect(() => {
    if (answersData) {
      updateScore(answersData.answers.newUserScore);
      setResult(answersData.answers.correctAnswers);
      setDisabled(true);
      localStorage.setItem(`${page}_testDone`, 'true');
    }
  }, [answersData, updateScore]);

  const openModal = () => {
    getQuestions();
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  const handlerSubmit = (value: { [key: string]: number }) => {
    setCount(count + 1);
    setAnswers(prevState => ({
      ...prevState,
      ...value,
    }));
  };

  const isQuestionsEnd: boolean = count === data?.questions.length;

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
        footer={result && ([
          <Button key={result} onClick={closeModal}>
            Закрыть окно
          </Button>,
        ])}
      >
        {!isQuestionsEnd && data?.questions.length && (
          <Question
            onSubmit={handlerSubmit}
            question={data!.questions[count]}
          />
        )}
        {result && (
          <>
            Вы правильно ответили на {result} {QUESTION_WORDS[result]}!
          </>
        )}
      </Modal>
    </>
  );
};

export default Test;
