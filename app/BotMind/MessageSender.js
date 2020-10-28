const axios = require ("axios");

function getCSRFToken() {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.getAttribute('name') === 'csrf-token') {
      return meta.getAttribute('content');
    }
  }
  return null;
}

const headers = {
        "Access-Control-Allow-Origin"     : "*",
        "Access-Control-Allow-Credentials": "true",
        "withCredentials" : "true",
        "Access-Control-Allow-Headers"    : "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods"    : "PUT, PATCH, GET, POST, DELETE, OPTION"
}

export function sendMessageToServer(userName, digestedConversation ) {
  console.log("bef axios post in sendMessageToserver (and changed http for post)")
  var t = axios.post(
    'http://35.206.81.5:5000/',
    {
      conversation: digestedConversation
    },
    { headers: headers }
  ).then(
    token => {return token}
  );
  
  console.log(t)
  console.log("after axios post in sendMessageToserver")
  return t
}
