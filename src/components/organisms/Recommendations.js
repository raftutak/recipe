import React from 'react';

// STYLED COMPONENTS
import styled, { css } from 'styled-components';

// BOOTSTRAP
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// ASSETS
import block_bg_1 from '../../assets/img/block_bg_1.jpg';

// DATA
import { sources } from '../../data/sources';

const advices = [
  {
    content:
      'Makaron przygotowywany z sosem warto jest gotować ok. minutę krócej, niż wskazane jest to w instrukcji. Ostatnią minutę powinien być gotowany w podgrzewającym się sosie. Przeniknie wówczas smakiem i zapachem ziół i dodatków.'
  },
  {
    content:
      'Jeżeli przygotowujesz na spotkanie towarzyskie sałatkę na bazie sałat, nie dodawaj do niej sosu a postaw go obok w sosjerce. Nie spowoduje to szybkiego “zwiędnięcia” sałatki.'
  },
  {
    content:
      'Doskonałym sposobem na sprawdzenie, czy tłuszcz na patelni jest już rozgrzany, jest położenie w niej drewnianej łyzki. Jeżeli wokół pojawią się bąbelki, oznacza to, że możemy wrzucać na patelnię produkty do smażenia.'
  },
  {
    content:
      'Przed rozpoczęciem gotowania lub pieczenia, pilnie przeczytaj przepis. Nie zaczynaj przygotowań bez zapoznania się z nim aż do samego końca. Pomoże to zapobiec panice w momencie, kiedy odkryjesz, że nie przygotowałeś wszystkiego należycie.'
  },
  {
    content:
      'Soląc i pieprząc rybę lub mięso, rób to ze zwiększonej wysokości, zataczając coraz większe kręgi, żeby przyprawy mogły pokryć całą potrawę a nie tylko jej fragmenty.'
  },
  {
    content:
      'Nie wybieraj się do sklepu z listą zakupów spożywczych. Idź na zakupy, przekonaj się, jakie produkty są świeże i najbardziej atrakcyjne, a następnie stwórz z nich na miejscu swój plan posiłków.'
  },
  {
    content:
      'Chcąc zachować biały kolor gotowanego kalafiora, gotuj go z dodatkiem małej ilości mleka i soli a po odlaniu szybko przelej lodowatą wodą.'
  }
];

const containerContent = (
  <>
    <h5
      className="mb-3"
      style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}
    >
      <strong>Kulinarna porada</strong>
    </h5>
    <p style={{ color: 'white', textShadow: '0 0 5px hsla(0, 0%, 0%, 1)' }}>
      {advices[Math.floor(Math.random() * advices.length)].content}
    </p>
  </>
);

const StyledCol = styled(Col)`
  padding: 0;
`;

const StyledContainerBackground = styled(Container)`
  padding: 0;
  background-color: white;

  ${({ backgroundimage }) =>
    backgroundimage &&
    css`
      background-image: url(${block_bg_1});
      background-position: right top;
      background-repeat: no-repeat;
      background-size: auto;
    `}
`;

const StyledContainer = styled(Container)`
  padding: 30px 30px;
  text-align: center;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  ${({ grayoverlay }) =>
    grayoverlay &&
    css`
      color: white;
      background-color: rgba(30, 45, 66, 0.7);
    `}
`;

const StyledCarousel = styled(Carousel)`
  margin: 0;
  padding: 0 7%;

  .carousel-control-prev {
    justify-content: left;
    width: auto;
  }

  .carousel-control-prev-icon {
    filter: brightness(70%);
  }

  .carousel-control-next {
    justify-content: right;
    width: auto;
  }

  .carousel-control-next-icon {
    filter: brightness(70%);
  }
`;

const Recommendations = () => (
  <>
    <Container fluid style={{ zIndex: '-5' }}>
      <Container style={{ padding: '0' }}>
        <Row>
          <StyledCol xs={12} md={6} lg={6}>
            <StyledContainerBackground backgroundimage={1}>
              <StyledContainer style={{ minHeight: '190px' }} grayoverlay={1}>
                {containerContent}
              </StyledContainer>
            </StyledContainerBackground>
          </StyledCol>
          <StyledCol xs={12} md={6} lg={6}>
            <StyledContainerBackground>
              <StyledContainer>
                <h5 className="mb-4">
                  <strong>Sprawdź nasze źródła</strong>
                </h5>
                <StyledCarousel indicators={false} variant="dark">
                  {sources.map((item, id) => {
                    return (
                      <Carousel.Item key={id}>
                        <>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              style={{ width: '80%' }}
                              src={item.src}
                              alt={id}
                            />
                          </a>
                        </>
                      </Carousel.Item>
                    );
                  })}
                </StyledCarousel>
              </StyledContainer>
            </StyledContainerBackground>
          </StyledCol>
        </Row>
      </Container>
    </Container>
  </>
);

export default Recommendations;
