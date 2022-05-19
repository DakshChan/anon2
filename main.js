const sendMessageHandler = require('./handlers/sendMessageHandler')
const rulesHandler = require('./handlers/rulesHandler')
const helpHandler = require('./handlers/helpHandler')
const settings = require('./settings');

const { token } = require('./config.json'); // switch to env variables for future heroku deployment
const { Client, Intents, DMChannel } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
    settings['a'] = 'b';
});

client.on('interactionCreate', async interaction => {
    console.log(interaction)
    console.log(interaction.toJSON())
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'rules') {
        await rulesHandler(interaction);
    } else if (commandName === 'send') {
        await sendMessageHandler(interaction);
    } else if (commandName === 'help') {
        await helpHandler(interaction);
    }
});

client.login(token);
