import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import { useQuery, useSubscription } from '@apollo/client';
import {
  GET_VIDEO,
  GetVideo,
  GetVideoVariables, SUBSCRIBE_TO_NEW_VIDEO,
  SubscribeToNewVideo,
  SubscribeToNewVideoVariables,
} from '../../apollo';

type Props = {
  place: string
}
export const VideoPlayer: React.FC<Props> = ({ place }) => {
  const placeName = `video/${place}`;
  const [video, setVideo] = useState('');

  useQuery<GetVideo, GetVideoVariables>(GET_VIDEO, {
    onCompleted: data => {
      if (!video) {
        setVideo(data.video.url);
      }
    },
    variables: {
      place: placeName,
    },
  });

  useSubscription<SubscribeToNewVideo, SubscribeToNewVideoVariables>(
    SUBSCRIBE_TO_NEW_VIDEO, {
      onSubscriptionData: ({ subscriptionData: { data } }) => {
        if (data?.subscribeToVideoChange.url) {
          setVideo(data.subscribeToVideoChange.url);
        }
      },
      variables: {
        placeName,
      },
    },
  );
  return (
    <ReactPlayer
      height="50vh"
      width="100%"
      controls
      url={video}
    />
  );
};
