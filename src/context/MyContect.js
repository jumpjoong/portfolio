import React, { createContext, useMemo, useState } from 'react'

export const AppC = createContext(null);

export default function MyContext ({children}) {
  //header 버거메뉴 컨트롤
  const [value, setValue] = useState(false);
  //header 버거메뉴 컨트롤
  const reverse = () => {
    setValue(!value)
  }
  //header 버거메뉴 누르기 전까지 상태값 유지.
  const aaa = useMemo(()=>{
    return value
  },[value])

  const data = {value, setValue, reverse, aaa }

  return (
    <AppC.Provider value={data}>{children}</AppC.Provider>
  )
}