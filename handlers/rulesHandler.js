const { CommandInteraction, CacheType, MessageEmbed } = require('discord.js');
const settings = require('../settings');

module.exports = rulesHandler;

/**
 * @param {CommandInteraction<CacheType>} interaction - an interaction
 */
async function rulesHandler(interaction) {
    console.log(settings);
    let message =
        new MessageEmbed()
            .setDescription("WVAnon")
            .setColor(3447003)
            .addFields({
                name: "Rules",
                value:
                    "1. NSFW content must be wrapped in a spoiler tag (use the nsfw argument!)\n" +
                    "2. No impersonation\n" +
                    "3. All rules in <#534583763217285131> still apply!",
            })
            .addFields({
                name: "Contribution",
                value:
                    "Visit https://github.com/white-van/WVAnonBot to view the codebase\n" +
                    "Contributions welcome!",
            })
            .setTimestamp()
    await interaction.reply({ embeds: [message]})
}

