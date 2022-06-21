import React from 'react';
import { BiTrash } from 'react-icons/bi';

import Spacing from '@components/Spacing';
import Text from '@components/Text';
import { Options, Response, requestAPI } from '@services/index';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

export const Table = ({ data, reload }: any): JSX.Element => {
  const USERTYPE: any = {
    student: 'Aluno(a)',
    teacher: 'Professor(a)',
    admin: 'Admin',
  };

  const handleRemoveUser = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteUser',
      data: {
        id,
      },
      headers: { Authorization: `Bearer ${token}` },
    };
    const { response }: Response = await requestAPI(payload);
    if (response?.status > 300) {
      return;
    }
    reload();
  };

  return (
    <Container>
      <ScrollContainer>
        {data &&
          data?.map((element: any) => (
            <Tr key={uuidv4()}>
              <img
                src={
                  element?.icon
                    ? element.icon
                    : 'https://storage.googleapis.com/ajuda-nois.appspot.com/icons/Conquistas.png'
                }
                alt=""
                width={100}
              />
              <Text bold> {element.name}</Text>
              <Column>{element.description}</Column>
              <Spacing vertical={5} />
              <Text bold size={20}>
                {element.experience} XP
              </Text>
              <ButtonsContainer onClick={() => handleRemoveUser(element?._id)}>
                <BiTrash size={25} color="#fff" />
              </ButtonsContainer>
            </Tr>
          ))}
      </ScrollContainer>
    </Container>
  );
};
