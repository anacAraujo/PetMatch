async function getInfoBreed(type, breed) {
  const pluralType = type + 's';
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/${pluralType}?name=${breed}`, {
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
  return [];
}

module.exports = { getInfoBreed };
