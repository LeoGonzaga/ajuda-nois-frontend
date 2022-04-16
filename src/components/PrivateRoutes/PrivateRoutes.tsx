import React  from 'react';

// import { useRouter } from 'next/router';

type Props = {
  children: any;
};

const PrivateRoutes = ({ children }: Props) => {
  // const router = useRouter();
  // const [loading, setLoading] = useState<boolean>(false);

  // const isAuth = () => {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   if (token) {
  //     setLoading(false);
  //     return true;
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   const auth = isAuth();
  //   console.log(auth);git 
  //   if (!auth) {
  //     router.push(ROUTES.LOGIN);
  //   } else {
  //     router.push(router.route);
  //     setLoading(false);
  //   }
  // }, [loading]);

  return <>{children}</>;
};

export default PrivateRoutes;
