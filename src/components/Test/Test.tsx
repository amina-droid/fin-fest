import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Modal, Typography,
} from 'antd';
import { useLazyQuery, useMutation } from '@apollo/client';
import {
  GET_QUESTIONS, GetQuestions,
  SEND_ANSWERS, SendAnswers, SendAnswersVariables,
} from '../../apollo';
import Question from './Question/Question';

import s from './Test.module.sass';
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
    let isUnmount = false;
    if (!isUnmount) {
      if (data?.questions
        && Object.keys(answers).length === data?.questions.length
      ) {
        sendAnswers({
          variables: { answers },
        });
      }
    }
    return () => { isUnmount = true; };
  }, [answers, data, sendAnswers]);

  useEffect(() => {
    let isUnmount = false;
    if (!isUnmount) {
      if (answersData) {
        localStorage.setItem(`${page}_testDone`, 'true');
        updateScore(answersData.answers.newUserScore);
        setResult(answersData.answers.correctAnswers);
        setDisabled(true);
      }
    }
    return () => { isUnmount = true; };
  }, [page, answersData, setDisabled]);

  const openModal = useCallback(() => {
    getQuestions();
    setOpen(true);
  }, [getQuestions, setOpen]);
  const closeModal = useCallback(() => setOpen(false), [setOpen]);

  const handlerSubmit = useCallback((value: { [key: string]: number }) => {
    setCount(prevCount => prevCount + 1);
    setAnswers(prevState => ({
      ...prevState,
      ...value,
    }));
  }, [setCount, setAnswers]);

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
      {disabled && (
        <div className={s.link}>
          Перейти в <Link to="/shop" component={Typography.Link}>магазин подарков</Link>!
        </div>
      )}
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
