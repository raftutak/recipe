import React from 'react';

// STYLES
import styled from 'styled-components';

import { categories } from '../data/categories';
import AppContext from '../context';

const StyledWrapper = styled.div`
  width: 200px;
`;


const StyledList = styled.ul`
  list-style: none;
  text-align: left;
`;

const StyledListItem = styled.li`
  box-sizing: border-box;
  padding: 15px 0 15px 0;
  background-color: white;
  border-left: 15px solid transparent;
  border-bottom: 1px solid #ddd;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    border-left: 10px solid hsl(138, 61%, 49%);
    padding-left: 20px;
    z-index: 999;
  }
`;

const Sidebar = () => (
  <AppContext.Consumer>
    {context => (
      <>
    
        <StyledWrapper>
        <div className="mb-4 sticky-top">
          <h5>Kategorie główne</h5>
          <StyledList>
            {categories.map((item, id) => {
              return (
                <StyledListItem
                  key={id}
                  value={id + 1}
                  onChange={context.handleInputChange}
                  onClick={context.handleShowCategory}
                >
                  {item.name}
                </StyledListItem>
              );
            })}
          </StyledList>
        </div>
        </StyledWrapper>
      </>
    )}
  </AppContext.Consumer>
);

export default Sidebar;
