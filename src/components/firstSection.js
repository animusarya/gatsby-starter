import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor} ;
`;

const FirstSection = () => (
  <Container className="section">
    <h1>Hello am gatsby starter </h1>
  </Container>
);

export default FirstSection;
