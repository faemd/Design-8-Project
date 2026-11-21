import axios from "axios";
const api_client=axios.create({
   baseURL:import.meta.env.VITE_API_URL,
   timeout:10000,
})
api_client.interceptors.request.use(
   (config)=>{return config},
   (error)=>Promise.reject(error)
)
api_client.interceptors.response.use(
   (response)=>{return response.data},
(error)=>{return(Promise.reject(error))} 
)
export default api_client;