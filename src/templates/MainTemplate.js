// REACT AND PACKAGES
import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import HeaderSection from '../components/organisms/HeaderSection';
import LoginModal from '../components/LoginModal';
import NavSection from '../components/organisms/NavSection';
import RegistrationModal from '../components/RegistrationModal';
import Recommendations from '../components/Recommendations';
import FooterSection from '../components/organisms/FooterSection';
import BlockSection from '../components/organisms/BlockSection';
import DailyRecipeSection from '../components/organisms/DailyRecipeSection';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    <NavSection />
    <LoginModal />
    <RegistrationModal />
    {location.pathname === '/' ? <HeaderSection /> : null}
    {children}
    {/* <BlockSection /> */}
    <DailyRecipeSection />
    <Recommendations />
    <FooterSection />
  </>
);

export default MainTemplate;
