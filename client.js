// https://discordapp.com/oauth2/authorize?client_id=558981057790083073&scope=bot&permissions=2146958847

const { Client, Attachment } = require('discord.js');

const client = new Client();

// Mongoose
const mongoose = require('mongoose');
var Invite = require('../GamingHouse/Models/invite.js')

// Variables
var prefix = '!qb'

var invites = {}

client.on('ready', () => {
    console.log('ready module.')
    client.guilds.forEach(guild => {
        guild.fetchInvites().then(gi => {
            invites[guild.id] = gi
        })
    })
    mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true })
    var colorInterval = setInterval(colorchange, 500)
})

var colorNumber = 0

function colorchange(){
    colorNumber += 1
    if(colorNumber == 1){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFFFFF')
    }if(colorNumber == 2){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFECEC')   
    }if(colorNumber == 3){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFC1C1')   
    }if(colorNumber == 4){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFA4A4')   
    }if(colorNumber == 5){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF8A8A')   
    }if(colorNumber == 6){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FE6D6D')   
    }if(colorNumber == 7){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FA4B4B')   
    }if(colorNumber == 8){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF2E2E')   
    }if(colorNumber == 9){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FB1414')   
    }if(colorNumber == 10){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF0101')   
    }
    if(colorNumber == 11){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF0138')
    }if(colorNumber == 12){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF067B')   
    }if(colorNumber == 13){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF0698')   
    }if(colorNumber == 14){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF06AD')   
    }if(colorNumber == 15){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF06CA')   
    }if(colorNumber == 16){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF06F3')   
    }if(colorNumber == 17){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#EB06FF')   
    }if(colorNumber == 18){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#CE06FF')   
    }if(colorNumber == 19){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#B506FF')   
    }if(colorNumber == 20){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#8B06FF')   
    }
    if(colorNumber == 21){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#6A06FF')
    }if(colorNumber == 22){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#4806FF')   
    }if(colorNumber == 23){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#2706FF')   
    }if(colorNumber == 24){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#060AFF')   
    }if(colorNumber == 25){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#062FFF')   
    }if(colorNumber == 26){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#066AFF')   
    }if(colorNumber == 27){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#0694FF')   
    }if(colorNumber == 28){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06BDFF')   
    }if(colorNumber == 29){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06D6FF')   
    }if(colorNumber == 30){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06EFFF')   
    }
    if(colorNumber == 31){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06FFFF')
    }if(colorNumber == 32){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06FFE3')   
    }if(colorNumber == 33){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06FFC1')   
    }if(colorNumber == 34){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06FFA4')   
    }if(colorNumber == 35){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06FF87')   
    }if(colorNumber == 36){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06FF48')   
    }if(colorNumber == 37){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#06FF1F')   
    }if(colorNumber == 38){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#16FF06')   
    }if(colorNumber == 39){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#5DFF06')   
    }if(colorNumber == 40){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#87FF06')   
    }
    if(colorNumber == 41){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#A4FF06')
    }if(colorNumber == 42){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#BDFF06')   
    }if(colorNumber == 43){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#DAFF06')   
    }if(colorNumber == 44){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFEB06')   
    }if(colorNumber == 45){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFD606')   
    }if(colorNumber == 46){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFB506')   
    }if(colorNumber == 47){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF8B06')   
    }if(colorNumber == 48){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF6A06')   
    }if(colorNumber == 49){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF5506')   
    }if(colorNumber == 50){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF3806')   
    }
    if(colorNumber == 51){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF1F06')
    }if(colorNumber == 52){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF0E06')   
    }if(colorNumber == 53){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FF0606')   
    }if(colorNumber == 54){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#D70101')   
    }if(colorNumber == 55){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#C60101')   
    }if(colorNumber == 56){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#B20000')   
    }if(colorNumber == 57){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#9D0000')   
    }if(colorNumber == 58){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#8E0000')   
    }if(colorNumber == 59){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#7D0000')   
    }if(colorNumber == 60){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#670000')   
    }
    if(colorNumber == 61){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#5D0000')
    }if(colorNumber == 62){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#4A0000')   
    }if(colorNumber == 63){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#3D0000')   
    }if(colorNumber == 64){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#300000')   
    }if(colorNumber == 65){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#220000')   
    }if(colorNumber == 66){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#160000')   
    }if(colorNumber == 67){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#0B0000')   
    }if(colorNumber == 68){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#020000')   
    }if(colorNumber == 69){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#000000')   
    }if(colorNumber == 70){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#151515')   
    }
    if(colorNumber == 71){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#282828')
    }if(colorNumber == 72){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#343434')   
    }if(colorNumber == 73){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#424343')   
    }if(colorNumber == 74){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#505151')   
    }if(colorNumber == 75){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#5E5E5E')   
    }if(colorNumber == 76){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#707171')   
    }if(colorNumber == 77){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#7F7F7F')   
    }if(colorNumber == 78){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#929393')   
    }if(colorNumber == 79){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#A3A4A4')   
    }if(colorNumber == 80){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#B2B3B3')   
    }
    if(colorNumber == 81){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#BABBBB')
    }if(colorNumber == 82){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#C6C7C7')   
    }if(colorNumber == 83){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#D1D2D2')   
    }if(colorNumber == 84){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#DADADA')   
    }if(colorNumber == 85){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#E45E5E')   
    }if(colorNumber == 86){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#EDEEEE')   
    }if(colorNumber == 87){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#F5F7F7')   
    }if(colorNumber == 88){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FAFBFB')   
    }if(colorNumber == 89){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FDFFFF')   
    }if(colorNumber == 90){
        client.guilds.find(x => x.id == '558977108852867083').roles.find(x => x.name == 'Rainbow').setColor('#FFFFFF')   
    }
    if(colorNumber == 91){
        colorNumber = 0
    }
}

