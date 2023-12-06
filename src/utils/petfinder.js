async function getToken() {
  const CLIENTID = 'WK71sClQEcU6kJerMGLmgNPaJigcuIHwOdFdJFj9oupXOG710l';
  const CLIENTSECRET = '3thR6A98P4nWHgkULqvkfVzWh36TcLTuMSg8PttZ';

  let token = null;

  try {
    const response = await fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      body: 'grant_type=client_credentials&client_id=' + CLIENTID + '&client_secret=' + CLIENTSECRET,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const tokenData = await response.json();
    console.log(tokenData);

    token = tokenData.access_token;
  } catch (error) {
    console.error('Error when trying to fetch token: ', error);
  }

  return token;
}

async function getAnimals(type = 'dog', breed, limit = 4, sort = 'random', good_with_children) {
  try {
    let token = await getToken();
    console.log('token: ' + token);

    const url = new URL('https://api.petfinder.com/v2/animals');
    url.searchParams.append('type', type);
    url.searchParams.append('limit', limit);
    url.searchParams.append('sort', sort);

    if (good_with_children) {
      url.searchParams.append('good_with_children', good_with_children);
    }

    if (breed) {
      url.searchParams.append('breed', breed);
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    });

    const result = await response.json();
    return result.animals;
  } catch (error) {
    console.error('Error when trying to fetch animals: ', error);
  }
  return [];
}

async function getOrganizations() {
  try {
    let token = await getToken();
    console.log('token: ' + token);

    const response = await fetch(`https://api.petfinder.com/v2/organizations?limit=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    });

    const result = await response.json();
    const organizations = {};
    result.organizations.forEach((org) => {
      organizations[org.id] = org.name;
    });
    return organizations;
  } catch (error) {
    console.error('Error when trying to fetch organization: ', error);
  }
  return {};
}

module.exports = { getAnimals, getOrganizations };
