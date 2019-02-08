const TelegramBot = require('node-telegram-bot-api');
const token = '758724309:AAH0wuzE32ZWoh6cH3VK3mL1-isu2YmZytM';
const request = require('request');
var oxr = require('open-exchange-rates');
oxr.set({ app_id: '9d293f0b64f94f6898e02a298c670b3d&show_alternative=1' })
// replace the value below with the Telegram token you receive from @BotFather

var allrates;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
var chatId;
function menu(){
    bot.sendMessage(chatId, 'Выберите котировку', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text:"Валюта",
              callback_data: "forex"
            },{
              text:"Криптовалюта",
              callback_data: "coin"
            },{
              text:"Все курсы",
              callback_data: "all_rates"
            }
          ]
        ]
      }
    });
}
function btc(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "BTC"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAXuJ"
        }
      ]
    ]
  }
});
}
function ltc(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "LTC"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAa3K"
        }
      ]
    ]
  }
});
}
function eth(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "ETH"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAYqZ"
        }
      ]
    ]
  }
});
}
function dash(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "DASH"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAaBw"
        }
      ]
    ]
  }
});
}
function xmr(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "XMR"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAc99"
        }
      ]
    ]
  }
});
}
function xrp(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "XRP"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAc9q"
        }
      ]
    ]
  }
});
}
function nxt(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "NXT"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcAd"
        }
      ]
    ]
  }
});
}
function doge(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "DOGE"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcBD"
        }
      ]
    ]
  }
});
}
function str(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "STR"
        },{
          text:"Назад",
          callback_data: "coin"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcBp"
        }
      ]
    ]
  }
});
}
function gbp(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "GBP"
        },{
          text:"Назад",
          callback_data: "forex"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcCa"
        }
      ]
    ]
  }
});
}
function rub(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "RUB"
        },{
          text:"Назад",
          callback_data: "forex"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcEd"
        }
      ]
    ]
  }
});
}
function aud(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "AUD"
        },{
          text:"Назад",
          callback_data: "forex"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcFj"
        }
      ]
    ]
  }
});
}
function nzd(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "NZD"
        },{
          text:"Назад",
          callback_data: "forex"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcGZ"
        }
      ]
    ]
  }
});
}
function jpy(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "JPY"
        },{
          text:"Назад",
          callback_data: "forex"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcHH"
        }
      ]
    ]
  }
});
}
function chf(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "CHF"
        },{
          text:"Назад",
          callback_data: "forex"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcHw"
        }
      ]
    ]
  }
});
}
function eur(){
bot.sendMessage(chatId, 'Выберите то, что вас интересует', {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text:"Курс",
          callback_data: "EUR"
        },{
          text:"Назад",
          callback_data: "forex"
        }],[{
          text:"График",
          url:"https://clck.ru/FAcJV"
        }
      ]
    ]
  }
});
}
bot.onText(/\/menu/, (msg, match) => {
  chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Выберите котировку', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text:"Валюта",
            callback_data: "forex"
          },{
            text:"Криптовалюта",
            callback_data: "coin"
          },{
            text:"Все курсы",
            callback_data: "all_rates"
          }
        ]
      ]
    }
  });
});
function coin(){
  bot.sendMessage(chatId, 'Выберите какая криптовалюта вас интересует', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'RIPPLE',
            callback_data: 'xrp'
          }, {
            text: 'LITECOIN',
            callback_data: 'ltc'
          }, {
            text: 'DASH',
            callback_data: 'dash'
          }, {
            text: 'ETH',
            callback_data: 'eth'
          }, {
            text: 'MONERO',
            callback_data: 'xmr'
          }],[{
            text: 'NXT',
            callback_data: 'nxt'
          }, {
            text: 'DOGE',
            callback_data: 'doge'
          }, {
            text: 'STR',
            callback_data: 'str'
          }, {
            text: 'BTC',
            callback_data: 'btc'
          },],[{
            text: "MAIN MENU",
            callback_data: "menu"
          }]
        ]
    }
  });
}
function rates(){
  bot.sendMessage(chatId, 'Отобразить все курсы', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Отобразить нынешние',
                callback_data: 'all_rates'
              }, {
                text: 'Назад',
                callback_data: 'menu'
              },
            ]
          ]
        }
      });
}
bot.onText(/\/rates/, (msg, match) => {
  chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Отобразить все курсы', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Отобразить нынешние',
                callback_data: 'all_rates'
              }, {
                text: 'Назад',
                callback_data: 'menu'
              },
            ]
          ]
        }
      });
    });
