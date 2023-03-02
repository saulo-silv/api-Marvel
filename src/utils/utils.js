import MD5 from "crypto-js/md5";
import axios from "axios";

//https://gateway.marvel.com:443/v1/public/characters?apikey=81a7e3759ba5a8d50578600e0aa3cad6

//key public: 81a7e3759ba5a8d50578600e0aa3cad6
//key private: b116d0b0d900ee102e62f03d08b199e95d1fa8e2
//ts: 1

// 1b116d0b0d900ee102e62f03d08b199e95d1fa8e281a7e3759ba5a8d50578600e0aa3cad6

//result: 3a99aa23d3c11aba1f76bbfce533affb

const getHash = (ts, privateKey, publicKey) => {
  return MD5(ts + privateKey + publicKey).toString();
};
  
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
    return data.data.results;
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
    const result = await axios({method: "GET",url});
    return result.data.data.results
  } catch (err) {
    console.error(err);
    return err;
  }
};

export { fetchHeros, fetchHero };