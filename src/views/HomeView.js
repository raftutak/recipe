import React from 'react';
import AppContext from '../context';

// COMPONENTS
import MainSearchResultSection from '../components/organisms/MainSearchResultSection';
import SearchSection from '../components/organisms/SearchSection';
import LoadingDots from '../components/atoms/LoadingDots';
import InitialSearchResultSection from '../components/organisms/InitialSearchResultSection';

const HomeView = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchSection />
        {context.initialSearch ? (
          <InitialSearchResultSection />
        ) : context.mainSearch ? (
          <MainSearchResultSection />
        ) : (
          <LoadingDots />
        )}
      </>
    )}
  </AppContext.Consumer>
);

export default HomeView;
