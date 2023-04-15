const cheerio = require("cheerio");
const fs = require("fs"); //transformar em JSON
const page = require("./page");

const $ = cheerio.load(page.html);

const data = [];

$("img").each((index, element) => {
  const src = $(element).attr("src");
  const title = $(element).attr("alt");
  if (!src.endsWith(".jpg")) return;

  const partial = src.split("@").shift();
  const url = `${partial}@.@.jpg`;

  data.push({ title: title, url: url });
});

fs.writeFileSync(
  "movies.json",
  JSON.stringify(data, null, 2),
  "utf-8",
  () => {}
);

console.log(data);
