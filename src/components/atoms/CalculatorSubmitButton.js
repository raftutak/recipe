import React from 'react';

class CalculatorSubmitButton extends React.Component {
    render() {
        return(
            <div onClick={this.props.onClick}>
                {this.props.label}
            </div>
        )
    }
}

export default CalculatorSubmitButton;