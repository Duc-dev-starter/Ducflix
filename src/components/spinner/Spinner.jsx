import React from "react";

import "./style.scss";

const Spinner = ({ initial }) => {
    return (
        <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
            <svg className="spinner" viewBox="0 0 50 50">
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20" //bán kính
                    fill="none"
                    strokeWidth="5" //độ dày đường viền
                ></circle>
            </svg>
        </div>
    );
};

export default Spinner;
