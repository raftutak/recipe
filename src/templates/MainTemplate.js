// REACT AND PACKAGES
import React from 'react';

// STYLES
import GlobalStyle from '../theme/GlobalStyle';

// COMPONENTS
import HeaderSection from '../components/organisms/HeaderSection';
import LoginModal from '../components/LoginModal';
import NavSection from '../components/organisms/NavSection';
import RegistrationModal from '../components/RegistrationModal';
<<<<<<< HEAD
import Recommendations from '../components/Recommendations';
import FooterSection from '../components/organisms/FooterSection';
=======
import RecommendationsStyled from '../components/RecommendationsStyled';
import KitchenAdvice from '../components/KitchenAdvice';
import Footer from '../components/Footer';
>>>>>>> daniel
import BlockSection from '../components/organisms/BlockSection';
import DailyRecipeSection from '../components/organisms/DailyRecipeSection';
import ScrollToTopButton from '../components/atoms/ScrollToTopButton';

const MainTemplate = ({ children, location }) => (
  <>
    <GlobalStyle />
    <ScrollToTopButton />
    <NavSection />
    <LoginModal />
    <RegistrationModal />
    {location.pathname === '/' ? <HeaderSection /> : null}
    {children}
    {/* <BlockSection /> */}
<<<<<<< HEAD
    <DailyRecipeSection />
    <Recommendations />
    <FooterSection />
=======
    <RecommendationsStyled />
    <KitchenAdvice />
    <Footer />
>>>>>>> daniel
  </>
);

export default MainTemplate;
