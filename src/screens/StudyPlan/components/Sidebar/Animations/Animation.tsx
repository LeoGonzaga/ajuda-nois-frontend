import React, { useEffect, useState } from 'react';

type Props = {
  active: boolean;
  children: React.ReactNode;
};

export function Animation({ active, children }: Props) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setRender(true);
      }, 50);
    } else {
      setRender(false);
    }
  }, [active]);

  return (
    <div className={render ? 'wrapper expanded' : 'wrapper'}>{children}</div>
  );
}
