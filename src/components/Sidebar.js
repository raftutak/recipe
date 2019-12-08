import React from 'react';

// STYLES
import styled from 'styled-components';

import { categories } from '../data/categories';
import AppContext from '../context';
import { Button } from 'react-bootstrap';

const StyledWrapper = styled.div`
  width: 250px;
`;

const StyledList = styled.ul`
  list-style: none;
  text-align: left;
`;

const StyledListItem = styled.li`
  box-sizing: border-box;
  padding: 15px 20px;
  background-color: white;
  border-left: 15px solid transparent;
  border-bottom: 1px solid #ddd;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    border-left: 10px solid #ddd;
    padding-left: 30px;
    z-index: 999;
  }
`;

const Sidebar = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <StyledWrapper>
          <h5>Kategorie główne</h5>
          <StyledList>
            {categories.map((item, id) => {
              return (
                <StyledListItem
                  key={id}
                  value={id}
                  onChange={context.handleInputChange}
                  onClick={context.handleShowCategory}
                >
                  {item.name}
                </StyledListItem>
              );
            })}
          </StyledList>
        </StyledWrapper>
      </>
    )}
  </AppContext.Consumer>
);

export default Sidebar;
