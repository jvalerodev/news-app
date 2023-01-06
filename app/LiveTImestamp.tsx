'use client';

import TimeAgo from 'react-timeago';

type Props = {
  time: string;
};

const LiveTImestamp = ({ time }: Props) => {
  return <TimeAgo date={time} />;
};

export default LiveTImestamp;
