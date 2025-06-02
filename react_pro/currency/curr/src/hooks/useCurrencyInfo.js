import { useState, useEffect } from "react";

function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    useEffect( ()=>{

        fetch(`https://anyapi.io/api/v1/exchange/convert?apiKey=f317fjck7qgbg7hdi8o87gg93305ou9gon7pf3hdg1jtotuekl48`)
            .then((res)=> res.json())
            .then((res)=> setData(res[currency])) 
            console.log(data);
            

    } , [currency])
    

    return data;
    

}
export default useCurrencyInfo