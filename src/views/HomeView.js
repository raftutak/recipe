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
        {context.search_isLoading && !context.search_result && <LoadingDots />}
        {/* {context.search_result && <SearchResultSection id="recipe-list" />} */}
        {context.mainSearch.result ? (
          <MainSearchResultSection />
        ) : (
          context.initialSearch && <InitialSearchResultSection />
        )}
      </>
    )}
  </AppContext.Consumer>
);

export default HomeView;
