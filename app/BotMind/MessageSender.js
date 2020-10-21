import axios from 'axios';

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


export function sendMessageToServer(userName, digestedConversation ) {
  var t = axios.post('http://127.0.0.1:5000',
    {
      conversation: digestedConversation,
      headers     : {
        "Access-Control-Allow-Origin"     : "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers"    : "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods"    : "PUT, GET, POST, DELETE, OPTION"
      }
    })
  return t
  }
