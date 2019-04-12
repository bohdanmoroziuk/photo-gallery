export const apiPrefix = (query) => 
  (process.env.REACT_APP_API_URL).concat(query);