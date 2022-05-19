const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder()
        .setName('help')
        .setDescription('View help'),
    new SlashCommandBuilder()
        .setName('rules')
        .setDescription('View the rules'),
    new SlashCommandBuilder()
        .setName('send')
        .setDescription('Sends an anonymous message to the specified channel')
        .addStringOption((option) =>
            option
                .setName('channel')
                .setDescription('Sends an anonymous message to the specified channel')
                .setRequired(true)
                .addChoices([
                    ['anon', '914816628485660674'],
                    ['deep', '914952477080694834'],
                    ['sad', '914952492071141406']
                ])
        )
        .addStringOption((option) =>
            option
                .setName('message')
                .setDescription('The message you would like to send')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('nsfw')
                .setDescription('Wraps message in spoiler tags')
                .setRequired(false)
                .addChoice('true','true')
        )
        .addIntegerOption((option) =>
            option
                .setName('reply')
                .setDescription('Replies to the message number')
                .setRequired(false)
        ),
    new SlashCommandBuilder()
        .setName('abuse')
        .setDescription('admins')
        .setDefaultPermission(false)
    ].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
