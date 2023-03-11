import React, { createContext, useContext, useState } from 'react'
import axios from 'axios';
const Context = createContext();

export const Provider = ({children}) => {
  const [openMenu,setOpenMenu] = useState(false);
  const [route,setRoute] = useState('Main');
  const [data,setData] = useState([]);
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };
  const makeCommand = async (prompt) => {
    const response = await axios.post(apiUrl, {
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100,
      n: 1,
      stop: '\n',
      temperature: 0.5,
      presence_penalty: 0.6,
      frequency_penalty: 0.6
  }, { headers: headers })
    const result = response.data.choices[0].text;
    setData([...data,{type:'user',text:prompt},{type:'bot',text:result}]);
  }
  return (
    <Context.Provider value={{openMenu,setOpenMenu,route,setRoute,data,setData,makeCommand}}>
        {children}
    </Context.Provider>
  )
}

export const useProvider = () => useContext(Context);