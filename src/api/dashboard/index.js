const endpoint = {
  cars: 'http://localhost:8080/cars/make?name=Tesla'
}

export const fetchCars = async () => {

  const response = await fetch(endpoint.cars, {
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