import React, { useState, useEffect, useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

import "./header.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Button } from "@mui/material";
import { ThemeContext } from "../../context/themeContext";
const Header = () => {
    const [show, setShow] = useState("top");                //track navbar có hiện không
    const [lastScrollY, setLastScrollY] = useState(0);      //track coi scroll tới đâu 
    const [mobileMenu, setMobileMenu] = useState(false);    //track xem có đang chế độ mobile khong
    const [query, setQuery] = useState("");                 //lưu trữ query tìm kiếm
    const [showSearch, setShowSearch] = useState("");       //có show thanh search trên navbar không
    const navigate = useNavigate();
    const location = useLocation();
    const { theme, toggle } = useContext(ThemeContext);


    //hàm này đảm bảo rằng khi người dùng chuyển đổi giữa các trang hay thay đổi url, nó sẽ scroll ở đầu trang
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    //hàm để kiểm tra xem người dùng có cuộn xuống hay không
    const controlNavbar = () => {
        if (window.scrollY > 200) { //nếu người dùng kéo hơn 200px 
            if (window.scrollY > lastScrollY && !mobileMenu) { //nếu người dùng cuộn xuống và không phải chế độ mobile 
                setShow("hide"); //thì giấu navbar
            } else {
                setShow("show");
            }
        }
        else {
            setShow("top"); //set lại thanh navbar đang ở trên cùng để nó hiển thị navbar 
        }
        setLastScrollY(window.scrollY); //set lần cuộn cuối cùng thành vị trí hiện tại
    };

    useEffect(() => {
        //đăng ký sự kiên scroll thì component mount và cập nhật lại giá trị cho lastScrollY thay đổi
        window.addEventListener("scroll", controlNavbar);
        return () => {
            //vì khi component unmount thì bình thường sự kiện sẽ không bị xóa và ảnh hưởng hiệu suất
            //thế nên phải loại bỏ sự kiện khi component unmount để tối ưu hóa hiệu suất và tránh rò rĩ bộ nhớ
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]); //chỉ thực hiện side effect này khi giá trị thằng lastScrollY thay đổi

    //handle sự kiện nếu người dùng ấn enter và độ dài query ở thanh search > 0 thì search
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const navigationHandler = (type) => {
        if (type === "movie") {
            navigate("/explore/movie");
        }
        else {
            navigate("/explore/tv");
        }
        setMobileMenu(false);
    };


    const [user, setUser] = useState({});
    const [token, setToken] = useState('');

    const decodedToken = (token) => {
        return jwtDecode(token);
    };

    const handleCallbackResponse = (response) => {
        console.log(response.credential)
        const userObject = decodedToken(response.credential);
        setUser(userObject);
    };

    useEffect(() => {
        const tokenFromLocalStorage = localStorage.getItem('token');
        if (tokenFromLocalStorage) {
            setToken(tokenFromLocalStorage);
            const userObject = decodedToken(tokenFromLocalStorage);
            setUser(userObject);
        }

        google.accounts.id.initialize({
            client_id: '909825439256-k6jsq6uek5fc3756k0b1j454eenuculv.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(document.getElementById('signInDiv'), {
            theme: 'outline',
            size: 'large',
        });
        google.accounts.id.prompt();
    }, []);

    const handleLogout = () => {
        // Perform logout actions here, such as clearing user state and local storage
        setUser({});
        localStorage.removeItem('token');
        window.location.href = '/';
    };




    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <Link to='/'>Ducflix</Link>
                </div>
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Movies
                    </li>
                    <li className="menuItem" onClick={() => navigationHandler("tv")}>
                        TV Shows
                    </li>
                    <Link to="/register" className='menuItem' style={{ textDecoration: 'none' }}><span>Register</span></Link>
                    <Link to="/contact" className='menuItem' style={{ textDecoration: 'none' }}><span>Contact</span></Link>
                    {Object.keys(user).length !== 0 ? (
                        <><li className="menuItem">
                            {user.name}
                        </li>
                            <li className="menuItem" onClick={() => handleLogout("tv")}>
                                Sign out
                            </li>
                        </>


                    ) : (
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button sx={{ my: 2, color: "white", display: "block" }}>
                                Sign in
                            </Button>
                        </Link>
                    )}

                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>

                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        //nếu ấn vô cái biểu tưởng 3 que thì sẽ chuyển sang mobile và sổ xuống 3 options
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
            {showSearch && ( //rendering condition thanh search trên nav
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)} //lấy giá trị của input lưu vào biến query
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;
