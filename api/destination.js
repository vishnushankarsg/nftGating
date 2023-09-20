const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_1ce5cb8159cf4d7886c1e3d4b4547529'
};

const data = {
  name: 'My Destination',
  to_url: 'https://23e3-3-29-24-130.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));