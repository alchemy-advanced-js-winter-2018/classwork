
const URL = 'https://newsapi.org/v2/everything?sortBy=publishedAt';
const API_KEY = '&apiKey=9e217382d31d48af8c3bc200cdc6ddbd'


export function getNews(topic, page = 1, pageSize = 20) {
  const url = `${URL}&q=${topic}&page=${page}&pageSize=${pageSize}${API_KEY}`;
  // const url = `https://newsapi.org/v2/everything?q=${topic}&page=${page}&pageSize=${pageSize}&sortBy=publishedAt&apiKey=9e217382d31d48af8c3bc200cdc6ddbd`;
  
  return fetch(url)
    .then(response => response.json());
}