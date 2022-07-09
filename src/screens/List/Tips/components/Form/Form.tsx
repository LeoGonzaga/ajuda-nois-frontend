/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ActionButton from '@components/Buttons/ActionButton';
import Flex from '@components/Flex';
import TextInput from '@components/Inputs/TextInput';
import Spacing from '@components/Spacing';
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

export const Form = ({ onClose, reload, editabled }: any): JSX.Element => {
  const dispatch = useDispatch();
  const [topic, setTopic] = useChangeText(editabled?.name || '');
  const [information, setInformation] = useChangeText(editabled?.content || '');
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    topic: false,
    information: false,
  });

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');

    if (topic.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        topic: true,
      }));
    }

    if (information.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        information: true,
      }));
    }

    const options: Options = {
      method: 'PUT',
      url: '/updateTip',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id: editabled?._id,
        name: topic,
        content: information,
      },
    };
    const { response }: Response = await requestAPI(options);

    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Dica atualizada com sucesso!')));
    await reload();
    setLoading(false);
    onClose();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');

    if (topic.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        topic: true,
      }));
    }

    if (information.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        information: true,
      }));
    }

    const options: Options = {
      method: 'POST',
      url: '/createTip',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: topic,
        content: information,
      },
    };
    const { response }: Response = await requestAPI(options);

    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Dica criada com sucesso!')));
    await reload();
    setLoading(false);
    onClose();
  };

  const handleResetErrorInput = () => {
    if (topic.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        topic: false,
      }));
    }

    if (information.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        information: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [topic, information]);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Nome da dica"
        type="text"
        value={topic}
        onChange={setTopic}
        error={errors.topic}
      />
      <Spacing vertical={15} />
      <textarea
        placeholder="Descrição"
        value={information}
        onChange={setInformation}
      />
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={editabled?.name ? handleUpdate : handleSubmit}
          loading={loading}
          disabled={loading}
        >
          {editabled?.name ? 'Salvar' : 'Criar'}
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
