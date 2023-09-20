const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_1ce5cb8159cf4d7886c1e3d4b4547529'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfYWRkcmVzcyA9PSAnMHgyMTA2YzAwYWM3ZGEwYTM0MzBhZTY2Nzg3OTEzOWU4MzIzMDdhZWFhJykgJiYgKHR4X2xvZ3NfdG9waWMwID09ICcweGRkZjI1MmFkMWJlMmM4OWI2OWMyYjA2OGZjMzc4ZGFhOTUyYmE3ZjE2M2M0YTExNjI4ZjU1YTRkZjUyM2IzZWYnKQ==',
  network: 'ethereum-sepolia',
  destinationIds: ['fa375e89-8c4c-4260-8c0b-91cb20cd4da9']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

  (tx_logs_address == '0x2106c00ac7da0a3430ae667879139e832307aeaa') && (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')