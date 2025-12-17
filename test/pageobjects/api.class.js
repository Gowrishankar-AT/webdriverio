const axios = require('axios');

class APIClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL,
            timeout: 5000,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // GET request
    async get(path) {
        const response = await this.client.get(path);
        return response;
    }

    // POST request
    async post(path, body) {
        const response = await this.client.post(path, body);
        return response;
    }

    // PUT request
    async put(path, body) {
        const response = await this.client.put(path, body);
        return response;
    }

    // DELETE request
    async delete(path) {
        const response = await this.client.delete(path);
        return response;
    }
}

module.exports = new APIClient('https://automationexercise.com/api'); // example API
