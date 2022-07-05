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

const USERTYPE: any = {
  student: 'Aluno(a)',
  teacher: 'Professor(a)',
  admin: 'Admin',
};

type Props = {
  data: Array<any>;
  loading: boolean;
  reload: () => void;
};
export const Table = ({ data, reload, loading }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const handleRemoveSubject = async (id: string) => {
    if (loading) return;
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

    const error = checkError(response?.status);

    if (error) {
      dispatch(
        setNotification(
          openErrorNotification(
            response?.data?.error || response?.data?.message
          )
        )
      );
      return;
    }
    dispatch(
      setNotification(openNotification('Usuário removido com sucesso!'))
    );
    await reload();
  };

  return (
    <Container>
      <ScrollContainer>
        <Th>
          <Column>Nome</Column>
          <Column>Permissão</Column>
          <Column>Email</Column>
          <Column></Column>
        </Th>
        {data?.map((element: any) => (
          <Tr key={uuid()}>
            <Column>{element.username}</Column>
            <Column>{USERTYPE[element.usertype]}</Column>
            <Column>{element.email}</Column>
            <Column>
              <ButtonsContainer>
                <button onClick={() => handleRemoveSubject(element._id)}>
                  <BiTrash size={25} />
                </button>
              </ButtonsContainer>
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
