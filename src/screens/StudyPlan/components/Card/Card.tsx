import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Spacing from '@components/Spacing';
import { Options, Response, requestAPI } from '@services/index';
import {
  checkError,
  openErrorNotification,
  openNotification,
} from '@utils/functions';
import { setNotification } from 'src/config/actions/notification';

import Buttons from './Buttons';
import Description from './Description';
import StatusIcon from './StatusIcon';
import {
  Container,
  ExpandableContent,
  HideableContent,
  Wrapper,
} from './styles';
import Subject from './Subject';
import Times from './Times';

type Props = {
  status: string;
  startTime: string;
  endTime: string;
  subject: string;
  topic: string;
  text?: string;
  id: string;
  reload: () => void;
};

export const Card = ({
  status,
  startTime,
  endTime,
  subject,
  topic,
  text,
  id,
  reload,
}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState({
    currentState: status,
    previousState: '',
  });

  const handleState = (state: string) => {
    setState((prevState) => {
      return {
        currentState: state,
        previousState: prevState.currentState,
      };
    });
  };

  const handleRemove = async () => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteStudyPlan',
      data: {
        id,
      },
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      return;
    }
    dispatch(setNotification(openNotification(response?.data?.message)));
    reload();
  };

  return (
    <Container status={state.currentState}>
      <StatusIcon status={state.currentState} />
      <ExpandableContent expanded={expanded}>
        <Wrapper onClick={() => setExpanded(!expanded)}>
          <Times startTime={startTime} endTime={endTime} />
          <Spacing vertical={3} />
          <Subject subject={subject} topic={topic} />
        </Wrapper>
        <HideableContent>
          {text && (
            <Description text={text} onClick={() => setExpanded(!expanded)} />
          )}
          <Buttons
            status={state.currentState}
            prevStatus={state.previousState}
            onHandleClick={handleState}
            onRemove={handleRemove}
          />
        </HideableContent>
      </ExpandableContent>
    </Container>
  );
};
