import React from "react";
import { useSelector } from "react-redux";

import "./genres.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {console.log(genres[g])}
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;