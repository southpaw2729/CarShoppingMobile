const endpoint = {
  model: 'http://localhost:8080/model/'
}

export const fetchCarDetails = async (id) => {


  const response = await fetch(endpoint.model + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }

  }).then(res => {
    return res.json()
  }).catch((error) => {

    throw new Error('Something Went Wrong!!' + error);
  })

  return response
}