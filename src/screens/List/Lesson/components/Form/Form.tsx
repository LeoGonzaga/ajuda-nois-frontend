/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ActionButton from '@components/Buttons/ActionButton';
import EditorContainer from '@components/Editor';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Select from '@components/Select';
import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, requestAPI } from '@services/index';
import { COLORS } from '@themes/colors';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

export const Form = ({ onClose, reload, topics }: any): JSX.Element => {
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
    await requestAPI(options);
    await reload();
    onClose();
    setLoading(false);
  };

  const handleResetErrorInput = () => {
    if (content.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        content: false,
      }));
    }

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
  }, [content, title]);

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
        >
          Salvar
        </ActionButton>
        <Spacing vertical={15} />
      </Flex>
    </Styles.Container>
  );
};
