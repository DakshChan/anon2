const { CommandInteraction, CacheType, MessageEmbed } = require('discord.js');
const settings = require('../settings');

module.exports = helpHandler;

/**
 * @param {CommandInteraction<CacheType>} interaction - an interaction
 */
async function helpHandler(interaction) {
    console.log(settings);
    let message =
        new MessageEmbed()
            .setTitle("User Commands")
            .setColor(3447003)
            .addFields({
                name: "Informational commands",
                value:
                    "Please follow the rules when using WVAnon\n\n" +
                    "• `!rules\n`" +
                    "Description: View the rules\n",
            })
            .addFields({
                name: "Messaging commands",
                value:
                    "\nThe nsfw argument is **optional**. If `nsfw` is included, the message will be wrapped in spoiler tags.\n\n" +
                    "• `!send (nsfw) your_message`\n" +
                    "Description: sends a message to the anonymous chat\n" +
                    "Examples:    !send hello, !send nsfw hello\n\n" +
                    "• `!send-deep (nsfw) your_message`\n" +
                    "Description: sends a message to the deep-talks channel\n" +
                    "Examples: !send-deep hello, !send-deep nsfw hello\n\n" +
                    "• `!send/send-deep (nsfw) reply msg_number_here your_message`\n" +
                    "Description: Replies to the message with the specified message number\n" +
                    "Examples: !send reply 123 hello, !send-deep nsfw reply 123 hello\n",
            })
            .setTimestamp()
    await interaction.reply({ embeds: [message]})
}

