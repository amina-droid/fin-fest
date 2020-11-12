import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

type EditorProps = {
  onSubmit: (value: string) => void;
  submitting?: boolean;
}
const Editor: React.FC<EditorProps> = ({
  onSubmit, submitting,
}) => {
  const [message, setMessage] = useState('');
  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(message);
  };
  return (
    <>
      <Form.Item>
        <Input.TextArea rows={4} onChange={handleChange} value={message} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={handleSubmit} type="primary">
          Отправить
        </Button>
      </Form.Item>
    </>
  );
};

export default Editor;
