import React from 'react'
import { useState,  useEffect } from 'react'

//đối tượng themes có 2 thuộc tính
//mỗi thuộc tính này lại là 1 đối tượng có 2 thuộc tính khác
const themes = {
    dark: {
      backgroundColor: 'black',
      color: 'white'
    },
    light: {
      backgroundColor: 'white',
      color: 'black'
    }
  }

  //đối tượng khởi tạo là theme light
  const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
  }
  
  //tạo ra 1 context cung cấp cách để chia sẻ dữ liệu mà không cần tạo ra cái prop
  const ThemeContext = React.createContext(initialState)
  
  //children đại diện cho thành phần con được bao trong nó
  function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false) 
    // On mount, read the preferred theme from the persistence
    useEffect(() => {
      const isDark = localStorage.getItem('dark') === 'true'
  //store the state mode to the local storage
      setDark(isDark)
    }, [dark])
    // To toggle between dark and light modes
    const toggle = () => {
      const isDark = !dark
      localStorage.setItem('dark', JSON.stringify(isDark))
      setDark(isDark)
    }
    const theme = dark ? themes.dark : themes.light
    return (
      //cung cấp 3 thằng là theme: xác định dựa trên trạng thái của dark
      //dark: là giá trị đọc từ local storage
      //toggle: function chuyển đổi giữa dark và light mode
      <ThemeContext.Provider value={{ theme, dark, toggle }}>
        {children}
      </ThemeContext.Provider>
    )
  }
  
  export { ThemeProvider, ThemeContext }
  
  