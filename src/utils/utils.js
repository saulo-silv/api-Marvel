import MD5 from "crypto-js/md5";
import axios from "axios";

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};

const htt =  "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=81a7e3759ba5a8d50578600e0aa3cad6&hash=3a99aa23d3c11aba1f76bbfce533affb"
    
//webpack compiled with 1 warning
let API_URL = process.env.REACT_APP_BASE_URL;

const fetchHeros = async (name) => {
  let heroUrl = `${API_URL}/v1/public/characters`;

  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${name}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return [data.data.results];
  } catch (err) {
    console(err);
    return;
  }
};

const fetchHero = async (id) => {
  let heroUrl = `${API_URL}/v1/public/characters/${id}`;

  let ts = Date.now().toString();
  let apiKey = process.env.REACT_APP_API_KEY;
  let privateKey = process.env.REACT_APP_PRIVATE_KEY;
  let hash = getHash(ts, privateKey, apiKey);
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchHeros, fetchHero  };