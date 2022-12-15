import axios from "axios";

const BASE_URL='https://youtube138.p.rapidapi.com';
const options = {
  method: 'GET',
  params: { hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key':"36cc21f5aamsh1e21cd2bd7225f7p105675jsna8519f7e1f69",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
};
 export const fetchDataFromApi=async (url)=>
 {
    const{data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
 }

