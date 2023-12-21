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

    token = tokenData.access_token;
  } catch (error) {
    console.error('Error when trying to fetch token: ', error);
  }

  return token;
}

async function getAnimals(filters) {
  try {
    const { type, age, size, gender, sort, breed, good_with_children, good_with_dogs, good_with_cats, limit } = filters;

    let token = await getToken();

    const url = new URL('https://api.petfinder.com/v2/animals');
    url.searchParams.append('type', type || 'dog');
    url.searchParams.append('age', age || 'baby,young,adult,senior');
    url.searchParams.append('size', size || 'small, medium, large, xlarge');
    url.searchParams.append('gender', gender || 'male,female');
    url.searchParams.append('sort', sort || '-recent');
    url.searchParams.append('good_with_children', good_with_children || false);
    url.searchParams.append('good_with_dogs', good_with_dogs || false);
    url.searchParams.append('good_with_cats', good_with_cats || false);
    url.searchParams.append('limit', limit || 4);

    if (breed) {
      url.searchParams.append('breed', breed);
    }

    if (good_with_children) {
      url.searchParams.append('good_with_children', good_with_children);
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

async function getBreeds(type = 'dog') {
  try {
    // TODO try get from localStorage

    let token = await getToken();

    const response = await fetch(`https://api.petfinder.com/v2/types/${type}/breeds`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      },
    });

    const result = await response.json();

    // TODO set in localStorage (with some expire time)
    return Object.values(result.breeds);
  } catch (error) {
    console.error('Error when trying to fetch breeds: ', error);
  }
  return [];
}

module.exports = { getAnimals, getBreeds };
