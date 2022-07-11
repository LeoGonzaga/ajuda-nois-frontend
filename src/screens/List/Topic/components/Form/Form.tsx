/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ActionButton from '@components/Buttons/ActionButton';
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

type Props = {
  onClose: () => void;
  reload: () => void;
  subjects: Array<any>;
  editabled: any;
};

export const Form = ({
  onClose,
  reload,
  subjects,
  editabled,
}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useChangeText(editabled?.name ? editabled?.name : '');
  const [subject, setSubject] = useState(
    editabled?.subject_id ? editabled?.subject_id : subjects[0]?.value
  );
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
  });

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const token = localStorage.getItem('token');
    if (name.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: true,
      }));
    }

    const options: Options = {
      method: 'PUT',
      url: '/updateTopic',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id: editabled?._id,
        name,
        subject_id: subject,
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
      setNotification(openNotification('Tópico atualizado com sucesso!'))
    );

    await reload();
    onClose();
    setLoading(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const token = localStorage.getItem('token');
    if (name.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createTopic',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name,
        subject_id: subject,
      },
    };
    const { response }: Response = await requestAPI(options);

    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Tópico criado com sucesso!')));

    await reload();
    onClose();
    setLoading(false);
  };

  const handleResetErrorInput = () => {
    if (name.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [name]);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Nome do tópico"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <Text>Matéria:</Text>
      <Spacing vertical={15} />
      <Select onChange={setSubject} value={subject} data={subjects} />
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={editabled?._id ? handleUpdate : handleSubmit}
          disabled={loading}
          loading={loading}
        >
          {editabled?._id ? 'Salvar' : 'Criar'}
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
