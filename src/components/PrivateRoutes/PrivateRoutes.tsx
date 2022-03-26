import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { ROUTES } from 'src/routes/routes';

type Props = {
  children: any;
};

const PrivateRoutes = ({ children }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  const isAuth = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoading(false);
      return true;
    }
    return false;
  };

  useEffect(() => {
    const auth = isAuth();
    if (auth) {
      router.push(ROUTES.LOGIN);
    } else {
      router.push(router.route);
      setLoading(false);
    }
  }, [loading]);

  return <>{loading ? 'Aguarde' : children}</>;
};

export default PrivateRoutes;
