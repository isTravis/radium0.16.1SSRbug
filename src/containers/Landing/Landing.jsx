import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Radium from 'radium';
import Helmet from 'react-helmet';
import {test} from '../../actions/landing';
import {FormattedMessage} from 'react-intl';

let styles = {};

const Landing = React.createClass({
	propTypes: {
		dispatch: PropTypes.func
	},

	statics: {
		fetchData: function(getState, dispatch) {
			return dispatch(test());
		}
	},

	render: function() {
		const metaData = {
			title: 'Testing',
		};
		
		return (
			<div style={styles.container}>

				<Helmet {...metaData} />

				<div style={styles.testStyle}>
					<FormattedMessage id="testMessage" defaultMessage="Here's my Test Mesage" />
				</div>
				

			</div>
		);
	}

});

export default connect( state => {
	return {};
})( Radium(Landing) );

styles = {
	testStyle: {
		color: 'red',
		'@media screen and (min-resolution: 3dppx), screen and (max-width: 767px)': {
			color: 'blue',
		},
	}
};
