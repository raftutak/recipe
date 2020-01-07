import React from 'react';

// STYLES
import styled from 'styled-components';
import { Container, Row, Col, Badge, Form, Button } from 'react-bootstrap';

const StyledContainer = styled(Container)`
  background-color: hsl(215, 37%, 19%);
  box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.3);
`;

const InnerWrapper = styled(Container)`
  padding: 30px 30px;
  color: white;

  h5 {
    color: white;
    text-shadow: 0 0 5px hsla(0, 0%, 0%, 1);
  }

  p {
    color: hsl(0, 100%, 100%, 0.5);
    margin: 0;
    font-size: 0.9rem;
  }

  .brand {
    padding-right: 20px;
    font-family: 'Pacifico', sans-serif;
    font-size: 1.4rem;
  }

  .subscribe {
    border-radius: 5px;
  }
`;

const StyledListItem = styled.li`
  color: hsla(0, 100%, 100%, 0.5);
  font-size: 0.9rem;
  transition: 0.2s ease-in;
  cursor: pointer;

  :hover {
    color: hsla(0, 100%, 100%, 1);
  }
`;

const Tag = styled(Badge)`
  margin: 0 10px 10px 0;
  padding: 6px 10px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: hsl(138, 61%, 49%);
  }
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  font-size: 0.9rem;
  border: none;

  :hover {
    background-color: hsl(138, 61%, 49%);
  }
`;

const Footer = () => (
  <>
    <StyledContainer fluid>
      <InnerWrapper>
        <Row>
          <Col>
            <h5 className="mb-3">
              <strong>O nas</strong>
            </h5>
            <p>
              Witaj na recipe-search! Jest to ogromna baza przepisów zawierająca
              treści z najlepszych polskich blogów kuStyledListItemnarnych. Od
              dziś nie musisz przeglądać wielu stron w poszukiwaniu najlepszego
              lub najprostszego przepisu - wszystko znajdziesz w jednym miejscu,
              właśnie tutaj.
            </p>
          </Col>
          <Col md="auto" className="mr-5">
            <h5 className="mb-3">
              <strong>Kategorie</strong>
            </h5>
            <ul style={{ listStyle: 'none' }}>
              <StyledListItem>Napoje</StyledListItem>
              <StyledListItem>Desery</StyledListItem>
              <StyledListItem>Zupy</StyledListItem>
              <StyledListItem>Dania</StyledListItem>
              <StyledListItem>Dodatki</StyledListItem>
              <StyledListItem>Przekąski</StyledListItem>
              <StyledListItem>Przetwory</StyledListItem>
              <StyledListItem>Pieczywo</StyledListItem>
            </ul>
            {/* <div>
              <Tag variant="secondary">pierogi</Tag>
              <Tag variant="secondary">pizza</Tag>
              <Tag variant="secondary">zupa</Tag>
              <Tag variant="secondary">kotlet</Tag>
              <Tag variant="secondary">ciasto</Tag>
              <Tag variant="secondary">koktajl</Tag>
              <Tag variant="secondary">kompot</Tag>
              <Tag variant="secondary">tort</Tag>
              <Tag variant="secondary">bułka</Tag>
            </div> */}
          </Col>
          <Col>
            <h5 className="mb-3">
              <strong>Popularne tagi</strong>
            </h5>
            <div>
              <Tag variant="secondary">pierogi</Tag>
              <Tag variant="secondary">pizza</Tag>
              <Tag variant="secondary">zupa</Tag>
              <Tag variant="secondary">kotlet</Tag>
              <Tag variant="secondary">ciasto</Tag>
              <Tag variant="secondary">koktajl</Tag>
              <Tag variant="secondary">kompot</Tag>
              <Tag variant="secondary">tort</Tag>
              <Tag variant="secondary">bułka</Tag>
            </div>
          </Col>
          <Col>
            <h5 className="mb-3">
              <strong>Newsletter</strong>
            </h5>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="subscribe"
                  type="email"
                  placeholder="Podaj adres email"
                />
                <Form.Text className="text-muted">
                  Zapoznaj się z zasadami subskrypcji
                </Form.Text>
                <StyledButton variant="secondary">Zapisz się</StyledButton>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <hr style={{ border: '0.5px solid hsla(0, 100%, 100%, 0.05)' }} />
        <Row>
          <Col>
            <span className="brand">recipe-search</span>{' '}
            <span style={{ fontSize: '0.9rem', color:'hsla(0, 100%, 100%, 0.5)' }}>Copyright © 2020</span>
          </Col>
        </Row>
      </InnerWrapper>
    </StyledContainer>
  </>
);

export default Footer;
