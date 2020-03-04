import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function components() {
  const actual = true;
  return (
    <>
      <Container>
        <Content>
          <aside>
            <Link to="/">
              <img src={logo} alt="FastFeet" />
            </Link>
            <Link to="/dashboard" actual={actual}>
              <strong>ENCOMENDAS</strong>
            </Link>
            <Link to="/deliverymans">
              <strong>ENTREGADORES</strong>
            </Link>
            <Link to="/">
              <strong>DESTINATÁRIOS</strong>
            </Link>
            <Link to="/">
              <strong>PROBLEMAS</strong>
            </Link>
          </aside>
          <Profile>
            <div>
              <span>Admin FastFeet</span>
              <a href="/">sair do sistema</a>
            </div>
          </Profile>
        </Content>
      </Container>
    </>
  );
}
