import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.backgroundColor};
`;

export default class FirstSection extends React.Component {
  render() {
    return (
      <Container>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                wdas
              </a>
              <a href="#" className="dropdown-item">
                Modifiers
              </a>
              <a href="#" className="dropdown-item">
                Grid
              </a>
              <a href="#" className="dropdown-item">
                Form
              </a>
              <a href="#" className="dropdown-item">
                Elements
              </a>
              <a href="#" className="dropdown-item">
                Components
              </a>
              <a href="#" className="dropdown-item">
                Layout
              </a>
              <hr className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                More
              </a>
            </div>
          </div>
      </Container>
    );
  }
}
