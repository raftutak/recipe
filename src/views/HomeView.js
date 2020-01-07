import React from 'react';
import AppContext from '../context';

// COMPONENTS
import SearchResultSection from '../components/organisms/SearchResultSection';
import SearchSection from '../components/organisms/SearchSection';
import LoadingDots from '../components/LoadingDots';

const HomeView = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchSection />
        {context.search_isLoading && !context.search_result && <LoadingDots />}
        {context.search_result && <SearchResultSection id="recipe-list" />}
      </>
    )}
  </AppContext.Consumer>
);

export default HomeView;
