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

export const Form = ({
  onClose,
  reload,
  topics,
  subjectsByTeacher,
  editabled,
}: any): JSX.Element => {
  const dispatch = useDispatch();
  const [title, setTitle] = useChangeText(
    editabled?.title ? editabled?.title : ''
  );
  const [content, setContent] = useState(
    editabled?.content ? editabled?.content : ''
  );
  const [topic, setTopic] = useState<string>('');
  const [subject, setSubject] = useState<string>(subjectsByTeacher[0]?.value);
  const [loading, setLoading] = useState(false);
  const [allTopics, setAllTopics] = useState(topics);

  const [errors, setErrors] = useState({
    title: false,
    content: false,
  });

  const handleChangeSubject = (id: string) => {
    setSubject(id);
    const filter = topics?.filter((topic: any) => topic.id == id);
    setAllTopics(filter);
  };

  console.log(content);

  const handleUpdate = async (e: any) => {
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
      method: 'PUT',
      url: '/updateLesson',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id: editabled?._id,
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
    dispatch(
      setNotification(openNotification('Lição atualizada com sucesso!'))
    );

    await reload();
    setLoading(false);
    onClose();
  };

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
    dispatch(setNotification(openNotification('Lição criada com sucesso!')));

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

    const filter = topics?.filter((topic: any) => topic.id == subject);
    setAllTopics(filter);
    setTopic(filter[0]?.value);
  }, [title]);

  useEffect(() => {
    if (editabled?._id) {
      setContent(editabled?.content);
    }
  }, [editabled]);

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
      <EditorContainer
        showControls
        onChange={handleChangeEditor}
        data={content}
      />
      <Spacing vertical={15} />
      <Text>Selecionar matéria:</Text>
      <Spacing vertical={15} />
      <Select
        onChange={handleChangeSubject}
        value={subject}
        data={subjectsByTeacher}
      />
      <Spacing vertical={15} />
      {subject && (
        <>
          <Text>Associar a um tópico:</Text>
          <Spacing vertical={15} />
          <Select onChange={setTopic} value={topic} data={allTopics} />
          <Spacing vertical={15} />
        </>
      )}

      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={editabled?._id ? handleUpdate : handleSubmit}
          disabled={loading || allTopics?.length === 0}
          loading={loading}
        >
          {editabled?._id ? 'Salvar' : 'Criar'}
        </ActionButton>
        <Spacing vertical={15} />
      </Flex>
    </Styles.Container>
  );
};
