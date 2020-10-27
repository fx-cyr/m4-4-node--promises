// Exercise 2.3 - Use the error
// ----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
    return request('https://journeyedu.herokuapp.com/hello/' + langCode) // 1
      .then((response) => { 
        return JSON.parse(response)
      })
      .then((parsedResponse) => {
        return parsedResponse.data
      })
      .catch((err) => {
        return err.error ? JSON.parse(err.error) : err;
      });
  };
  
  // Testing
  greeting('jehf').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
  
  // 3
