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
  toBase64,
} from '@utils/functions';
import { setNotification } from 'src/config/actions/notification';
import { useChangeText } from 'src/hooks/useChangeText';

import { Styles } from './styles';

const types = [
  {
    value: 'pomodoro_time',
    name: 'Pomodoro',
  },
  {
    value: 'level',
    name: 'Nível',
  },
  {
    value: 'quiz_completed',
    name: 'Quiz completado',
  },
  {
    value: 'topics_completed',
    name: 'Tópico completado',
  },
  {
    value: 'mock_exam_done',
    name: 'Simulados feitos',
  },
  {
    value: 'mock_exam_score',
    name: 'Nota no simulado',
  },
];

const areas = [
  {
    value: 'general',
    name: 'Geral',
  },
  {
    value: 'human_sciences',
    name: 'Ciências Humanas',
  },
  {
    value: 'languages',
    name: 'Linguagens',
  },
  {
    value: 'mathematics',
    name: 'Matemática',
  },
  {
    value: 'natural_sciences',
    name: 'Ciências Naturais',
  },
];

const GERAL_ONLY = ['mock_exam_done', 'level'];

const PLACEHOLDERS: any = {
  mock_exam_score: 'Quantidade de acertos',
  mock_exam_done: 'Quantidade de simulados feitos',
  topics_completed: 'Quantidade de tópicos completados',
  quiz_completed: 'Quantidade de quizzes realizados',
  level: 'Nível que o aluno deve alcançar',
  pomodoro_time: 'Quantidade de tempo em minutos',
};

