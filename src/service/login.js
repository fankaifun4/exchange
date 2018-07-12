import http from '../config/service'

export const login=(users,pass)=>http.post('/api/login',{users,pass})

