import React from 'react';

class CalculatorTextInput extends React.Component {
    render() {
        return(
            <div>
                <label>{this.props.label}</label>
                <input type="text" placeholder={this.props.placeholder} onChange={this.handleChange} />
            </div>
        )
    }

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({ value : inputValue });
        this.props.onChange(inputValue);
    }

    constructor(props) {
        super(props);
        this.state = { value : '' };
        this.handleChange = this.handleChange.bind(this);
    }
}

export default CalculatorTextInput;