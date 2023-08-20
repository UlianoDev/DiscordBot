const { REST, Routes} = require('discord.js')

const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;


const fs = require("node:fs");
const path = require("node:path");


const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

const commands = []

commandFiles.forEach(file => {
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
});
// instancia rest
const rest = new REST({version: "10"}).setToken(TOKEN);

// deploy
(async ()=>{
    try{
        console.log(`Resetando ${commands.length} comands...`)

        // PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log("Comandos registrados com sucesso!")
    }catch(error){
        console.error(error)
    }
})()