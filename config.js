import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "node-fetch";
import axios from "axios";
import moment from "moment-timezone";
import { en, es, id, ar, pt, fr, hi } from "./lib/idiomas/total-idiomas.js"; 
 
//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰  

global.owner = [
["5493491456806", 'Owner ', true],
["3726188894", 'Bot', true]]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 

global.mods = [];
global.prems = ["5493491456806"];
//key de violetics
global.Key360 = ["964f-0c75-7afc"];
   
  
//⊱ ━━━━━.⋅ IDIOMA : LENGUAJE ⋅.━━━━ ⊰ 
//Agrega el Idioma que quieres que tenga Fast-Bot
//Add the language you want Fast-Bot to have
//  es = Español         id = Bahasa Indonesia
//  en = English         pt = Português 
//  ar = عرب             hi = Hindi Language

global.lenguajeGB = es; //Idioma de Fast-Bot, Ejemplo: es | en | pt...

//━━━━━━━━━━━━━━━━━━━━ 

global.openai_key = "sk-...OzYy2";
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = "HITjoN7H8pCwoncEB9e3fSyW";
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */

global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = "GataDios";
global.itsrose = ["4b146102c4d500809da9d1ff"];
global.baileys = "@whiskeysockets/baileys";

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
};

global.mods = []; 


