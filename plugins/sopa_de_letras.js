//CREADO POR @gata_dios
// EL CÓDIGO ESTARÁ OFUSCADO HASTA QUE SE COMPRUEBE QUE NO EXISTA ERRORES

// SOPA DE LETRAS (BETA)
(function(_0x27d007,_0x1927ca){const _0x18a0cb=_0x3659,_0x319814=_0x27d007();while(!![]){try{const _0x31b070=parseInt(_0x18a0cb(0xfe))/0x1*(-parseInt(_0x18a0cb(0xfb))/0x2)+parseInt(_0x18a0cb(0x11c))/0x3+parseInt(_0x18a0cb(0xec))/0x4+-parseInt(_0x18a0cb(0xef))/0x5+parseInt(_0x18a0cb(0x109))/0x6+-parseInt(_0x18a0cb(0x120))/0x7+-parseInt(_0x18a0cb(0x10b))/0x8*(-parseInt(_0x18a0cb(0x103))/0x9);if(_0x31b070===_0x1927ca)break;else _0x319814['push'](_0x319814['shift']());}catch(_0x3226fe){_0x319814['push'](_0x319814['shift']());}}}(_0x417a,0x4d83e));let fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,handler=async(_0x493907,{conn:_0x5ba1e8,text:_0x17951d,usedPrefix:_0x5df553,command:_0x30233a})=>{const _0x3295ca=_0x3659;userSP===null&&(userSP=_0x493907['sender']['split']('@')[0x0],await _0x5ba1e8['reply'](_0x493907[_0x3295ca(0x107)],'*@'+_0x493907[_0x3295ca(0xfd)]['split']('@')[0x0]+_0x3295ca(0x10f),_0x493907,{'mentions':[_0x493907[_0x3295ca(0xfd)]]}));async function _0x367b68(){const _0x10352b=_0x3295ca,_0x23d1ab=0xa;let _0x5d7b1b=new Array(_0x23d1ab);for(let _0x444bd2=0x0;_0x444bd2<_0x23d1ab;_0x444bd2++){_0x5d7b1b[_0x444bd2]=new Array(_0x23d1ab);}const _0x317db2=[_0x10352b(0xf8),_0x10352b(0x105),_0x10352b(0x115),_0x10352b(0x129),_0x10352b(0x123),_0x10352b(0x113),_0x10352b(0x106),_0x10352b(0x11b),_0x10352b(0x11e),_0x10352b(0x10a),_0x10352b(0xf9),'COMPUTER',_0x10352b(0x121),'MARCADORES','MUEBLES'],_0x2dbcdc=_0x317db2[Math[_0x10352b(0x10c)](Math[_0x10352b(0x111)]()*_0x317db2['length'])];let _0x328afd=Math['floor'](Math[_0x10352b(0x111)]()*_0x23d1ab),_0x17fb5d=Math[_0x10352b(0x10c)](Math['random']()*_0x23d1ab);const _0x288bbc=['horizontal',_0x10352b(0x122),_0x10352b(0x12a),'diagonalIzquierda'],_0x49bc85=_0x288bbc[Math['floor'](Math[_0x10352b(0x111)]()*_0x288bbc['length'])];let _0x1265dd=![];for(let _0x4e2030=0x0;_0x4e2030<_0x317db2['length']&&!_0x1265dd;_0x4e2030++){let _0x43c8c0=_0x317db2[_0x4e2030];do{_0x328afd=Math[_0x10352b(0x10c)](Math[_0x10352b(0x111)]()*_0x23d1ab),_0x17fb5d=Math[_0x10352b(0x10c)](Math[_0x10352b(0x111)]()*_0x23d1ab);const _0x444d84=_0x49bc85===_0x10352b(0x11a)&&_0x17fb5d+_0x43c8c0[_0x10352b(0x128)]<=_0x23d1ab||_0x49bc85===_0x10352b(0x122)&&_0x328afd+_0x43c8c0[_0x10352b(0x128)]<=_0x23d1ab||_0x49bc85===_0x10352b(0x12a)&&_0x328afd+_0x43c8c0[_0x10352b(0x128)]<=_0x23d1ab&&_0x17fb5d+_0x43c8c0[_0x10352b(0x128)]<=_0x23d1ab||_0x49bc85===_0x10352b(0x125)&&_0x328afd+_0x43c8c0['length']<=_0x23d1ab&&_0x17fb5d-_0x43c8c0[_0x10352b(0x128)]>=0x0;if(_0x444d84){let _0x127053=!![];for(let _0xf34528=0x0;_0xf34528<_0x43c8c0[_0x10352b(0x128)];_0xf34528++){let _0x27c2b2=_0x43c8c0[_0x10352b(0x116)](_0xf34528),_0x331316=_0x328afd,_0x10cbb0=_0x17fb5d;if(_0x49bc85==='horizontal')_0x10cbb0+=_0xf34528;else{if(_0x49bc85===_0x10352b(0x122))_0x331316+=_0xf34528;else _0x49bc85===_0x10352b(0x12a)?(_0x331316+=_0xf34528,_0x10cbb0+=_0xf34528):(_0x331316+=_0xf34528,_0x10cbb0-=_0xf34528);}if(_0x5d7b1b[_0x331316][_0x10cbb0]===''||_0x5d7b1b[_0x331316][_0x10cbb0]===_0x27c2b2)_0x5d7b1b[_0x331316][_0x10cbb0]=_0x27c2b2;else{_0x127053=![];break;}}if(_0x127053){_0x1265dd=!![];break;}}}while(!![]);}const _0x22d29c=_0x10352b(0xee);let _0x22ba2f='';_0x22ba2f+=_0x10352b(0xf3)+[...Array(_0x23d1ab)['keys']()][_0x10352b(0xf6)]('\x20\x20\x20')+'\x0a',_0x22ba2f+='\x20\x20*╭'+'┄'[_0x10352b(0xed)](_0x23d1ab)+'┄┄'+'╮*\x0a';for(let _0xed7541=0x0;_0xed7541<_0x23d1ab;_0xed7541++){let _0x499682=_0xed7541+'\x20|\x20';for(let _0x1662be=0x0;_0x1662be<_0x23d1ab;_0x1662be++){if(_0x5d7b1b[_0xed7541][_0x1662be])_0x499682+=_0x5d7b1b[_0xed7541][_0x1662be]+'\x20';else{let _0x21a280=_0x22d29c[_0x10352b(0x116)](Math[_0x10352b(0x10c)](Math[_0x10352b(0x111)]()*_0x22d29c[_0x10352b(0x128)]));_0x499682+=_0x21a280+'\x20';}}_0x499682+='\x20|',_0x22ba2f+=_0x499682+'\x0a';}_0x22ba2f+=_0x10352b(0xf1)+'┄'[_0x10352b(0xed)](_0x23d1ab)+'┄┄'+'╯*',_0x22ba2f=_0x22ba2f[_0x10352b(0x126)](/[a-zA-Z]/g,_0x2b7cc3=>_0x22d29c[_0x2b7cc3[_0x10352b(0x104)]()-0x41]||_0x2b7cc3),await _0x493907[_0x10352b(0x112)](_0x10352b(0x110)+_0x2dbcdc+_0x10352b(0x117)+intentos+_0x10352b(0xf5)+_0x2dbcdc['charAt'](0x0)+_0x10352b(0x127)+_0x2dbcdc+_0x10352b(0x11d)+(_0x5df553+_0x30233a)+_0x10352b(0x101)+_0x2dbcdc+_0x10352b(0xff)+_0x328afd+_0x10352b(0xfa)+_0x17fb5d+'*\x0a'+_0x22ba2f),fila=_0x328afd,columna=_0x17fb5d,sopaNube=_0x22ba2f,sopaPalabra=_0x2dbcdc,sopaDir=_0x49bc85;}let _0x3e9f20=userSP+'@s.whatsapp.net';if(userSP!=_0x493907[_0x3295ca(0xfd)]['split']('@')[0x0]){await _0x5ba1e8[_0x3295ca(0x112)](_0x493907[_0x3295ca(0x107)],'*@'+_0x3e9f20['split']('@')[0x0]+_0x3295ca(0xfc),_0x493907,{'mentions':[_0x3e9f20]});return;}if(intentos===0x0){intentos=0x3,_0x367b68(),_0x47334f();function _0x47334f(){setTimeout(()=>{const _0x34a2e9=_0x3659;userSP!==null&&(userSP=null,console[_0x34a2e9(0xf4)](_0x34a2e9(0x10d))),_0x47334f();},0x2*0x3c*0x3e8);}}else{let _0x3aec5=sopaDir;_0x3aec5=_0x3aec5[_0x3295ca(0x126)](/([A-Z])/g,_0x3295ca(0x118))[_0x3295ca(0x108)]()['replace'](/^./,_0x2166d9=>_0x2166d9[_0x3295ca(0x11f)]());if(''+fila+columna==_0x17951d)await _0x493907['reply']('*CORRECTO!!\x20LA\x20PALABRA\x20_\x22'+sopaPalabra+_0x3295ca(0x10e)+_0x3aec5+_0x3295ca(0xf7)+fila+_0x3295ca(0x119)+columna+'_*'),(fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null),intentos=0x0;else{if(intentos===0x1){fila,columna,sopaNube,sopaPalabra,sopaDir,userSP=null,intentos=0x0,await _0x493907['reply'](_0x3295ca(0xf2)+sopaPalabra+'\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_'+_0x3aec5+'_\x20DE\x20LA\x20FILA\x20_'+fila+_0x3295ca(0x119)+columna+'_*');return;}else intentos-=0x1,await _0x493907[_0x3295ca(0x112)](_0x3295ca(0x114)+intentos+'_\x20INTENTOS!!*'+(intentos===0x1?'':_0x3295ca(0x124)+sopaPalabra+_0x3295ca(0xf0))+'\x0a\x0a'+(intentos===0x1?_0x3295ca(0x100)+sopaPalabra+_0x3295ca(0x102)+_0x3aec5+'\x22_*\x0a\x0a':'')+sopaNube);}}};function _0x3659(_0x2aa823,_0x1ff057){const _0x417a99=_0x417a();return _0x3659=function(_0x365925,_0x5b1860){_0x365925=_0x365925-0xec;let _0x2a75d7=_0x417a99[_0x365925];return _0x2a75d7;},_0x3659(_0x2aa823,_0x1ff057);}function _0x417a(){const _0x46f6c1=[',\x20COLUMNA\x20','202KycCZx','\x20ESTA\x20JUGANDO\x20SOPA\x20DE\x20LETRAS\x20ACTUALEMENTE*','sender','886XdKuOU','\x22_\x20ESTA\x20EN\x20LA\x20FILA\x20','```💡\x20PISTA!!```\x0a*LA\x20PALABRA\x20_','\x2028```\x0a➡️\x20```FILA\x202```\x0a⬇️\x20```COLUMNA\x208```\x0a\x0a*_\x22','_\x20SE\x20ENCUENTRA\x20EN\x20LA\x20DIRECCIÓN\x20_\x22','9qoRxRN','charCodeAt','GATABOT','VIRUS','chat','toLowerCase','3176664zXVypF','ROBOT','1733080WCjzci','floor','userSP\x20se\x20ha\x20vuelto\x20null\x20después\x20de\x202\x20minutos','\x22_\x20SE\x20ENCONTRABA\x20EN\x20LA\x20DIRECCIÓN\x20_','\x20REGISTRADO\x20EN\x20EL\x20JUEGO*','🔠\x20*SOPA\x20DE\x20LETRAS*\x20🔠\x0a*ENCUENTRE\x20LA\x20PALABRA\x20_\x22','random','reply','PIZZAS','*INCORRECTO.\x20TE\x20QUEDAN\x20_','WHATSAPP','charAt','\x22_\x20EN\x20LA\x20SOPA\x20DE\x20LETRAS,\x20TIENE\x20_','\x20$1','_\x20Y\x20COLUMNA\x20_','horizontal','CARRO','241344aCcXtw','\x22_*\x0a\x0a*EJEMPLO:*\x0a❇️\x20```','MOTOS','toUpperCase','2877196vsPhqv','LAPIZ','vertical','COLORES','\x0a*PALABRA\x20A\x20ENCONTRAR:*\x20```','diagonalIzquierda','replace','\x22_\x20DE\x20LA\x20PALABRA\x20_\x22','length','GITHUB','diagonalDerecha','1617112BtEiFW','repeat','ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ','2063945wkNpsb','```','\x20\x20*╰','*AGOTASTE\x20LOS\x20INTENTOS!!\x20LA\x20PALABRA\x20_\x22','\x20\x20\x20\x20\x20','log','_\x20INTENTOS!!*\x0a\x0a*ESCRIBA\x20EL\x20NÚMERO\x20DE\x20FILA\x20Y\x20COLUMNA\x20DEL\x20COMIENZO\x20DE\x20LA\x20PRIMERA\x20LETRA\x20_\x22','join','_\x20DE\x20LA\x20FILA\x20_','CASA','CELULAR'];_0x417a=function(){return _0x46f6c1;};return _0x417a();}handler['command']=/^(sopa)$/i;export default handler;