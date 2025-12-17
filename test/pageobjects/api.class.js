const axios = require("axios");

class APIClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
      timeout: 5000,
      headers: { "Content-Type": "application/json" }, // JSON by default
    });
  }

  // GET request
  async get(path) {
    const response = await this.client.get(path);
    return response;
  }

  // POST request
 // api.class.js
async post(path, body, config = {}) {
    const response = await this.client.post(path, body, config);
    return response;
}

  // PUT request
  async put(path, body) {
    const response = await this.client.put(path, body);
    return response;
  }

  // DELETE request
  // Correct DELETE method in api.class.js
async delete(path, body = {}, config = {}) {
  const axiosConfig = {
    ...config,
    data: body, // DELETE body must be in `data`
  };
  return await this.client.delete(path, axiosConfig);
}

}

module.exports = new APIClient("https://automationexercise.com/api");
