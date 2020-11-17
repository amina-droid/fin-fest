import React, { useState } from 'react';
import {
  Button, Form, Input, Modal,
} from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import {
  CHANGE_VIDEO, ChangeVideo, ChangeVideoVariables, GET_VIDEOS, GetVideos,
} from '../../apollo';

type Video = GetVideos['videos'][0]
type Values = { url: string };
const VideoForm: React.FC<{ video: Video }> = ({ video }) => {
  const [form] = Form.useForm();
  const [changeVideo, {
    data, loading,
  }] = useMutation<ChangeVideo, ChangeVideoVariables>(CHANGE_VIDEO);

  const onFinish = async ({ url }: Values) => {
    await changeVideo({
      variables: {
        videoId: video._id,
        newUrl: url,
      },
    });
  };

  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ url: video.url }}
      >
        <Form.Item label={video.name} name="url">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={data?.changeVideo}
          >{data?.changeVideo ? 'Изменено!' : 'Изменить'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

type TupleVideoModal = [() => JSX.Element, () => JSX.Element]
export const useVideoModal: () => TupleVideoModal = () => {
  const [visible, setVisible] = useState(false);
  const { data } = useQuery<GetVideos>(GET_VIDEOS);

  const modalOpen = () => setVisible(true);
  const modalClose = () => setVisible(false);

  return [
    () => <Button type="dashed" ghost block onClick={modalOpen}>Ссылки на видео</Button>,
    () => (
      <Modal
        visible={visible}
        onCancel={modalClose}
        footer={false}
      >
        {
        data?.videos.map(video => <VideoForm video={video} key={video._id} />)
        }
      </Modal>
    ),
  ] as TupleVideoModal;
};
