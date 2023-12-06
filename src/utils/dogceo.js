async function getAllBreeds() {
  try {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`, {
      method: 'GET',
    });

    const result = await response.json();
    return result.message;
  } catch (error) {
    console.error('Error when trying to fetch breeds: ', error);
  }
  return [];
}

module.exports = { getAllBreeds };
