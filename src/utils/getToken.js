import getDogs from './getDogs';

export default async function tokenData() {
  const CLIENTID = 'WK71sClQEcU6kJerMGLmgNPaJigcuIHwOdFdJFj9oupXOG710l';
  const CLIENTSECRET = '3thR6A98P4nWHgkULqvkfVzWh36TcLTuMSg8PttZ';

  let tokenData = '';

  async function getToken() {
    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + CLIENTID + '&client_secret=' + CLIENTSECRET,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const token = await response.json();
    console.log(token);

    tokenData = token.access_token;
    getDogs(tokenData);
  }

  getToken();
  return tokenData;
}
