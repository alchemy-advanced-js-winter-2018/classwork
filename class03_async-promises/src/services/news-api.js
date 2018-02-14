
export function getNews(topic, page = 1, pageSize = 20) {
  const url = `https://newsapi.org/v2/everything?q=${topic}&page=${page}&pageSize=${pageSize}&sortBy=publishedAt&apiKey=9e217382d31d48af8c3bc200cdc6ddbd`;
  
  return fetch(url)
    .then(response => response.json());
}
