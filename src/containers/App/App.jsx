import React, { PropTypes } from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl';
const messages = require('../../../translations/languages/en.json');

let styles = {};
const App = React.createClass({
	propTypes: {
		children: PropTypes.object.isRequired,
		dispatch: PropTypes.func
	},

	render: function() {
		
		return (
			
			<IntlProvider locale={'en'} messages={messages}>
				
					<div>

						<h1>App Header</h1>

						<div className="content" style={styles.content}>
							{this.props.children}
						</div>
					</div>
				
			</IntlProvider>
		);
	}

});

export default connect( state => {
	return {};
})( Radium(App) );


styles = {
	content: {
		backgroundColor: 'white',
		// '@media screen and (min-resolution: 3dppx), screen and (max-width: 767px)': {
		// 	backgroundColor: 'green',
		// },
	},

};
