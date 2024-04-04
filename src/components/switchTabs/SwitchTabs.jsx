import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    //hàm nhận 2 tham số là tab(Day hoặc Week) và vị trí
    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index) => ( //data là 1 mảng gồm 2 thằng là Day và Week
                    //ta duyệt tuần tự, nếu vị trí của selectedTab === 0 , set nó là active, mặc định ban đầu là Day
                    //nếu === 100 thì Week active(active thì sẽ có cái transition )
                    <span
                        key={index}
                        className={`tabItem ${selectedTab === index ? "active" : ""
                            }`}
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                {/* cách viết shorthand thay vì left: left */}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    );
};

export default SwitchTabs;
