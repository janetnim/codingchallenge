const handleResponse = response => response.json().then((data) => {
	if (!response.ok) return Promise.reject(data);

	return data;
});

const call = ({endpoint, method, data}) => fetch(`${endpoint}`, {
	method,
	headers: {
		'content-type': 'application/json',
	},
	body: JSON.stringify(data),
}).then(handleResponse);

export default call;
