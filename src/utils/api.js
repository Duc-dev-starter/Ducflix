import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; //API endpoint
const TMDB_TOKEN = import.meta.env.APP_TMDB_TOKEN; //token TMDB từ biến môi trường

const headers = { //đối tượng chứa token xác thực, đối tượng sẽ gửi đi kèm với mỗi yêu cầu đến api
    Authorization: "bearer " + TMDB_TOKEN,
    accept: "application/json"
};

export const fetchDataFromApi = async (url, params) => {//hàm async nhận 2 tham số để thực hiện yêu cầu GET
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
