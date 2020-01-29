// REACT AND PACKAGES
import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import HeaderSection from '../components/organisms/HeaderSection';
import LoginModal from '../components/_depracated/LoginModal';
import NavSection from '../components/organisms/NavSection';
import RegistrationModal from '../components/_depracated/RegistrationModal';
import Recommendations from '../components/organisms/Recommendations';
import FooterSection from '../components/organisms/FooterSection';
import BlockSection from '../components/organisms/BlockSection';
import DailyRecipeSection from '../components/organisms/DailyRecipeSection';
import ScrollToTopButton from '../components/atoms/ScrollToTopButton';
import CalculatorModal from '../components/organisms/CalculatorModal';
import AboveFooterSection from '../components/organisms/AboveFooterSection';
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
    <Recommendations />
    <AdviceSection />
    <AboveFooterSection />
    <FooterSection />
  </>
);

export default MainTemplate;
