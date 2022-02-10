import React from 'react';

import Spacing from '@components/Spacing';
import { COLORS } from '@themes/colors';

import { useToggle } from '../Sidebar/Collpasible/useToggle';
import Buttons from './components/Buttons';
import Description from './components/Description';
import StatusIcon from './components/StatusIcon';
import Subject from './components/Subject';
import Times from './components/Times';
import { Container } from './styles';

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
  const [expand, setExpand] = useToggle(false);

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
        <div className="wrapper" onClick={setExpand}>
          <Times startTime={startTime} endTime={endTime} />
          <Spacing vertical={3} />
          <Subject subject={subject} topic={topic} />
        </div>
        {expand && (
          <div className="extra_info">
            <Description text={text} onClick={setExpand} />
            <Buttons status={status} />
          </div>
        )}
      </div>
    </Container>
  );
};
