import React, { createContext, useState } from 'react'

export const AppC = createContext(null);

export default function MyContext ({children}) {
  //header 버거메뉴 컨트롤
  const [value, setValue] = useState(false);
  //header 버거메뉴 컨트롤
  const reverse = () => {
    setValue(!value)
  }

  const data = {value, setValue, reverse}

  return (
    <AppC.Provider value={data}>{children}</AppC.Provider>
  )
}