import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./circleRating.scss";

const CircleRating = ({ rating }) => { //nhận prop là số điểm
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating} //giá trị điểm hiện tại
                maxValue={10} //max điểm là 10
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;
