import { useState, useEffect } from "react";

const API = 'https://restcountries.com/v2/all'

function Api(){
const [photos, setPhotos] = useState([])
useEffect(() => {
    fetch(API)
    .then((res)=>{ res.json()})
},[] )
}

export default Api;
