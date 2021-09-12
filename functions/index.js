const functions = require("firebase-functions");

// http request 1
exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  console.log(number);
  response.send(number.toString());
});

// http request 2
exports.toTheDojo = functions.https.onRequest((request, response) => {
  response.redirect("http://thenetninja.co.uk");
});

// http callable function
exports.sayHello = functions.https.onCall((data, context) => {
  return "hello, ninjas!";
});
