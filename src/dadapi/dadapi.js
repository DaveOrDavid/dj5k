import axios from 'axios'

export const randomDadJoke = () => {
  return axios({
    baseURL: 'https://icanhazdadjoke.com',
    headers: {
      Accept: 'application/json'
    }
  })
}

export default randomDadJoke
