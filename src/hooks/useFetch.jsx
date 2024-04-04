import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

//custom hook này nhận một url, trả ra data, loading, error
const useFetch = (url) => {
    const [data, setData] = useState(null); //lưu trữ dữ liệu nhận được từ API
    const [loading, setLoading] = useState(null); //trạng thái ban đầu
    const [error, setError] = useState(null); //thông báo lỗi 

    useEffect(() => {
        //ta kích hoạt trạng thái ban đầu khi fetch một thông tin là loading trong khi chờ axios gửi GET REQUEST TỚI TRANG WEB
        setLoading("loading...");
        setData(null);
        setError(null);

        //gọi hàm từ api.js(hàm nhận 2 tham số là url và param để thực hiện yêu cầu GET)
        fetchDataFromApi(url)
            .then((res) => { //trả về dữ liệu js
                setLoading(false);
                setData(res); //hứng dữ liệu trả về vào biến state data
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
                console.log(err);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
