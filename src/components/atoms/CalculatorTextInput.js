import React from 'react';

import AppContext from '../../context.js';

class CalculatorTextInput extends React.Component {
    render() {
        return(
            <AppContext.Consumer>
                {context => (

                    <div>
                    <label>{context.label}</label>
                    <input type="text" placeholder={context.placeholder} onChange={context.handleChange} />
                    </div>

                )}
            </AppContext.Consumer>
        )
    }

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({ value : inputValue });
        this.props.onChange(inputValue);
    }

    // constructor(props) {
    //     super(props);
    //     this.state = { value : '' };
    //     this.handleChange = this.handleChange.bind(this);
    // }
}

export default CalculatorTextInput;