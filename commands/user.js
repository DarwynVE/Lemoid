const {SlashCommandBuilder} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Gets the users information.'),
    async execute(interaction) {
        await interaction.reply('Username: {} \n Joined on: .');
    },
}