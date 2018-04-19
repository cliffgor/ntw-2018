const http = require('http');
const Bot = require('messenger-bot');

let bot = new Bot({
    token: process.env.PAGE_TOKEN || 'EAAXxocYhZAMABAMb0Cdp4HxZAyXa28olqCoLyKxxDHCX8KbbipAGUl6fkZAX0LEEU96J74mZAeUwNsb3sF81PThxWDxbgZAFW8WH7ZCpPDxMICw5fTT2lKzFfJZCwcZCdIsZA7RywhtehW1ysrRxqGTaIwQ21PrIiQJBE3ATZCpDi8ZC0dDhUMtQEGO',
    verify: process.env.VERIFY_TOKEN || 'verified',
});

bot.on('error', (err) => {
    console.log(err.message)
});

bot.on('message', (payload, reply) => {
    let text = payload.message.text;

    reply({ text: 'This is me :)' }, function(err) {
        if (err) console.log(err);
    });
});

let port = process.env.PORT || 3000;
http.createServer(bot.middleware()).listen(port);