import React from 'react';
import PropTypes from 'prop-types';

class Switch extends React.Component {

//    constructor ( props ) {
//        super( props );
//    }

	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}


    render () {

        return(
            <div className="switch-container">
                <label>
                    <input ref="switch" checked={ this.state.isChecked } onChange={ this._handleChange.bind(this) } className="switch" type="checkbox" />
                    <div>
                        <span><g className="icon icon-toolbar grid-view"></g></span>
                        <span><g className="icon icon-toolbar ticket-view"></g></span>
                        <div></div>
                    </div>
                </label>
            </div>
        );
    }


    _handleChange () {
		this.setState( { isChecked: !this.state.isChecked } );
		if(this.state.isChecked) {
            this.context.router.push('/');
		} else {
            this.context.router.push('/clinton');
		}

    }

}

Switch.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Switch;

