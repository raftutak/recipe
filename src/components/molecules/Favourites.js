import React from 'react';
import axios from 'axios';

class Favourites extends React.Component {
  state = {
    favourites_list: [],
    favourites_result: undefined
  };

  handleLoadFavourites = async (username = this.props.username) => {
    const url = `https://recipe-search.projektstudencki.pl/recipe//searchUserFavsRecipes/?username=${username}`;
    const response = await axios(url);

    this.setState({
      favourites_list: response.data.recipeFavs
    });

    // const urlAfter = ``
    // const responseAfter = await axios(urlAfter)

    // this.setState({
    //     favourites_result: responseAfter.data.recipes
    // })
  };

  componentDidMount = () => {
    this.handleLoadFavourites();
  };

  render() {
    return (
      <>
        {this.state.favourites_list &&
          this.state.favourites_list.map(item => (
            <>
              <p>{item}</p>
            </>
          ))}
      </>
    );
  }
}

export default Favourites;
