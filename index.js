const { Client, Events, GatewayIntentBits, Collection } = require("discord.js")
const dotenv = require('dotenv')
dotenv.config()
const {TOKEN, CLIENT_ID, GUILD_ID} = process.env

const fs = require('node:fs')
const path = require('node:path')
const { exit } = require("node:process")

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection



const commandsPath = path.join(__dirname,"commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))



commandFiles.forEach(elementFile => {
  const filePath = path.join(commandsPath, elementFile)
  const command = require(filePath)

if("data" in command && "execute" in command){

  client.commands.set(command.data.name,command)

}else{
  console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes`)
}

});







client.once(Events.ClientReady, (c) => {
  console.log(`Pronto! Login realizado como ${c.user.tag}`)
});

client.login(TOKEN)


//listener de interações
client.on(Events.InteractionCreate, async interaction =>{
  if(!interaction.isChatInputCommand())return
    const command = interaction.client.commands.get(interaction.commandName)
    if(!command){
      console.error("Comando não encontrado")
      return
    }
    try{
      await command.execute(interaction)
    } catch(error){
      console.error(error)
      await interaction.reply("Houve um erro ao executar esse comando!")
    }
  
})

