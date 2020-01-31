import React from 'react';
import styled from 'styled-components';

import { Badge } from 'react-bootstrap';

import AppContext from '../../context';

import { NavLink } from 'react-router-dom';

const Tags = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <div>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'pierogi')}
            >
              pierogi
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'pizza')}
            >
              pizza
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'zupa')}
            >
              zupa
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'kotlet')}
            >
              kotlet
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'ciasto')}
            >
              ciasto
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'koktajl')}
            >
              koktajl
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'kurczak')}
            >
              kurczak
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'tort')}
            >
              tort
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'makaron')}
            >
              makaron
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'grzyby')}
            >
              grzyby
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'zapiekanka')}
            >
              zapiekanka
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'kasza')}
            >
              kasza
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'zapiekanka')}
            >
              zapiekanka
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'lody')}
            >
              lody
            </Tag>
          </NavLink>
          <NavLink to={{ pathname: '/' }}>
            <Tag
              variant="secondary"
              onClick={() => context.handleTagClick(1, 'burger')}
            >
              buger
            </Tag>
          </NavLink>
        </div>
      </>
    )}
  </AppContext.Consumer>
);

const Tag = styled(Badge)`
  margin: 0 10px 10px 0;
  padding: 6px 10px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: hsl(44, 60%, 42%);
  }
`;

export default Tags;
