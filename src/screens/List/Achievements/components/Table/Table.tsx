import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import EmptyState from '@components/EmptyState';
import LoadingTable from '@components/LoadingTable';
import { Options, Response, requestAPI } from '@services/index';
import {
  checkError,
  openErrorNotification,
  openNotification,
} from '@utils/functions';
import { setNotification } from 'src/config/actions/notification';
import { v4 as uuidv4 } from 'uuid';

import {
  Container,
  Tr,
  Column,
  Th,
  ScrollContainer,
  ButtonsContainer,
} from './styles';

export const Table = ({ data, reload, loading }: any): JSX.Element => {
  const dispatch = useDispatch();

  const handleRemove = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteAchievement',
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
    dispatch(
      setNotification(openNotification('Conquista removida com sucesso!'))
    );
    reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column></Column>
          <Column>Nome da conquista</Column>
          <Column>Descrição</Column>
          <Column>Experiência</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuidv4()}>
            <Column>
              <img src={element.icon} width="40px" alt="" />
            </Column>
            <Column>{element.name}</Column>
            <Column>{element.description}</Column>
            <Column>{element.experience} pontos</Column>
            <Column>
              <ButtonsContainer>
                <button onClick={() => handleRemove(element._id)}>
                  <BiTrash size={25} />
                </button>
              </ButtonsContainer>
            </Column>
          </Tr>
        ))}

        {loading && <LoadingTable />}

        {data?.length === 0 && !loading && (
          <EmptyState text="Não há conquistas cadastradas até o momento" />
        )}
      </ScrollContainer>
    </Container>
  );
};
