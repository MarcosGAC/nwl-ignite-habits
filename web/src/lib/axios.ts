import axios from 'axios'
//http://localhost:3333
export const api = axios.create({
    baseURL: 'mysql://q1sr4a4p2vtc8ink1v3z:pscale_pw_hAUXZjbgkpTUQgdAPT9NpK84vJ0DHVEyv44I5Hnh3KC@us-east.connect.psdb.cloud/app?sslaccept=strict'
    
})
