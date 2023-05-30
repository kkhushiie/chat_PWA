import React, { useEffect } from "react";

const Data = () => {
 let isLoading = true;


 let API = "http://3.111.128.67/assignment/chat?page=0";
 const fetchApiData = async (URL) => {
 try {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    // isLoading = false;
    }catch(error){
    console.log(error);
    }
 };
 useEffect(() => {
    fetchApiData(API);
 }, []);

 if(isLoading){
    return <>
    {/* <h1>loading...</h1> */}
    </>
 }

 return(
    <>
    <h2>API</h2>
    </>
 );
 };
 export default Data;