/*************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;	

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.official = [ // Agregate si eres Owner
["5493491456806", 'Owner', 1]];

global.mail = ''; //agrega tú correo
global.desc = ''; //agrega una descripción corta
global.desc2 = ''; //agrega una descripción larga (Solo se aplicará si su whatsapp no tiene descripción)
global.country = ''; //agrega tú país ejemplo: 🇪🇨

global.packname = "𝗙𝗮𝘀𝘁";
global.author = "𝗕𝗼𝘁";

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = "1.4.9";
global.vsJB = "2.0";

global.ft = "𝗙𝗮𝘀𝘁-𝗕𝗼𝘁";
global.yt = "";
global.yt2 = "";
global.ig = "https://www.instagram.com/gabiacosta06";
global.md = "https://github.com/gabicota16/Fast-Bot";
global.fb = "https://www.facebook.com/groups/872989990425789/";

global.nna = 'https://chat.whatsapp.com/JnCZocWq1eQJG0FxtDZSU4' 
global.paypal = 'no hay paypal'
global.asistencia = 'instagram.com/gabiacosta06' //Dudas? escríbeme...

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n';
global.resultado = rg;

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n';
global.advertencia = ag;

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱⊱╮\n\n';
global.informacion = iig;

global.fg = '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n';
global.fallo = fg;

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n';
global.mal = mg;

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n';
global.envio = eeg;

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n';
global.exito = eg;

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = "𝗙𝗮𝘀𝘁 - 𝗕𝗼𝘁";
global.igfg = "𝗙𝗮𝘀𝘁 - 𝗕𝗼𝘁";
global.wait = "*⌛ _Cargando | Charging..._ ▬▭▭▭▭▭▭*";
global.waitt = "*⌛ _Cargando | Charging..._ ▬▬▭▭▭*";
global.waittt = "*⌛ _Cargando | Charging..._ ▬▬▬▬▭▭*";
global.waitttt = "*⌛ _Cargando | Charging..._ ▬▬▬▬▬▬▭*";
global.nomorown = "593993684821";
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"];

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 


//⊱ ━━━━━.⋅ IMG ⋅.━━━━ ⊰

global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg");
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg");
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg");
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg");
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg");
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg");
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg');
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg');
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg");
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg");
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg");
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg");
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg");

//━━━━━━━━━━━━━━━━━━━━ 


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://telegra.ph/file/3b1e60819f8aaa96a8d31.jpg';
global.img2 = 'https://telegra.ph/file/7b6b9cfc72cb4d9a7af6d.jpg';

global.img3 = 'https://tinyurl.com/23jcbhue.jpg'; //prem
global.img4 = 'https://tinyurl.com/23z2xqqv.jpg'; //prem

global.img5 = 'https://telegra.ph/file/8e5752a028f23c091bf9d.jpg';
global.img6 = 'https://telegra.ph/file/9c2cc623fa23183050ca4.jpg';
global.img7 = 'https://telegra.ph/file/4d2ee0512d0ff547dfb13.jpg';
global.img8 = 'https://telegra.ph/file/eab6a9968f2a12da43a77.jpg';
global.img9 = 'https://telegra.ph/file/9782e263e42ccbd4728ac.jpg';

global.img10 = 'https://telegra.ph/file/80a27ea959b69c9364a20.jpg';
global.img11 = 'https://telegra.ph/file/39191226f8df0d97de6a0.jpg';
global.img12 = 'https://telegra.ph/file/c131a7f0a422c605c8282.jpg';
global.img13 = 'https://telegra.ph/file/087ddd68593be99d3e16e.jpg';
global.img14 = 'https://telegra.ph/file/1d1eef3ae9dbfbdcfdf10.jpg';
global.img15 = 'https://i.imgur.com/QrkkKx7.jpeg';

global.img16 = 'https://i.imgur.com/11MRjo4.jpeg'; //+18

global.img17 = 'https://telegra.ph/file/617ddc48971450b93c667.jpg';
global.img18 = 'https://telegra.ph/file/044e0044b75bc9e917ac4.jpg';

global.logogit = 'https://tinyurl.com/2qvl9vgs';

global.welfast = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb];
global.redesMenu = [nna, md, ig, paypal, yt, asistencia, fb];
global.fastMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18];
global.fastVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4'];
global.fastImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13];

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = "❖––––––『";
global.cmenub = "┊✦ ";
global.cmenuf = "╰━═┅═━––––––๑\n";
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ";
 
global.dmenut = "*❖─┅──┅〈*";
global.dmenub = "*┊»*";
global.dmenub2 = "*┊*";
global.dmenuf = "*╰┅────────┅✦*";
global.htjava = "⫹⫺";

global.htki = "*⭑•̩̩͙⊱•••• ☪*";
global.htka = "*☪ ••••̩̩͙⊰•⭑*";

global.comienzo = "• • ◕◕════";
global.fin = " • •";

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
                               }
                              }
                             };

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 


global.multiplier = 60; // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 

//Emojis RPG - Referencias
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: '🧬 Nivel : Level',
      limit: lenguajeGB.eDiamante(),
      exp: lenguajeGB.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeGB.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeGB.eMagia(),
      joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(),
      stamina: lenguajeGB.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeGB.eOro(),
      
      trash: lenguajeGB.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeGB.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeGB.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeGB.eHierro(),
      rock: lenguajeGB.eRoca(),
      potion: lenguajeGB.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeGB.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeGB.eEspada(),
      
      common: lenguajeGB.eCComun(),
      uncoommon: lenguajeGB.ePComun(),
      mythic: lenguajeGB.eCMistica(),
      legendary: lenguajeGB.eClegendaria(),
      petFood: lenguajeGB.eAMascots(), //?
      pet: lenguajeGB.eCMascota(),//?
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeGB.eGato(),    
      centaur: lenguajeGB.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeGB.ePerro(),
      dragon: lenguajeGB.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeGB.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeGB.eAve(), //Mascota : Griffin',
      horse: lenguajeGB.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeGB.eFastCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeGB.eLobo(),
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
    };
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase();
    let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵', 
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '♦️', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
    };
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }
};


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emottt = {
      exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
      money: lenguajeGB.eFastCoins(), tiketcoin: lenguajeGB.eFastTickers(), stamina: lenguajeGB.eEnergia(),
            
      potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
      rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
      coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
      
      eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
      sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
      umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
      pancing: lenguajeGB.eCanaPescar(),
       
      common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
      pet: lenguajeGB.eCMascota(),//?
      gardenboxs: lenguajeGB.eCJardineria(),//?
      legendary: lenguajeGB.eClegendaria(),
      
      anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeGB.eMango(), pisang: lenguajeGB.ePlatano(),
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
      fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
      anjing: lenguajeGB.ePerro(),
 
      petFood: lenguajeGB.eAMascots(), //?
      makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
      makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }
};

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase();
    let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '📿', kyubi: '🌀', gold: '👑',
      money: '♦️', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }
};

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
