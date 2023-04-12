import React, { createContext, useMemo, useState } from 'react'
import dummy from "../db/data.json"
export const AppC = createContext(null);

export default function MyContext ({children}) {
  //header 버거메뉴 컨트롤
  const [value, setValue] = useState(false);
  //header 버거메뉴 컨트롤
  const reverse = () => {
    setValue(!value);
  };
  //header 버거메뉴 누르기 전까지 상태값 유지. 컴포넌트 바뀔때마다 value값 초기화 되길래 추가.
  const aaa = useMemo(()=>{
    return value
  },[value]);
  const data = {value, setValue, reverse, aaa, dummy };
  return (
    <AppC.Provider value={data}>{children}</AppC.Provider>
  )
}

