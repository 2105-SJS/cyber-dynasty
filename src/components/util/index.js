const { }

export const callApi = async ({ url, method, token, body }) => {
    const history = useHistory();
    try {
        const options = {
            method: method ? method.toUpperCase() : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        };
        if (token) options.headers['Authorization'] = `Bearer ${token}`;
        const response = await fetch(`${REACT_APP_BASE_URL}${url}`, options);
        const data = await response.json();
        if(data.error) {
             (data.error);
        }
        return data;
    } catch (error) {
        console.error(error)
    }
}
