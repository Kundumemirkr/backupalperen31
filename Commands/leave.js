module.exports = class leave {
    constructor() {
        this.name = "leave",
        this.alias = [],
        this.permLevel = 4,
        this.usage = "-leave"
    }

    async run(client, message, args) {
        try{
            message.channel.send("BayBay 🙁")
            message.guild.leave();
        }catch(e) {
            throw e;
        }
    }
}