import api_client from "../../interceptor"

const getLatestNews = async() => {
    try{

        const response= await api_client.get ("/News?PageNumber=1&RowsOfPage=3&SortingCol=InsertDate&SortType=DESC")
        return response;
    }catch(error){
        console.log(error);
    throw error
    }
}

export default getLatestNews