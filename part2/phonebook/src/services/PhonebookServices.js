import axios from 'axios';
const baseUrl = "http://localhost:3031/persons";

const getAll = () => {
  const request = axios.get(baseUrl)

  return request.then(response => response.data);
}

const update = (id, newPerson) => {
  axios.put(`${baseUrl}/${id}`, newPerson)
  return request.then(response => response.data);
}

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then(response => response.data);
}

export default { getAll, update, create };
