const { Client, RichEmbed } = require("discord.js");
const { CommandHandler } = require("djs-commands");
const client = new Client({ disableEveryone: true });
var approx = require('approximate-number');
const config = require("./config.json");
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: config.prefix 
});


client.on("ready", () => {
    console.log("Ready !");
    client.user.setActivity(`${approx(client.guilds.size)} Guilds | -help`, {type: "WATCHING"})
});

client.on("message", async (message) => {

    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

});

let info = client.emojis.get("655091815401127966") || "ℹ️" //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1

client.on("guildCreate", guild => {
  
      let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = client.channels.get(guild.systemChannelID || channelID);
  
    let newserverEmbed = new RichEmbed()
    .setTitle(`${info}  Bilgi`)
    .setDescription(`__Sunucunuza AlperenBot'u eklediğiniz için teşekkürler!__ :smiley:
Kullanım \`-yardım\` komutların bir listesini almak için.\`-help\`   Sunucuyu Yedekleme  \`-uptime\`  Porje 7/24 aktif etme  Daha fazla bilgiye ihtiyacınız varsa, dokümanlara bakabilirsiniz](https://discord.gg/cVMjC3rrdd).
Ayrıca bize katılmanız önerilir [discord server](https://discord.gg/cVMjC3rrdd) gelecekteki güncellemeler hakkında bilgilendirilmek için.
Kullanmaya karar verirsen AlperenBot, **siz ve tüm üyeleriniz bizim [Kullanım Şartları!](https://discord.gg/cVMjC3rrdd)**`)
    .setColor("#5DBCD2")
channel.send(newserverEmbed)
})

client.login(process.env.token)