export const Form = ({ onClose, reload }: any): JSX.Element => {
  const dispatch = useDispatch();
  const [name, setName] = useChangeText('');
  const [description, setDescription] = useChangeText('');
  const [icon, setIcon] = useState('');
  const [type, setType] = useState<string>(types[0].value);
  const [area, setArea] = useState(areas[0].value);
  const [value, setValue] = useState('');
  const [exp, setExp] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    icon_base64: false,
    experience: false,
  });

  // function getBase64Img() {
  //   return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEX////7+/vr6+vNzc2qqqplywBWrQD/Y5T/JTf+AADmAABeeEQvNydqAAAGBAMAAAGoF14oAAAEBUlEQVR42u2WTUwUVxzA/2925LIojsyqCLtMqSQeFJeFROPHstjdNkZdkaiX9mRTovYgSYNFE43Rg5IeNG5SqyaVcGzXkvTm7hZWq9bKriAYYzSLBI3WAplp0jY2kV3fzPuYGcBxD/bmO0zevPeb//f7v0FQ5EDvwf8LFG89ixYDol9Wo+smKal2sHF6kM6q7qbE5tY03d7SHR6ygiuvwY1txkzIlPaD3NQ4Zryk/PCP1wKibBlI97dq+idXUxqgcEkVnruS/smRpuWaCbrHU5pc/wyTQsata0U77wVBTlRP9UNkT9oE61K9AHL9VERbeTVurMjNm54mqrFw8CwKmWBfpf6V2Dx/TdxN3YjMf2JwIEZ8JnjnEbEjvLAQZ1EKlxkciJ9UcdD1Z5ztDmgsgPIrMkWtMgfd41xOYXZOIjUcLB3tdchypHWIgb5k2gH0nE0zMHjRCRTLWxgY/VQrDuybcAQ/DDEwmwEn8COlSDBcTUE0GXcEjRzqoDDhDH7sfccg2szAt9hogjBFQFRmDyd9N1VTEFegXXKEVKQFJHEUd0DSKhLthIm0HSQpnNdCNizgq147GP0m7QTygNMye6NqM9ekwlG4kLI5I4cMZ+bVhMA8MwX1rw9oIjakAYX6jXlBRRJ4BF6PwmRSfQyLFhJwWy/IG8khKuirljODG0DfGAd3qCBNEol5vCqFAxqYLeUyB0H2A2Q0DspRD3BQfJEc5KBl6KprG6pNEPqqfkKzOQBsha2bQeVw6g3nSySaGYgb99ylhsLDLVYQ3E+oozOGHKzVbCBs+HkuUm6ivd4E0ZYeNTPTTrn51+0wA9TJgpZVLeaV1y+4yS8c64W0/AcFTBCHK/fFEMwFAmo4KRldE0ZxsF8cGbTuzYqHtOz8t6e8TMk5CcjNSC+kdcfgPyag9AoDhUQARmvAcIiAW3v0JzWJg64BJXdBQ21+/b4zwMqRW5dA2h3I7+onYJd+Y4i3FbyMxz4hxE7hS2MBdSq6Fgq6Bny/dxv6Sk76COj6Yz91ZG8dToQ7oYNCqu4QjX9FK5UoPt/PXO701mruhwcxGP2ecahzzxBtUtlzLHclsXtBA6wc+a2brlUc8TCvg5cPM7LiaOPT8Y4ub3bpAbqy+MQ18xRmvIe5nr83YXDt8Nca0/GveWniSHByybEVwx1dD1ccYB/6yF8DTaGcYLFA391o6DjjohaWfKXQ/xCWazmhPDhNbYf2WH4fse9zhRUkLwrXlUD+9iVD5HR77KWheclxkqsZ1bM+pqcWZ2xVe0zXjPb6pyO8IK1l5trcA7mLKuo48+VpQG0BuPmZeTbs9Vi+9oQyqv6Ieyou4FybU+HqRS4o+TH1VG7MvgFFjvfguwFfA4FobmCxcnTPAAAAAElFTkSuQmCC';
  // }
  // const base64img = getBase64Img();
  // function Base64ToImage(base64img, callback) {
  //   const img = new Image();
  //   img.onload = function () {
  //     callback(img);
  //   };
  //   img.src = base64img;
  // }

  // Base64ToImage(base64img, function (img) {
  //   console.log(img);
  //   return img;
  // });

  const formatBaseToRequest = (base: any) => {
    return base.split('base64,');
  };

  const handleUploadIcon = async (e: any) => {
    const base = await toBase64(e.target.files[0]);
    const splitBase = formatBaseToRequest(base);
    setIcon(splitBase[1]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const token = await localStorage.getItem('token');

    if (name.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: true,
      }));
    }

    if (description.length === 0) {
      setErrors((prevState) => ({
        ...prevState,
        description: true,
      }));
    }

    const selectedArea = GERAL_ONLY.includes(type) ? 'general' : area;
    const options: Options = {
      method: 'POST',
      url: '/createAchievement',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name,
        icon_base64: icon,
        description,
        experience: Number(exp),
        type,
        area: selectedArea,
        quantity: Number(value),
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
      setNotification(openNotification('Conquista criada com sucesso!'))
    );
    await reload();
    setLoading(false);
    onClose();
  };

  const handleResetErrorInput = () => {
    if (description.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        descriptions: false,
      }));
    }

    if (name.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: false,
      }));
    }
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [name, description]);

  return (
    <Styles.Container onSubmit={handleSubmit}>
      <TextInput
        width="350px"
        placeholder="Nome da conquista"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <input
        type="file"
        onChange={handleUploadIcon}
        accept="image/png, image/gif, image/jpeg"
      />

      <Spacing vertical={15} />
      <textarea
        placeholder="Descrição da conquista"
        value={description}
        onChange={setDescription}
      />
      <Spacing vertical={15} />
      <Text bold>Condições de desbloqueio:</Text>
      <Spacing vertical={15} />
      <Text>Tipo de conquista:</Text>
      <Spacing vertical={15} />
      <Select onChange={setType} value={type} data={types} />
      {!GERAL_ONLY.includes(type) && (
        <>
          <Spacing vertical={15} />
          <Text>Aréa do conhecimento:</Text>
          <Spacing vertical={15} />
          <Select onChange={setArea} value={area} data={areas} />
        </>
      )}

      <Spacing vertical={15} />

      <input
        type="number"
        placeholder={PLACEHOLDERS[type]}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Spacing vertical={5} />
      <input
        type="number"
        placeholder="Experiência"
        value={exp}
        onChange={(e) => setExp(e.target.value)}
      />
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
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
