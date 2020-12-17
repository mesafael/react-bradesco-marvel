import CryptoJS from "crypto-js";

const ts = new Date().getTime();
const privateKey = "a8b2ba5953cce5a4c290bc6ffd1b3a8ffbf4530a";
const publicKey = "3f477e1f16344c9d6b8d7deec9e58dce";
const hash = CryptoJS.MD5(ts + privateKey + publicKey);
const url = "https://gateway.marvel.com:443/v1/public/";

const getHeroes = async (page) => {
  if (page === 0) {
    const data = await fetch(
      url +
        "characters?ts=" +
        ts +
        "&apikey=" +
        publicKey +
        "&hash=" +
        hash +
        "&limit=10&offset=" +
        0
    );
    return await data.json();
  } else {
    const data = await fetch(
      url +
        "characters?ts=" +
        ts +
        "&apikey=" +
        publicKey +
        "&hash=" +
        hash +
        "&limit=10&offset=" +
        page * 10
    );
    return await data.json();
  }
};

const getHero = async (id) => {
  const data = await fetch(
    url +
      "characters/" +
      id +
      "?ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  );
  return await data.json();
};

export { getHero, getHeroes };
