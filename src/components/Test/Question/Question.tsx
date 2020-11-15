import React, { FC, useState } from 'react';
import {
  Button, Form, Radio, Typography,
} from 'antd';
import s from '../Test.module.sass';
import { GetQuestions } from '../../../apollo';

const { Title } = Typography;

type QuestionProps = {
  question: GetQuestions['questions'][0];
  onSubmit: (value: { [key: string]: number }) => void
}

const Question: FC<QuestionProps> = ({ question, onSubmit }) => {
  const [answer, setAnswer] = useState<number | null>(null);

  const handlerChange = (e: any) => {
    const { value } = e.target;
    setAnswer(value);
  };

  const onFinish = () => {
    onSubmit({ [question.id]: answer! });
    setAnswer(null);
  };

  return (
    <Form name={`q_${String(question.id)}`} onFinish={onFinish}>
      <Title level={5}>{question.question}</Title>
      <Radio.Group
        className={s.answers}
        name={String(question.id)}
        onChange={handlerChange}
        value={answer}
      >
        {question.values.map(({ value, label }) => (
          <Radio
            className={s.answer}
            value={value}
            key={value}
          >
            {label}
          </Radio>
        ))}
      </Radio.Group>
      <Button className={s.button} type="primary" htmlType="submit" disabled={answer === null}>Следующий вопрос</Button>
    </Form>
  );
};

export default Question;
