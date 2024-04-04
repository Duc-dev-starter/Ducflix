import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Register from "./components/register/Register";
import Contact from "./components/contact/Contact";
import Login from "./login/Login";

function App() {
    const dispatch = useDispatch(); //điều phối đến một action nào đó dùng useDispatch
    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []);

    //fetch api = axios không cần parse sang json
    const fetchApiConfig = () => {
        //nếu có xử lý, lưu trữ state xài custom hook useFetch
        fetchDataFromApi("/configuration").then((res) => { //lấy details từ API
            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };
            console.log(res);
            dispatch(getApiConfiguration(url)); //điều phối tới hàm getApiConfiguration
        });
    };

    //hàm để xử lý gọi thể loại
    const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};

        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`)); //tất cả kết quả đẩy vào mảng promises tí nữa sử dụng trong Promise.all cho nó gửi cùng lúc yêu cầu api
        });

        //Hàm Promise.all được sử dụng để chờ đợi tất cả các promise trong mảng promises hoàn thành và trả về kết quả của chúng dưới dạng một mảng.
        //Trong trường hợp này, mỗi promise đại diện cho một yêu cầu API để lấy danh sách thể loại cho phim hoặc TV.
        const data = await Promise.all(promises);
        console.log(data); //trả ra mảng có 2 phần từ là những array thể loại của thằng tv và movie
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });

        dispatch(getGenres(allGenres)); //điều phối tới hàm getGenres
    };


    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:mediaType/:id" element={<Details />} />
                    <Route path="/search/:query" element={<SearchResult />} />
                    <Route path="/explore/:mediaType" element={<Explore />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
