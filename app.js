import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const app = express();
const url = "http://www.4sqrp.com/w25.php";
let table = [];
const request = await axios(url);

const $ = cheerio.load(request.data);

$(
  "body > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td"
).each((i, item) => {
  if (item.toString().includes("Ø")) {
    //this logic doesn't work but is left in to remind me where i'm leaving off
  } else {
    console.log("false");
  }
  table.push($(item).text().trim()); //this line needs to be in the true block above, but is left here
  //everything in this each section needs to be replaced with something functional
});
//console.log(table);
