let media = './media/menus/img8.jpg' 
 let handler = async (m, { conn, command }) => { 
 let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" } 
 let str = `💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎 
 💜 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘼𝘾𝘾𝙊𝙐𝙉𝙏𝙎 
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ✅ *GITHUB* 
 *${md}* 
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 ✅ *INSTAGRAM - ASISTENCIA* 
 *${ig}* 
 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 *Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n 
 *If you have doubts, suggestions or questions just write on Instagram.*` 
 await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)} 
 /*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/gabicota16/Fast-Bot', '𝗙𝗮𝘀𝘁-𝗕𝗼𝘁', null, null, [ 
 ['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'], 
 ['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 👑', '#owner'], 
 ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu'] 
 ], m,)}*/ 
  
 handler.command = /^cuentasoficiales|fastig|cuentasfb|cuentasfb|accounts|fastaccounts|account|igfast|cuentasdefast|cuentasdefastbot|cuentafastbot|cuentasfastbot$/i 
 handler.exp = 35 
 export default handler
