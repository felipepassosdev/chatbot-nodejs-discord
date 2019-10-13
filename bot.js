const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on("ready", () => {
  console.log(`Bot foi iniciado`); 
});

client.on("message", async message => {

    if(message.author.bot) return; // não responder outros bots
    if(message.channel.type === "dm") return;// não responder dm
    if(message.content.startsWith(config.prefix)) return; // responder mesmo sem o prefixo !

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // separar comando dos parametros
  const comando = args.shift().toLowerCase(); // Transforma a string para maisculo
  

});

client.login(config.token);
