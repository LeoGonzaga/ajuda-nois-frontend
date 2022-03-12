import React from 'react';

import { uuid } from 'uuidv4';

import { Styles } from './styles';

type Props = {
  value: string;
  onChange: (e: string) => void;
};

const data = [
  {
    value: 'teacher',
    name: 'Professor',
  },
  {
    value: 'user',
    name: 'Aluno',
  },
  {
    value: 'admin',
    name: 'Administrador',
  },
];
export const Select = ({ onChange, value }: Props): JSX.Element => {
  return (
    <Styles.Container value={value} onChange={(e) => onChange(e.target.value)}>
      {data?.map((item) => (
        <option key={uuid()} value={item.value}>
          {item.name}
        </option>
      ))}
    </Styles.Container>
  );
};
