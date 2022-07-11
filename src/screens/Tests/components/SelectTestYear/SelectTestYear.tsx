import React from 'react';

import SecondaryButton from '@components/Buttons/SecondaryButton';

export const SelectTestYear = ({ data, handleClick }: any): JSX.Element => {
  return (
    <>
      {data?.length > 0 &&
        data?.map((year: any) => (
          <SecondaryButton
            key={year.value}
            onClick={() => handleClick(year.value)}
          >
            {year.value}
          </SecondaryButton>
        ))}
    </>
  );
};
