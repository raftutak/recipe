import React from 'react';

class Converter extends React.Component {

    state = {
      volume: {
        ml: 0,
        glass: 0
      },
      unit: {
        g: 0,
        spoon: 0,
        glass: 0
      },

    }

    handleAmountChange = (newAmount) => {
      this.setState({
        amount: newAmount
      });
    }

    handleUnitChange = (newUnit) => {
      this.setState({
        amount: newUnit
      });
    }

  render() {
    return (
      <div>
        <h3>Przelicznik Miar Kuchennych</h3>
      </div>
    );
  }
}

export default Converter;
