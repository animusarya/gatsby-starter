import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor} ;
`;

const FirstSection = () => (
  <Container className="section">
    <h1 className="is-size-1 has-text-primary">Hello am gatsby starter </h1>
    <a className="button is-medium">Search Events</a>
  </Container>
);

export default FirstSection;
