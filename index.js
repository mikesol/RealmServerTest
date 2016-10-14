var request = require('request');
var url ='http://requestb.in/16veoym1'
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// for all messages to all groups
// issue a post request to the url above
// and save the response code to a realm

var outgoing(statusCode) {
}

var incoming = function(name, message, avatarURL) {
  request
    .post(url)
    .form({message:message,name:name,avatarURL:avatarURL})
    .on('response', function(response) {
      console.log(response.statusCode)
      outgoing(statusCode)
  });
}