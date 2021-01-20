const { RichEmbed } = require("discord.js");
module.exports = class {
    constructor() {
        this.name = "help",
        this.alias = [""],
        this.usage = "**-help**"
    }

    async run(client, message, args) {
        try{
            if(!args[1]) {
              
            let helpEmbed = new RichEmbed()
            .setTitle("__**Yedek-Sistemi**__")
            .setDescription(`
            
            __**Güvenlik**__
            
            **-backup**          Sunucularınızın yedeklerini oluşturun ve yükleyin
                                        
            
            __**Diğerleri**__
            
            **-help**            Bu mesajı gösterir
            **-info**            Bot Hakkında bilgi alın
            **-invite**          Davet Alperen Bot
            **-ping**            Ping
            
            `)
            .setFooter(`Kullanım \`-help [command]\` bir komut hakkında daha fazla bilgi için
            Ayrıca kullanabilirsin \`-help [category]\` bir kategori hakkında daha fazla bilgi için`)
            
            .setColor("#5DBCD2")
            message.channel.send(helpEmbed)
              return;
            }

            if(args[1] === "backup") {
                const embed = new RichEmbed()
                    .setTitle(`**-backup**

Create & load backups of your servers
(Sunucularınızın yedeklerini oluşturun ve yükleyin)

__**Commands**__
`)
                    .setDescription(`
                -backup create        Bir yedek oluşturun
                -backup delete        Yedeklerinizden birini silin
                -backup info          Yedekleme hakkında bilgi alın
                -backup load          Bir yedek yükleyin
                -backup purge         Tüm yedeklerinizi silin`)
                    .addBlankField()
                    .setFooter(`Kullanım \`-help [command]\` bir komut hakkında daha fazla bilgi için
Ayrıca kullanabilirsin \`-help [category]\` bir kategori hakkında daha fazla bilgi için`)
                    .setColor("#5DBCD2")
                message.channel.send(embed)
            }

            if(args[1] === "help") {
                let showsThisMessageEmbed = new RichEmbed()
                    .setTitle("**-help [command]**")
                    .setDescription("Bu mesajı gösterir")
                    .addBlankField()
                    .setFooter(`Kullanım \`-help [command]\` bir komut hakkında daha fazla bilgi için
Ayrıca kullanabilirsin \`-help [category]\` bir kategori hakkında daha fazla bilgi için`)
                    .setColor("#5DBCD2")
                    message.channel.send(showsThisMessageEmbed);
            }

            if(args[1] === "info") {
                let infoEmbed = new RichEmbed()
                    .setTitle("**-info**")
                    .setDescription("AlperenBot hakkında bilgi alın")
                    .addBlankField()
                    .setFooter(`Kullanım \`-help [command]\` for more info on a command.
You can also use \`-help [category]\` for more info on a category.`)
                    .setColor("#5DBCD2")
                    message.channel.send(infoEmbed);
            }

            if(args[1] === "invite") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**-invite**")
                    .setDescription("AlperenBot Davet")
                    .addBlankField()
                    .setFooter(`Kullanım \`Kullanım \`-help [command]\` bir komut hakkında daha fazla bilgi için
Ayrıca kullanabilirsin \`-help [category]\` bir kategori hakkında daha fazla bilgi için`)
                    .setColor("#5DBCD2")
                    message.channel.send(inviteEmbed)
            }

            if (args[1] === "leave") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**-leave**")
                    .setDescription("Bot cıkar")
                    .addBlankField()
                    .setFooter(`Kullanım \`Kullanım \`-help [command]\` bir komut hakkında daha fazla bilgi için
Ayrıca kullanabilirsin \`-help [category]\` bir kategori hakkında daha fazla bilgi için`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

            if (args[1] === "ping") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**-ping**")
                    .setDescription("Botun ping")
                    .addBlankField()
                    .setFooter(`Kullanım \`Kullanım \`-help [command]\` bir komut hakkında daha fazla bilgi için
Ayrıca kullanabilirsin \`-help [category]\` bir kategori hakkında daha fazla bilgi için`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }


            if (args[1] === "tiers") {
                let inviteEmbed = new RichEmbed()
                    .setTitle("**-tiers**")
                    .setDescription("AlperenBot ve Alperen ile ilgili bilgileri gösterir")
                    .addBlankField()
                    .setFooter(`Kullanım \`Kullanım \`-help [command]\` bir komut hakkında daha fazla bilgi için
Ayrıca kullanabilirsin \`-help [category]\` bir kategori hakkında daha fazla bilgi için`)
                    .setColor("#5DBCD2")
                message.channel.send(inviteEmbed)
            }

        }catch(e) {
            throw e;
        }
    }
}
