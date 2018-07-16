import http from '../config/service'

export const getSearch = (searchType='')=>http.post('',{searchType})

export const assets = ()=> http.post('/assets')
