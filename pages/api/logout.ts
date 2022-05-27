import { destroyCookie } from 'nookies';

export default async function logout(req: any, res: any) {
  destroyCookie({ res }, 'jwt', {
    path: '/',
  });

  res.status(200).end();
};
