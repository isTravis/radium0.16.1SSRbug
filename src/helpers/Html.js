import React, {Component, PropTypes} from 'react';
import Radium, {StyleRoot} from 'radium';
// import {Component, PropTypes} from 'react';
// import Radium from 'radium';

@Radium
export default class Html extends Component {
	static propTypes = {
		component: PropTypes.node,
	}

	render() {
		return (
			<StyleRoot>
				{this.props.component}
			</StyleRoot>
		);
		// return this.props.component;
	}
}
