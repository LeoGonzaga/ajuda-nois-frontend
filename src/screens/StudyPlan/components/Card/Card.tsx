import React, { useState } from 'react';

import Spacing from '@components/Spacing';
import { COLORS } from '@themes/colors';

import Buttons from './Buttons';
import Description from './Description';
import StatusIcon from './StatusIcon';
import { Container } from './styles';
import Subject from './Subject';
import Times from './Times';

type Props = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text: string;
};

export const Card: React.FC<Props> = ({
  status,
  startTime,
  endTime,
  subject,
  topic,
  text,
}: Props) => {
  const [expand, setExpand] = useState(false);

  return (
    <Container
      style={
        status == 'failed'
          ? { border: `1px solid ${COLORS.ERROR}` }
          : { border: 'none' }
      }
    >
      <StatusIcon status={status} />
      <div className={expand ? 'content expanded' : 'content'}>
        <div className="wrapper" onClick={() => setExpand(!expand)}>
          <Times startTime={startTime} endTime={endTime} />
          <Spacing vertical={3} />
          <Subject subject={subject} topic={topic} />
        </div>
        <div className="extra_info">
          <Description text={text} onClick={() => setExpand(!expand)} />
          <Buttons status={status} />
        </div>
      </div>
    </Container>
  );
};
