import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const { url } = useSelector((state) => state.home); //đọc dữ liệu từ store bằng useSelector
    const { data, loading } = useFetch("/movie/upcoming"); //lấy dữ liệu những bộ phim sẽ ra mắt

    useEffect(() => {
        //khi có 1 dữ liệu phim mới, nó sẽ render bất kì 1 cái banner
        //nếu data.results không tồn tại thì trả ra undefined nên mới phải xài ?
        //thêm dấu ? cho [Math.floor(Math.random() * 20)]? vì lỡ nó không đủ 20 thằng trong array
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        console.log(bg)
        console.log(data)
        setBackground(bg);
    }, [data]);


    return (
        <div className="heroBanner">
            {/* nếu loading là false thì load background */}
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome to Ducflix</span>
                    <span className="subTitle">
                        Demo movie web from chicken
                    </span>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
