require("dotenv").config();
const { Client, IntentsBitField, ActivityType } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
client.on("ready", (c) => {
    client.user.setActivity({
        name: "Jojo's Bizzare Adventure",
        type: ActivityType.Watching,
    });
});
eventHandler(client);

client.login(process.env.TOKEN);
