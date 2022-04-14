
// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api",
    timeout: 8000
})


// @ts-ignore
export const giphyApi = axios.create({
    baseURL: "http://api.giphy.com/v1/gifs",
    timeout: 800000
})