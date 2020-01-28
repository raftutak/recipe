import React from 'react';

class Converter extends React.Component {

    state = {
      amount: '',
      unit: '',
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
