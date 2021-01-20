const { RichEmbed } = require("discord.js"); 

module.exports = class info {
    constructor() {
        this.name = "info",
        this.alias = [],
        this.usage = "-info"
    }

    async run(client, message, args) {
        try{
         let infoEmbed = new RichEmbed()
         .setTitle("**Alperen Bot**")
         .setThumbnail("https://cdn.discordapp.com/avatars/416358583220043796/8f702ebf579bce2d7a6f0a4419ac5faf.webp?size=1024")
         .setDescription("Server Backups, Templates ve daha fazlası")
         .addField("Invite", "[Tıkla](https://discord.com/oauth2/authorize?client_id=796255738506903572&scope=bot&permissions=805829694)", true)
         .addField("Discord", "[Tıkla](https://discord.gg/cVMjC3rrdd)")
         .addField("Prefix", "-", true)
         .addField("Guilds", client.guilds.size, true)
         .setFooter("Owned by ~ AlperenGT#2021")
            message.channel.send(infoEmbed)
        }catch(e) {
            throw e;
        }
    }
}