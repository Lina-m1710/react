import axios from 'axios'
const API =
  'https://raw.githubusercontent.com/brightestsirius/React_32/refs/heads/master/data/locations.json'

export const locationsService = {
  get: async (id) => {
    const url = id ? `${API}/${id}` : API
    const response = await axios.get(url)
    return response.data
  },
}
