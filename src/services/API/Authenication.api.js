import { axiosPrivate } from '../Axios/axios';

export const newTreeApiFn = async (payload) => {
	const url = '/tree';
	const response = await axiosPrivate.post(url, payload);

	return response;
};
export const getnewTreeApiFn = async (payload) => {
	const url = '/tree';
	const response = await axiosPrivate.get(url, payload);

	return response;
};
