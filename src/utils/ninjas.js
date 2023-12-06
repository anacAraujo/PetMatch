async function getInfoBreed(type, breed) {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/${type}?name=${breed}`, {
      method: 'GET',
      headers: {
        'x-api-key': 'M9VfuEB0q8+EPjNn2tPyWw==ZTMC2Ajxxt9WkR3T',
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error when trying to fetch breeds: ', error);
  }
}

module.exports = { getInfoBreed };