function forex(){
bot.sendMessage(chatId, 'Выберите какая валюта вас интересует', {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '€ - EUR',
              callback_data: 'eur'
            }, {
              text: '₽ - RUB',
              callback_data: 'rub'
            }, {
              text: '£ - GBP',
              callback_data: 'gbp'
            }], [{
              text: '$ - NZD',
              callback_data: 'nzd'
            }, {
              text: '$ - AUD',
              callback_data: 'aud'
            }, {
              text: '	¥ - JPY',
              callback_data: 'jpy'
            }, {
              text: '₣ - CHF',
              callback_data: 'chf'
            }],[{
              text: "MAIN MENU",
              callback_data: "menu"
            }
          ]
        ]
      }
    });
}
bot.onText(/\/curseforex/, (msg, match) => {

  chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Выберите какая валюта вас интересует', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '€ - EUR',
            callback_data: 'eur'
          }, {
            text: '₽ - RUB',
            callback_data: 'rub'
          }, {
            text: '£ - GBP',
            callback_data: 'gbp'
          }], [{
            text: '$ - NZD',
            callback_data: 'nzd'
          }, {
            text: '$ - AUD',
            callback_data: 'aud'
          }, {
            text: '	¥ - JPY',
            callback_data: 'jpy'
          }, {
            text: '₣ - CHF',
            callback_data: 'chf'
          }],[{
            text: "MAIN MENU",
            callback_data: "menu"
          }
        ]
      ]
    }
  });
});
bot.onText(/\/start/, (msg, match) => {

  chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Здравствуйте! Я бот который выдает котировки валют(нахожусь в альфе)\nВыберите котировку', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text:"Валюта",
            callback_data: "forex"
          },{
            text:"Криптовалюта",
            callback_data: "coin"
          },{
            text:"Все курсы",
            callback_data: "all_rates"
          }
        ]
      ]
    }
  });
});
bot.on('callback_query', query => {
  const flag = {
      'EUR': '🇪🇺',
      'USD': '🇺🇸',
      'RUB': '🇷🇺',
      'UAH': '🇺🇦',
      'BTC': '₿',
      'AUD': "🇦🇺",
      'NZD': "🇳🇿",
      'CHF': "🇨🇭",
      "GBP": "🇬🇧",
      "LTC": "Ł",
      "ETH": "Ξ",
      "XRP": "",
      "XMR": "",
      "DASH": "",
      "NXT": "",
      "STR": "",
      "DOGE": ""

    }

  if(query.data=="menu"){
    menu();
  }
  if(query.data=="str"){
    str();
  }
  if(query.data=="btc"){
    btc();
  }
  if(query.data=="eth"){
    eth();
  }
  if(query.data=="ltc"){
    ltc();
  }
  if(query.data=="xrp"){
    xrp();
  }
  if(query.data=="xmr"){
    xmr();
  }
  if(query.data=="flex"){

  }
  if(query.data=="dash"){
    dash();
  }
  if(query.data=="eur"){
    eur();
  }
  if(query.data=="rub"){
    rub();
  }
  if(query.data=="gbp"){
    gbp();
  }
  if(query.data=="aud"){
    aud();
  }
  if(query.data=="doge"){
    doge();
  }
  if(query.data=="nzd"){
    nzd();
  }
  if(query.data=="jpy"){
    jpy();
  }
  if(query.data=="chf"){
    chf();
  }
  if(query.data=="nxt"){
    nxt();
  }
  if(query.data=="forex"){
    forex();
  }
  if(query.data=="coin"){
    coin();
  }
  if(query.data=="all_rates"){

  }
  const id = query.message.chat.id;
  name = query.data;
  oxr.latest(function() {
    let md = `
      * ${"1 USD "} ${flag["USD"]}💱 ${oxr.rates[name]} ${name+' '} ${flag[name]}*
    `;
    console.dir(oxr.rates[name]);
    if(oxr.rates==undefined || oxr.rates[name]==undefined){

    }
    if(query.data=="all_rates"){
      var flex1;
      flex = oxr.latest(function() {
        flex1=oxr.rates;
        var string="";
        for(var flex2 in flex1) {
            var value = flex1[flex2];
            var value2 = flex2;
            string += "1 USD =" + value +" "+ value2 + "\n";
        }
        let ld = `
          * ${string}*
        `
        bot.sendMessage(id, ld, {parse_mode: 'Markdown'});
      });

    }
    else{
      console.dir("ne flexing");
      bot.sendMessage(id, md, {parse_mode: 'Markdown'});
  }
  });

});
