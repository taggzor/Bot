const Discord = require('discord.js');
const token = 'NjAyNTA3MTQ0ODMwMzg2MTg2.XTSLtg.hq9KlzruFxqDrlyHaiueBjOrZyM';

const client = new Discord.Client();

const lolchamp = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', 'Dr Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gankplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kai\'Sa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kha\'Zix', 'Kindred', 'Kled', 'Kog\'Maw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu i Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Rek\'Sai', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Sejuani', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel\'Koz', 'Vi', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yorick', 'Yummi', 'Zac', 'Zed', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'];



client.on('message', (msg) => {
  var x=0;
  var team = [-1,-1,-1,-1,-1];
  function losuj(k, n) {
  // wypełnianie tablicy liczbami 1,2...n
  var numbers = new Array(n);
  for (var i=0; i<n; i++) {
  numbers[i] = i + 1;
  }
  // losowanie k liczb
  for (var i=0; i<k; i++) {
  // tworzenie losowego indeksu pomiędzy 0 i n - 1
  var r = Math.floor(Math.random()*n);
  // wybieramy element z losowego miejsca
  team[x] = numbers[r];
  x++;
  // przeniesienia ostatniego elementu do miejsca z którego wzięliśmy
  numbers[r] = numbers[n - 1];
  //zmniejszamy n
  n--;
  }
  }


  msg.content = msg.content.toLowerCase();
if(msg.content === ('elo')){
  msg.channel.send(`Trzy dwa zero`);
}

if(msg.content === ('siema tagorz')){
  msg.channel.send(`No witam :grin:`);
}
if(msg.content === ('siema tagosz')){
  msg.channel.send(`Pisze się przez R Z !`);
}

if(msg.content === ('losowy pick')){

  var rand = Math.floor(Math.random() * (144));
  msg.channel.send('A zagraj może ' + lolchamp[rand]);
}
if(msg.content === ('linia?')){
  losuj(1,5);
  switch(team[0]){
    case 1 : msg.channel.send(`TOP`);break;
    case 2 : msg.channel.send(`JUNGLE`);break;
    case 3 : msg.channel.send(`MID`);break;
    case 4 : msg.channel.send(`ADC`);break;
    case 5 : msg.channel.send(`SUPPORT`);break;
  }
}

if(msg.content === ('random team')){

losuj(5,145);
  msg.channel.send(`Na topa: `+lolchamp[team[0]-1]);
  msg.channel.send(`Do dżungli: `+lolchamp[team[1]-1]);
  msg.channel.send(`Na mida: `+lolchamp[team[2]-1]);
  msg.channel.send(`"AD" Carry: `+lolchamp[team[3]-1]);
  msg.channel.send(`Support: `+lolchamp[team[4]-1]);
 }

if(msg.author ===('Taggzor')){

  msg.channel.send(msg.username);
}


if(msg.content === ('o mnie')){
/////////////////Ramka

let zdj= client.user.displayAvatarURL;
let ramka = new Discord.RichEmbed()
.setDescription('Info o mnie')
.setColor('#145211')
.setThumbnail(zdj)
.addField('Nazywam się ',client.user.username)
.addField('Stworzył mnie', 'Taggzor')
.addField('Komendy', 'losowy pick, random team, linia?, elo');


/////////Koniec ramki
msg.channel.send(ramka);
}
if(msg.content ===('dawaj do nas')){
  if(!msg.member.voiceChannel){
    msg.channel.send(`Gdzie mam dołączyć? :confused: `);
    return;
  }

  client.joinVoiceChannel( msg.member.voiceChannelID );
}





if(msg.tts === true){
  msg.channel.send(`Zamknij się`);
}
if(msg.content.includes('xd') === true){
if(msg.member.user.username === ('Tagorz')){return;}
  msg.channel.send(`xD?`);
}

if(msg.content === ('!!!test')){
  msg.channel.send(msg.username);
}


console.log('['+msg.guild.name+'/'+msg.channel.name+']'+msg.member.user.username+': '+msg.content);
console.log(msg);

});




client.on('ready', () => {
  console.log('Bot jest online');
//  client.user.setActivity(`na ${client.guilds.size} servers`);
console.log(`na ${client.guilds.size} serverach`);
  //client.channels.find(x => x.name === 'kanał-do-botów').send('Siema w co dziś gramy?');
});





client.login(token);
