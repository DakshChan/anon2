const { CommandInteraction, CacheType, MessageEmbed } = require('discord.js');
const settings = require('../settings');

module.exports = sendMessageHandler;

/**
 * @param {CommandInteraction<CacheType>} interaction - an interaction
 */
async function sendMessageHandler(interaction) {
    console.log(settings);
}

