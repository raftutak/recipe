// REACT AND PACKAGES
import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import HeaderSection from '../components/organisms/HeaderSection';
import NavSection from '../components/organisms/NavSection';
import Recommendations from '../components/organisms/Recommendations';
import FooterSection from '../components/organisms/FooterSection';
import ScrollToTopButton from '../components/atoms/ScrollToTopButton';
import CalculatorModal from '../components/organisms/CalculatorModal';
import AdviceSection from '../components/organisms/AdviceSection';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    <ScrollToTopButton />
    <NavSection />
    <CalculatorModal />
    {location.pathname === '/' ? <HeaderSection /> : null}
    {children}
    {/* <BlockSection /> */}
    {/* <DailyRecipeSection /> */}
    <AdviceSection />
    <Recommendations />
    {/* <AboveFooterSection /> */}
    <FooterSection />
  </>
);

export default MainTemplate;
