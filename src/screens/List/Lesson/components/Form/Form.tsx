/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ActionButton from '@components/Buttons/ActionButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Select from '@components/Select';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI, Response } from '@services/index';
import { COLORS } from '@themes/colors';
import {
  checkError,
  openErrorNotification,
  openNotification,
} from '@utils/functions';
import { setNotification } from 'src/config/actions/notification';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

export const Form = ({ onClose, reload, topics }: any): JSX.Element => {
  const dispatch = useDispatch();
  const [title, setTitle] = useChangeText('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState(topics[0]?.value);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    title: false,
    content: false,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');

    if (title.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        title: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createLesson',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        title,
        content,
        topic_id: topic,
      },
    };
    const { response }: Response = await requestAPI(options);
    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Lição criado com sucesso!')));

    await reload();
    setLoading(false);
    onClose();
  };

  const handleResetErrorInput = () => {
    if (title.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        title: false,
      }));
    }
  };

  const handleChangeEditor = (editor: any) => {
    if (editor) {
      const html = editor.getHTML();
      setContent(html);
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [title]);

  return (
    <Styles.Container>
      <TextInput
        width="350px"
        placeholder="Nome da lição"
        type="text"
        value={title}
        onChange={setTitle}
        error={errors.title}
      />
      <Spacing vertical={15} />
      <EditorContainer showControls onChange={handleChangeEditor} />
      <Spacing vertical={15} />
      <Text>Associar a um tópico:</Text>
      <Spacing vertical={15} />
      <Select onChange={setTopic} value={topic} data={topics} />
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
          disabled={loading}
          loading={loading}
        >
          Salvar
        </ActionButton>
        <Spacing vertical={15} />
      </Flex>
    </Styles.Container>
  );
};
