import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => { //một component giống lồng chứa cho những content không bị tràn ra ngoài
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
