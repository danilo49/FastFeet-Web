import { Form, Input } from '@rocketseat/unform';
import React from 'react';

import logo from '../../assets/fastfeet-logo@2x.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form>
        <span>SEU E-MAIL</span>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <span>SEU E-MAIL</span>
        <Input name="password" type="password" placeholder="************" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
