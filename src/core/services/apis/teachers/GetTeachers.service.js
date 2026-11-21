import api_client from "../../interceptor";

const GetTeachers = async () => {
  try {
    const response = await api_client.get("/Home/GetTeachers");
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default GetTeachers;
