import axios from 'axios';
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const BlankPage = () => {
	const location = useLocation();

	let text = location.search.split('&')[0].split('=')[1];
	let code = text?.replace('%2', '/');

	// const result = location.search.split('&')[0].split('=')[1];
	// console.log('code: ', code);

	const redirect_uri = 'http://localhost:3000/blankpage';

	const runGoogleApi = async (code, redirect_uri) => {
		try {
			await axios.get('https://xg3n-4mh1-ngd5.n7.xano.io/api:U0aE1wpF:v2/oauth/google/continue', {
				params: { code: code, redirect_uri: redirect_uri }
			});
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		// google auth continue api

		runGoogleApi(code, redirect_uri);

		// navigate(ROUTES.ROLES);
	}, [code]);

	return (
		<>
			<h1>Welcome to heaven</h1>
			<br />
			<p>the code is {code}</p>
			<p>the redirect_uri is {redirect_uri}</p>
		</>
	);
};

export default BlankPage;
