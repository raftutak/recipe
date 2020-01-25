import React from 'react';

import AppContext from '../../context.js';

class CalculatorSubmitButton extends React.Component {
    render() {
        return(
            <AppContext.Consumer>
                {context => (

                <div onClick={context.onClick}>
                    {context.label}
                </div>

                )}
            </AppContext.Consumer>
        )
    }
}

export default CalculatorSubmitButton;