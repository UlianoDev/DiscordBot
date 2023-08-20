const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");




// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
  .setColor(0x0099ff)
  .setTitle("Repositório Deste BOT")
  .setURL("https://github.com/UlianoDev")
  .setAuthor({
    name: "Gabriel Uliano",
    iconURL: "https://avatars.githubusercontent.com/u/118945166?v=4",
    url: "https://github.com/UlianoDev",
  })
  .setDescription("Repositório com o código fonte do BOT")
  .setThumbnail("https://i.imgur.com/AfFp7pu.png")
  .setImage("https://i.imgur.com/AfFp7pu.png")
  .setTimestamp()



module.exports = {
  data: new SlashCommandBuilder()
    .setName("git")
    .setDescription('Relembrar comandos do Git'),

  async execute(interaction) {
    await interaction.reply({embeds: [exampleEmbed]});
  },
};
