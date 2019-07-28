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

  ////////////////////////////////ZMIENNE

  let  cont = msg.content.slice(0).split(' ');
  let args = cont.slice(1);

  /////////////////////////////////////////


  if(msg.channel.name === ('zwierzam-sie-pl')){
    if(msg.member.user.username === ('Tagorz')){return;}
    let tekst = msg.content;
    msg.delete();
    msg.channel.send('[Anonymous] - '+tekst);
  }




switch(msg.content){
  case 'elo' : msg.channel.send('Trzy dwa zero!');
    break;
  case 'siema tagorz' : msg.channel.send(`No witam :grin:`);
    break;
  case 'siema tagosz' : msg.channel.send('Tagorz a nie przez SZ!');
    break;
  case 'losowy pick' : var rand = Math.floor(Math.random() * (144));
  msg.channel.send('A zagraj może ' + lolchamp[rand]);
    break;
  case 'random team' : losuj(5,145);
    let ramka1 = new Discord.RichEmbed()
    .setDescription('Losowa drużynka')
    .setColor('#332565')
    .addField('Na topa',lolchamp[team[0]-1])
    .addField('Do dżungli',lolchamp[team[1]-1])
    .addField('Na mida',lolchamp[team[2]-1])
    .addField('"AD" Carry',lolchamp[team[3]-1])
    .addField('Support',lolchamp[team[4]-1]);
    msg.channel.send(ramka1);
    break;
  case 'linia?' : losuj(1,5);
                switch(team[0]){
                  case 1 : msg.channel.send(`TOP`);break;
                  case 2 : msg.channel.send(`JUNGLE`);break;
                  case 3 : msg.channel.send(`MID`);break;
                  case 4 : msg.channel.send(`ADC`);break;
                  case 5 : msg.channel.send(`SUPPORT`);break;
                }
    break;
  case 'o mnie' : let zdj= client.user.displayAvatarURL;
      let ramka2 = new Discord.RichEmbed()
      .setDescription('Info o mnie')
      .setColor('#145211')
      .setThumbnail(zdj)
      .addField('Nazywam się ',client.user.username)
      .addField('Stworzył mnie', 'Taggzor#3700')
      .addField('Komendy', 'losowy pick, random team, linia?, elo');
      msg.channel.send(ramka2);
    break;
  case 'owca' : msg.channel.send({files:['./images/termiowca.png']});
   break;

   case 'k' : msg.delete();
    break;
  case 'dawaj do nas' : const kanal = client.channels.find(y => y.name === 'Rodzinka');
  if(!kanal) return console.error('Kanał nie istnieje!');
  kanal.join().then(connection => {
    console.log('Połączono');
  }).catch(e => {
    console.error(e);
  });
  break;
  case 'nsfw' : msg.channel.send(`!!nsfw`);
    break;
  case 'taggzor jest najlepszy' : const role = msg.guild.roles.find(role => role.name === "Administrator");
      let osoba = msg.member;
  osoba.addRole(role);
  msg.channel.send(`Wiem :heart: `);
  break;
  case 'nie lubie taggzora' : const nrole = msg.guild.roles.find(role => role.name === "Administrator");
      let nosoba = msg.member;
      nosoba.removeRole(nrole);
      break;
  case 'ping' : msg.channel.send('pong');
    break;

  case 'jestem gejem' : const ranga = msg.guild.roles.find(role => role.name === "Dziewczyna Alert");
  let gej = msg.member;
  gej.addRole(ranga);
    break;

  case 'lubie kobiety' : const ranga1 = msg.guild.roles.find(role => role.name === "Dziewczyna Alert");
  let gej1 = msg.member;
  gej1.removeRole(ranga1);
    break;
  case 'halina' : msg.channel.send('https://www.youtube.com/channel/UCTOtFzKbX7URpWqBd3vkkvw');
    break;
  case 'pong' : if(msg.member.user.username === ('Tagorz')){return;} else{ msg.channel.send("!!ping");}
    break;
  //case 'wypad' : client.leaveVoiceChannel(msg.member.voiceState.channelID);
  //  break;




}



if(msg.tts === true){
  msg.channel.send(`Zamknij się`);
}


if(msg.content.includes('xd') === true){
if(msg.member.user.username === ('Tagorz')){return;}
  msg.channel.send(`xD?`);
}
if(msg.content.includes('kajetan') === true){
if(msg.member.user.username === ('Tagorz')){return;}
  msg.channel.send(`Ten grubas?`);
}

if (msg.content.includes('msgdel')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
          msg.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            //if (!msg.member.roles.find("name", "bot-commander")) { // This checks to see if they DONT have it, the "!" inverts the true/false
            //    msg.channel.send('You need the \`bot-commander\` role to use this command.'); // This tells the user in chat that they need the role.
            //    return; // this returns the code, so the rest doesn't run.
            //}

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                msg.delete();
                // Cancels out of the script, so the rest doesn't run.
                return;
           }

            const fetched = await msg.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            msg.channel.bulkDelete(fetched)
                .catch(error => msg.channel.send(`Błąd: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }




























/*if(msg.content === ('elo')){
  msg.channel.send(`Trzy dwa zero`);
}

if(msg.content === ('siema tagorz')){
  msg.channel.send(`No witam :grin:`);
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

*/
console.log('['+msg.guild.name+'/'+msg.channel.name+']'+msg.member.user.username+': '+msg.content);

console.log(msg.voiceChannelID);
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

     console.log(newMember.voiceChannelID);

  } else if(newUserChannel === undefined){

    // User leaves a voice channel

  }
})


client.on('ready', () => {
  console.log('Bot jest online');
//  client.user.setActivity(`na ${client.guilds.size} servers`);
console.log(`na ${client.guilds.size} serverach`);

//const kanal = client.channels.find(y => y.name === 'Rodzinka');
//if(!kanal) return console.error('Kanał nie istnieje!');
//kanal.join().then(connection => {
//  console.log('Połączono');
//}).catch(e => {
//  console.error(e);
//});




  //client.channels.find(x => x.name === 'kanał-do-botów').send('Siema w co dziś gramy?');
});





client.login(token);
