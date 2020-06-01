const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot foi iniciado`);
});

client.on("message", async message => {

  if (message.author.bot) return; // não responder outros bots
  if (message.channel.type === "dm") return;// não responder dm
  if (!message.content.startsWith(config.prefix)) return; // responder mesmo sem o prefixo !

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // separar comando dos parametros
  const comando = args.shift().toLowerCase();

  if (comando === "nome") {
    await message.channel.send(`Fala meu consagradoo, eu sou o ${client.user.username}`)
  }
  if (comando === "olaadalbs") {
    await message.channel.send(`Falaaaaaaaaaaa meu consagrado, eu sou o Adalbs, bot do canal Felipe Passos, comandos disponiveis, !youtube, !instagram, !github`)
  }
  if (comando === "youtube") {
    await message.channel.send(`Canal no youtube do Felipe é https://www.youtube.com/c/FelipePassosdev`)
  }
  if (comando === "instagram") {
    await message.channel.send(`Instagram do Felipe é @felipepassosdev`)
  }
  if (comando === "github") {
    await message.channel.send(`O github do Felipe é https://github.com/felipepassosdev`)
    console.log(client.user.username)
  }
});

client.login(config.token);
