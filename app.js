import axios from "axios";
import cheerio from "cheerio";

const url = "http://www.4sqrp.com/w25.php";
let table = [];
const request = await axios(url);

const $ = cheerio.load(request.data);

$(
  "body > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr > td"
).each((i, item) => {
  let stringItem = $(item).text().trim();
  const formedItem = stringItem.replace("Ø", "0");
  table.push(formedItem);
});

console.log(table);
