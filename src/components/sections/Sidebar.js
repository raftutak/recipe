import React from 'react';

// STYLES
import styled from 'styled-components';
import Heading from '../interface/Heading';

const StyledWrapper = styled.div`
  flex-shrink: 0;
  width: 250px;
  min-height: 500px;
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 15px;
  padding-left: 15px;
  text-align: left;
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
    border-left: 10px solid #31c95f;
    padding-left: 30px;
    font-weight: 600;
    z-index: 999;
  }
`;
// poprawic, zeby dzialalo!
// const StyledListItemSub = styled.li`
//   box-sizing: border-box;
//   display: none;

//   :hover {
//     display: inline-block;
//   }
// `;

const Sidebar = () => (
  <>
    <StyledWrapper>
      <StyledHeading>Kategorie główne</StyledHeading>
      <StyledList>
        <StyledListItem>Dania
          {/* <StyledListItemSub>Śniadania</StyledListItemSub>
          <StyledListItemSub>Obiady</StyledListItemSub>
          <StyledListItemSub>Kolacje</StyledListItemSub> */}
        </StyledListItem>
        <StyledListItem>Zupy</StyledListItem>
        <StyledListItem>Desery</StyledListItem>
        <StyledListItem>Przekąski</StyledListItem>
        <StyledListItem>Dodatki</StyledListItem>
        <StyledListItem>Napoje</StyledListItem>
        <StyledListItem>Przetwory</StyledListItem>
        <StyledListItem>Pieczywo</StyledListItem>
        <StyledListItem>Różne</StyledListItem>
      </StyledList>
    </StyledWrapper>
  </>
);

export default Sidebar;
