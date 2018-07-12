import http from '../config/service'
export const getSearch = (searchType='')=>http.get('/api',{searchType})
