import axios from 'axios'
const API =
  'https://6a05e129aa826ca75c0ac6a0.mockapi.io/locations'

export const locationsService = {
  get: async (id) => {
    const url = id ? `${API}/${id}` : API
    const response = await axios.get(url)
    return response.data
  },
}
