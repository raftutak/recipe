import React from 'react';
import AppContext from '../context';

// COMPONENTS
<<<<<<< HEAD
import SearchResultSection from '../components/organisms/SearchResultSection';
import SearchSection from '../components/organisms/SearchSection';
=======
import SearchResultStyled from '../components/SearchResultStyled';
import SearchForm from '../components/SearchForm';
>>>>>>> daniel
import LoadingDots from '../components/LoadingDots';

const HomeView = () => (
  <AppContext.Consumer>
    {context => (
      <>
        <SearchSection />
        {context.search_isLoading && !context.search_result && <LoadingDots />}
<<<<<<< HEAD
        {context.search_result && <SearchResultSection id="recipe-list" />}
=======
        {context.search_result && <SearchResultStyled id="recipe-list" />}
>>>>>>> daniel
      </>
    )}
  </AppContext.Consumer>
);

export default HomeView;
