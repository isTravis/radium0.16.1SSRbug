import React from 'react';
import Radium from 'radium';
import Helmet from 'react-helmet';

import {FormattedMessage} from 'react-intl';

let styles = {};

const NotFound = React.createClass({

	render: function() {
		const metaData = {
			title: 'Not Found'
		};

		return (
			<div style={styles.container}>

				<Helmet {...metaData} />

				<div style={styles.header}>
					<FormattedMessage id="notFound.pageDoesntExist" defaultMessage="Doh - That page does not seem to exist!"/>
				</div>
				<img src={'http://res.cloudinary.com/pubpub/image/upload/v1448221655/pubSad_blirpk.png'} />
			</div>
			
		);
	}
});

export default Radium(NotFound);

styles = {
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		textAlign: 'center',
		'@media screen and (min-resolution: 3dppx), screen and (max-width: 767px)': {
			backgroundColor: 'green',
		}
	},
	header: {
		fontSize: 35,
		padding: '40px 5px 60px 5px',
	}
};
