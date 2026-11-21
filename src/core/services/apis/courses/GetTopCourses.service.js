import api_client from "../../interceptor"

const getTopCourses=async()=>{
   try{
    const response= await api_client.get("/Home/GetCoursesTop?Count=6")
    return response
   } catch(error){
    console.log(error);
    throw error
   }
}
export default getTopCourses;