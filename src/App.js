import './App.css';
import { useState, useEffect } from 'react';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "./Components/message.css"
import Footer from "./Components/Footer"
import Message from "./Components/Message"
import Data from "./Components/Data"
import Header from "./Components/Header"
import Line from "./Components/Line"




function App() {
  
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.111.128.67/assignment/chat?page=0');
        const data = await response.json();
        setChats(data.chats);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchData();
  }, []);

  return (     
<ChakraProvider> 
   <Header/>
   <Line/>

   <Message message={chats} />
   <Data/>
   <Footer/>
</ChakraProvider>
  )};
export default App;
