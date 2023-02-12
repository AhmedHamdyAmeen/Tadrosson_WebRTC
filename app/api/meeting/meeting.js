const fetch = require('node-fetch');

const API_KEY = 'Tadrosoon_default_secret';
// const Tadrosoon_URL = 'http://localhost:3000/api/v1/meeting';
// const Tadrosoon_URL = 'https://p2p.Tadrosoon.com/api/v1/meeting';
// const Tadrosoon_URL = 'https://Tadrosoon.up.railway.app/api/v1/meeting';
const Tadrosoon_URL = 'https://Tadrosoon.herokuapp.com/api/v1/meeting';

function getResponse() {
    return fetch(Tadrosoon_URL, {
        method: 'POST',
        headers: {
            authorization: API_KEY,
            'Content-Type': 'application/json',
        },
    });
}

getResponse().then(async (res) => {
    console.log('Status code:', res.status);
    const data = await res.json();
    console.log('meeting:', data.meeting);
});
