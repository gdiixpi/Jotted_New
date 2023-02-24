import axios from 'axios';
const {
	// REACT_APP_BASE_URL_LOCAL,
	REACT_APP_BASE_URL_LIVE,
	REACT_APP_BASE_URL_LIVE_GOOGLE_API
} = process.env;

const axiosInstance = axios.create({
	// baseURL: REACT_APP_BASE_URL_LIVE,
	// baseURL: 'https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ/',
	// baseURL: 'https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ:v2',
	baseURL: REACT_APP_BASE_URL_LIVE,
	timeout: 10000,
	headers: { 'Content-Type': 'application/json', accept: 'application/json' },
	withCredentials: true
});

const axiosInstanceGoogle = axios.create({
	// baseURL: REACT_APP_BASE_URL_LIVE,
	// baseURL: 'https://xg3n-4mh1-ngd5.n7.xano.io/api:w4ONEGEJ/',
	baseURL: REACT_APP_BASE_URL_LIVE_GOOGLE_API,
	timeout: 10000,
	headers: { 'Content-Type': 'application/json', accept: 'application/json' },
	withCredentials: true
});

const axiosPrivate = axios.create({
	baseURL: REACT_APP_BASE_URL_LIVE,
	timeout: 10000,
	headers: { 'Content-Type': 'application/json', accept: 'application/json' },
	withCredentials: true
});

export { axiosPrivate, axiosInstance, axiosInstanceGoogle };
