import CryptoJS from "crypto-js";

const ts = new Date().getTime();
const privateKey = "a8b2ba5953cce5a4c290bc6ffd1b3a8ffbf4530a";
const publicKey = "3f477e1f16344c9d6b8d7deec9e58dce";
const hash = CryptoJS.MD5(ts + privateKey + publicKey);
const url = "https://gateway.marvel.com:443/v1/public/";

export function getHeroes() {
  return fetch(
    url + "characters?ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash
  ).then((data) => data.json());
}

export function getHero(id) {
  console.log(id);
  return fetch(
    url +
      "characters/" +
      id +
      "?ts=" +
      ts +
      "&apikey=" +
      publicKey +
      "&hash=" +
      hash
  ).then((data) => data.json());
}
