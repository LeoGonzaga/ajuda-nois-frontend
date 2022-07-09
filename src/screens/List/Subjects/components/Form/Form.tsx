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

const data = [
  {
    value: 'mathematics',
    name: 'Matemática e suas tecnologias',
  },
  {
    value: 'human_sciences',
    name: 'Ciencias humanas e suas tecnologias',
  },
  {
    value: 'languages',
    name: 'Linguagens e suas tecnologias',
  },
  {
    value: 'natural_sciences',
    name: 'Ciências da natureza e suas tecnologias',
  },
];

export const Form = ({
  teachers,
  reload,
  onClose,
  editabled,
}: any): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useChangeText(editabled?.name ? editabled?.name : '');
  const [area, setArea] = useState<string>(
    editabled?.area ? editabled?.area : data[0]?.value
  );
  const [teacher, setTeacher] = useState<string>(
    editabled?.user_id ? editabled?.user_id : teachers[0]?.value
  );
  const [errors, setErrors] = useState({
    name: false,
    area: false,
    teacher: false,
  });

  const [loading, setLoading] = useState(false);
  console.log(editabled);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    if (loading) return;
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
      url: '/updateSubject',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        id: editabled?._id,
        name,
        area,
        teacher_id: teacher,
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
      setNotification(openNotification('Matéria atualizada com sucesso!'))
    );

    await reload();
    setLoading(false);
    onClose();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (loading) return;
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
      url: '/createSubject',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name,
        area,
        teacher_id: teacher,
      },
    };
    const { response }: Response = await requestAPI(options);

    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Matéria criada com sucesso!')));

    await reload();
    setLoading(false);
    onClose();
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
        placeholder="Nome da matéria"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <Text>Aréa do conhecimento:</Text>
      <Spacing vertical={15} />
      <Select onChange={setArea} value={area} data={data} />
      <Spacing vertical={15} />
      <Text>Professor(a):</Text>
      <Spacing vertical={15} />
      <Select onChange={setTeacher} value={teacher} data={teachers} />
      <Spacing vertical={15} />
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={editabled?._id ? handleUpdate : handleSubmit}
          loading={loading}
          disabled={loading}
        >
          {editabled?._id ? 'Salvar' : 'Criar'}
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
