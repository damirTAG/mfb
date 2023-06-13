const { Client, Interaction } = require("discord.js");
const User = require("../../models/user");

function getRandomNumber(x, y) {
    const range = y - x + 1;
    const randomNumber = Math.floor(Math.random() * range);
    return randomNumber + x;
}

const dailyAmount = getRandomNumber(1, 10);

module.exports = {
    name: "dick",
    description: "пиписа",
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
    callback: async (client, interaction) => {
        if (!interaction.inGuild()) {
            interaction.reply({
                content: "You can only run this command inside a server.",
                ephemeral: true,
            });
            return;
        }

        try {
            await interaction.deferReply();

            const query = {
                userId: interaction.member.id,
                guildId: interaction.guild.id,
            };

            let user = await User.findOne(query);

            if (user) {
                const lastDailyDate = user.lastDaily.toDateString();
                const currentDate = new Date().toDateString();

                if (lastDailyDate === currentDate) {
                    interaction.editReply(`Ты уже играл, следующая попытка завтра. \nСейчас твой писюн **${user.balance}** см.`);
                    return;
                }

                user.lastDaily = new Date();
            } else {
                user = new User({
                    ...query,
                    lastDaily: new Date(),
                });
            }

            user.balance += dailyAmount;
            await user.save();

            interaction.editReply(
                `Твой писюн вырос на **${dailyAmount}** см. \nТвой размер: **${user.balance}** см\nСледующая попытка завтра.`
            );
        } catch (error) {
            console.log(`Error with /daily: ${error}`);
        }
    },
};
