const { Client, Interaction } = require("discord.js");
const User = require("../../models/user");

const dailyAmount = Math.floor(Math.random() * 10) + 1;

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
                content: "You can only run this command inside the server",
                ephermal: true,
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
                    interaction.editReply(`Ты уже играл. Следующая попытка завтра. Сейчас он равен ${user.balance} см`);
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

            interaction.editReply(`Твой писюн увеличился на ${dailyAmount} см. Твой размер: ${user.balance} см`);
        } catch (error) {
            console.log(`Error with /daily: ${error}`);
        }
    },
};
