import fetch from 'node-fetch';

const getRandomProfilePicture = async (gender) => {
const res = await fetch(https://randomuser.me/api/?gender=${gender});
const data = await res.json();
const profilePicture = data.results[0].picture.large;
return profilePicture;
};

const handler = async (m, { conn, command }) => {
const femaleProfilePicture = await getRandomProfilePicture('female');
const maleProfilePicture = await getRandomProfilePicture('male');

conn.sendButton(
m.chat,
'𝘾𝙃𝙄𝘾𝘼 ✨',
wm,
femaleProfilePicture,
[['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', /${command}]],
m
);

conn.sendButton(
m.chat,
'𝘾𝙃𝙄𝘾𝙊 ✨',
wm,
maleProfilePicture,
[['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', /${command}]],
m
);
};

handler.help = ['ppcouple'];
handler.tags = ['internet'];
handler.command = /^(ppcp|ppcouple|compartirperfil|compartirfoto)$/i;

export default handler;
