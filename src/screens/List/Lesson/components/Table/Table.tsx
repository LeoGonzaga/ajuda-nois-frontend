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
import { uuid } from 'uuidv4';

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
  const handleRemoveSubject = async (id: string) => {
    const token = localStorage.getItem('token');
    const payload: Options = {
      method: 'DELETE',
      url: '/deleteLesson',
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
    dispatch(setNotification(openNotification('Lição removida com sucesso!')));
    reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Titúlo</Column>
          <Column>Tópico</Column>
          <Column>Conteúdo</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()}>
            <Column>{element.title}</Column>
            <Column>{element.topic_info?.name || 'Não informado'}</Column>
            <Column>
              {element?.content?.length >= 150
                ? `${element?.content
                    .replace(new RegExp('<[^>]*>', 'g'), '')
                    ?.substring(0, 150)}...`
                : element?.content}
            </Column>

            <Column>
              {!loading && (
                <ButtonsContainer>
                  <button onClick={() => handleRemoveSubject(element._id)}>
                    <BiTrash size={25} />
                  </button>
                </ButtonsContainer>
              )}
            </Column>
          </Tr>
        ))}

        {loading && <LoadingTable />}

        {data?.length === 0 && !loading && (
          <EmptyState text="Não há matérias cadastradas até o momento" />
        )}
      </ScrollContainer>
    </Container>
  );
};
