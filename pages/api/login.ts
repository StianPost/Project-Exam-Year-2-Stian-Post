import { AnyObject } from 'yup/lib/types';
import { BaseURL } from '../../lib/const';
import axios from 'axios';
import { setCookie } from 'nookies';

export default async function test(req: any, res: any) {
  const { password, identifier } = req.body;

  try {
    const postRes = await axios.post(BaseURL + '/auth/local', {
      identifier,
      password,
    });

    setCookie({ res }, 'jwt', postRes.data.jwt, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    res.status(200).end();
  } catch (e: any) {
    res.status(400).send(e.response.data.message[0].messages[0]);
  }
};
