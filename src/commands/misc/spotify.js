const { EmbedBuilder, AttachmentBuilder, ApplicationCommandOptionType, Client, Interaction } = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    callback: async (client, interaction) => {
        let user = interaction.options.getMember("user");

        if (user.bot) return await interaction.reply({ content: `Вы не можете узнать спотифай статус бота`, ephemeral: true });

        let status;
        if (user.presence.activities.length === 1) status = user.presence.activities[0];
        else if (user.presence.activities.length > 1) status = user.presence.activities[1];

        if (user.presence.activities.length === 0 || (status.name !== "Spotify" && status.type !== "LISTENING")) {
            return await interaction.reply({ content: `${user.user.username} он сейчас ничего не слушает(правильно).`, ephemeral: true });
        }

        if (status !== null && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                name = status.details,
                artist = status.state,
                album = status.assets.largeText;

            const card = new canvacord.Spotify()
                .setAuthor(artist)
                .setAlbum(album)
                .setStartTimestamp(status.timestamps.start)
                .setEndTimestamp(status.timestamps.end)
                .setImage(image)
                .setTitle(name);

            const Card = await card.build();
            const attachments = new AttachmentBuilder(Card, { name: "spotify.png" });

            const embed = new EmbedBuilder()
                .setTitle(`${user.user.username} сейчас слушает:`)
                .setImage(`attachment://spotify.png`)
                .setTimestamp()
                .setFooter({ text: `Спотифай Трекер` });

            await interaction.reply({ embeds: [embed], files: [attachments] });
        }
    },
    name: "spotify",
    description: "Узнай что слушают твой друзья!",
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    options: [
        {
            name: "user",
            description: "Это пользователь, статус которого вы хотите отобразить",
            type: ApplicationCommandOptionType.User,
        },
    ],
};
