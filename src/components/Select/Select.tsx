import React from 'react';

import { uuid } from 'uuidv4';

import { Styles } from './styles';

type Props = {
  value: string;
  onChange: (e: string) => void;
  data: Array<{
    name: string;
    value: number | string;
  }>;
};

export const Select = ({ onChange, value, data }: Props): JSX.Element => {
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
