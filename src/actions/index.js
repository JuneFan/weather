import axios from 'axios';

const API_KEY = 'appid=b0f03d7bbbfe52bd70a74eb3c75db8bf';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}&${API_KEY}`;
	const request = axios.get(url);

	console.log('Request:adsdfadf ', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

