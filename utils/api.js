const axios = require("axios");

const api = {
  getUser: async (username) => {
    try {
      const queryUrl = `https://api.github.com/users/${username}`;
      const response = await axios.get(queryUrl)
      const {name, avatar_url, html_url} = response.data
      const responseData = {
        name,
        avatar_url,
        html_url
      }
      console.log(responseData);
      return responseData;

    } catch (error) {
      console.log("error");
    }
  }
}

module.exports = api;
