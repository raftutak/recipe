import React from 'react';

// COMPONENTS
import SingleRecipeSection from '../components/organisms/SingleRecipeSection';

const SingleRecipeView = ({ id }) => {
  return (
    <>
      <SingleRecipeSection id={id} />
    </>
  );
};

export default SingleRecipeView;
