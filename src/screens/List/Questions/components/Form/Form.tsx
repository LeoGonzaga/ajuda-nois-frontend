/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ChangeEvent } from 'react';
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
  const [content, setContent] = useState<string>('');
  const [name, setName] = useChangeText('');
  const [topic, setTopic] = useState(topics[0]?.value);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
  });

  const [awnsers, setAwnsers] = useState([
    {
      check: true,
      value: '',
    },
    {
      check: false,
      value: '',
    },
    {
      check: false,
      value: '',
    },
    {
      check: false,
      value: '',
    },
    {
      check: false,
      value: '',
    },
  ]);

  const handleResetErrorInput = () => {
    if (name.length > 0) {
      setErrors((prevState) => ({
        ...prevState,
        name: false,
      }));
    }
  };

  const handleCheck = (index: number) => {
    const items = [...awnsers];
    const disabledCheck = items?.map((elem) => {
      return {
        check: false,
        value: elem.value,
      };
    });

    disabledCheck[index].check = true;
    setAwnsers(disabledCheck);
  };

  const handleChangeTextAwnser = (
    index: number,
    { target }: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const items = [...awnsers];
    items[index].value = target.value;
    setAwnsers(items);
  };

  const handleChangeEditor = (editor: any) => {
    if (editor) {
      const html = editor.getHTML();
      setContent(html);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const token = localStorage.getItem('token');

    const alternatives = awnsers?.filter((awnser) => {
      return awnser.value.length > 0;
    });

    const formatAlternatives = alternatives?.map(
      (alternative) => alternative.value
    );
    const correctAwnser: any = awnsers?.filter((awnser) => awnser.check);
    const options: Options = {
      method: 'POST',
      url: '/createQuestion',
      headers: { Authorization: `Bearer ${token}` },
      data: {
        questionHtml: content,
        alternatives: formatAlternatives,
        answer: correctAwnser[0]?.value,
        topic_id: topic,
        name,
      },
    };
    const { response }: Response = await requestAPI(options);

    const error = checkError(response?.status);

    if (error) {
      dispatch(setNotification(openErrorNotification(response?.data?.error)));
      setLoading(false);
      return;
    }
    dispatch(setNotification(openNotification('Questão criada com sucesso!')));
    await reload();
    onClose();
    setLoading(false);
  };

  useEffect(() => {
    handleResetErrorInput();
  }, [name]);

  return (
    <Styles.Container>
      <TextInput
        width="350px"
        placeholder="Nome da matéria"
        type="text"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Spacing vertical={15} />
      <Text>Associar a um tópico:</Text>
      <Spacing vertical={5} />
      <Select onChange={setTopic} value={topic} data={topics} />
      <EditorContainer showControls onChange={handleChangeEditor} />
      <Spacing vertical={4} />
      <Styles.Content>
        {awnsers?.map((awnser, index) => (
          <Styles.Flex key={index}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={awnser.check}
              onChange={() => handleCheck(index)}
            />
            <textarea
              placeholder="Digite uma resposta"
              value={awnser.value}
              onChange={(event) => handleChangeTextAwnser(index, event)}
            />
          </Styles.Flex>
        ))}
      </Styles.Content>
      <Flex width="19%">
        <ActionButton
          color={COLORS.SECONDARY}
          width="350px"
          onClick={handleSubmit}
          loading={loading}
          disabled={loading}
        >
          Salvar
        </ActionButton>
        <Spacing vertical={5} />
      </Flex>
    </Styles.Container>
  );
};
