const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

async function bot() {
  const navegador = await puppeteer.launch({ headless: true });
  const paginaWeb = await navegador.newPage();

  var pesquisa = readlineSync.question("O que deseja Pesquisar? ");

  const urlGoogle = `https://www.google.com/search?q=${pesquisa}&sxsrf=APwXEdfFlQNt7DwXN7kvUGSD7itKHMFkrw%3A1681583955489&source=hp&ei=U-86ZITjG4HN5OUP4-yxmA4&iflsig=AOEireoAAAAAZDr9Y0-xrwsOMzMa0FReCyNKYVKWkSL6&ved=0ahUKEwjE2MyyxKz-AhWBJrkGHWN2DOMQ4dUDCAk&uact=5&oq=coalas&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyCAgAEIoFELEDMggIABCKBRCxAzIICAAQigUQsQMyCgguELEDEIoFEEMyDQguEIoFELEDENQCEEMyBwgAEIoFEEMyBwgAEIoFEEMyBwgAEIoFEEMyBAgAEB46CwgAEIoFELEDEIMBOgsILhCKBRCxAxCDAToRCC4QigUQsQMQgwEQxwEQ0QM6EQguEIMBEMcBELEDENEDEIoFOhEILhCKBRCxAxDHARDRAxDUAjoICC4QigUQsQM6CwguEIoFELEDENQCUABY3gVggAZoAHAAeACAAXyIAcIEkgEDMC41mAEAoAEB&sclient=gws-wiz`;

  await paginaWeb.goto(urlGoogle);

  await paginaWeb.screenshot({ path: "img/barbie.png" });

  await navegador.close();
}

bot();
