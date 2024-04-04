import React, { Suspense } from "react";

import "./style.scss";

//kĩ thuật code splitting, khi bundle thì chia những component thành những file js nhỏ hơn khi nào dùng thì mới render, giúp cái thiện tốc độ của web
const HeroBanner = React.lazy(() => import("./heroBanner/HeroBanner"));
const Trending = React.lazy(() => import("./trending/Trending"));
const Popular = React.lazy(() => import("./popular/Popular"));
const TopRated = React.lazy(() => import("./topRated/TopRated"));

const Home = () => {
    return (
        <div className="homePage">
            {/* khi chưa load được thì muốn hiện gì bỏ vào prop fallback */}
            <Suspense fallback={<h1>Loading...</h1>}>
                <HeroBanner />
                <Trending />
                <Popular />
                <TopRated />
            </Suspense>
        </div>
    );
};

export default Home;
