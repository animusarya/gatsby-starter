import React from 'react';

import styled from 'styled-components';
import Dropdown from './Dropdown';

const Container = styled.div`
  background-color: white;
  width: 360px;
`;

export default class Second extends React.Component {
  render() {
    return (
      <Container>
        <Dropdown />
      </Container>
    );
  }
}
