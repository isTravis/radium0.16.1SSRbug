import React, {Component, PropTypes} from 'react';
import Radium, {StyleRoot} from 'radium';
// import {Component, PropTypes} from 'react';
// import Radium from 'radium';

@Radium
export default class Html extends Component {
	static propTypes = {
		component: PropTypes.node,
	};

	render() {
		/* This will cause the reactid mismatch */
		/* ------- */
		return (
			<StyleRoot>
				{this.props.component}
			</StyleRoot>	
		);

		/* This will NOT cause the reactid mismatch */
		/* ------- */
		// return (
		// 	<div>
		// 		{this.props.component}
		// 	</div>
		// );

	}
}