function colorstop(){
    clearInterval(colorInterval)
    console.log('Color Stop')
}

client.on('guildMemberAdd', (member) => {
    member.guild.fetchInvites().then(gi => {
        var emp = invites[member.guild.id]
        var inv = gi.find(x => emp.get(x.code).uses < x.uses)
        var channel = member.guild.channels.find(ch => ch.id === '559282646086189067')
        channel.send(`<@${member.id}> loncaya <@${inv.inviter.id}> tarafından davet edildi.\n<@${inv.inviter.id}> bugüne kadar ${inv.uses} üye davet etmiş.`)
    })
})

client.on('message', (message) => {
    if(!message.content.startsWith(prefix) || message.author.bot){
        return
    }
    var args = message.content.split(/ +/)
    var command = message.content.split(' ')[0]
    if(message.member.id == message.guild.id){
        if(args[1] === 'davetler'){
            if(message.member.hasPermission("CREATE_INSTANT_INVITE")){
                message.guild.fetchInvites()
                .then(invites => 
                    invites.forEach((arry) => { 
                        message.channel.send("/" + arry.code + " davet bağlantısı " + arry.inviter.username + " tarafından oluşturulmuş. Bu bağlantıyı " + arry.uses + " üye kullanmış.")}))
                // message.channel.send(invites.find(invite => arry.inviter.createdAt != null).channel.name)
                .catch(console.error)
            }
        }
        else if(args[1] === 'davet'){
            message.channel.createInvite()
            .then(invite => message.channel.send(`Senin için davet oluşturuldu. https://discord.gg/${invite.code} adresinden arkadaşını sunucuya davet edebilirsin. Unutma, her davet başına (25) xp kazanırsın.`))
        }
    }else{
        if(args[1] === 'hug'){
            var user = message.mentions.users.first()
            var attachment = new Attachment('https://cdn.discordapp.com/attachments/484847932580036620/559386392954929222/jhOK3.gif');
            message.channel.send(`<@${message.member.id}> huged to ${user}`, attachment)
        }
    }
})

client.login('NTU4OTgxMDU3NzkwMDgzMDcz.D3fK6A.qWIJkPm4IozEW9gUH73VPzx5O7s')
