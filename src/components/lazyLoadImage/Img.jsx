import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; //hiệu ứng blur áp dụng cho ảnh khi nó được hiển thị lần đầu tiên

//ảnh sẽ được tải vào khi nó được cuộn đến trong viewport của trình duyệt, giúp tối ưu hóa hiệu suất của ứng dụng web.
const Img = ({ src, className }) => {
    return (
        //Component này nhận các props như className (lớp CSS), alt (văn bản mô tả ảnh cho trình duyệt tương thích với trợ lý màn hình), effect (hiệu ứng khi ảnh được tải, trong trường hợp này là blur), và src (đường dẫn của ảnh).
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    );
};

export default Img;
