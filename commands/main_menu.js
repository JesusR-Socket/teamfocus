/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

/*var button1 = [{ title : "🛑ЗАПУСК НОВИЧКОВ ДЛЯ ЛИДЕРОВ" , command : "1b" }];
var button2 = [{ title : "🛑Школа FOCUS" , url : "https://t.me/+R8UOmLa0Cy9wQE0q" }];
var button3 = [{ title : "🛑Видео для работы" , command : "3b" }];
var button4 = [{ title : "🛑Возражения" , url : "https://t.me/+Skv5n_EZv4owx1kF" }];
var button5 = [{ title : "🛑Важные ссылки" , command : "5b" }];
var button7 = [{ title : "🛑Лучшие в Focus" , command : "7b" }];
var button8 = [{ title : "🛑О команде" , command : "8b" }];
var button9 = [{ title : "🛑Промо Март" , command : "9b" }];
var button10 = [{ title : "🛑График" , command : "10b" }];
var button5 = [{ title : "Отчёты" , url : "https://docs.google.com/forms/d/e/1FAIpQLSc1P7eWG-6Eab0F9jKsFQodIKNgT7IuleHBu1yv4vMfFk6F8g/viewform" }]; */

Bot.sendKeyboard("🔳MAIN MENU🔳", "Thank you for being with us!");

Api.sendMessage({
  text: "🔺Select the category of your question:🔺",

  reply_markup: { inline_keyboard: [
    // line 1
    [
      { text: "🛑LAUNCHING BEGINNERS FOR LEADERS", url: "https://t.me/+AAAA" },
    ],
    // line 2
    [
       { text: "🎒FOCUS", url: "https://t.me/+AAAA" },
       { text: "🎥Video for work", url: "https://t.me/videohum" }
    ],
    [
       { text: "❕Objections", url: "https://t.me/+Skv5n_EZv4owx1kF" },
       { text: "📕Important Links", callback_data: "5b" }

    ],
    // line 2
    [
       { text: "💯Best in Focus", callback_data: "7b" },
       { text: "🔝Top 10 Focus", url: "https://telegra.ph/Top-10-Focus-03-23" }

    ],
    [
       { text: "🧨About team", callback_data: "8b" }
    ],
    // line 2
    [
       { text: "☎Promo", callback_data: "9b" },
       { text: "♨Schedule", callback_data: "10b" }
    ],
    [
       { text: "⚠️Reports", url: "https://docs.google.com/forms/d/e/1FAIpQLSc1P7eWG-6Eab0F9jKsFQodIKNgT7IuleHBu1yv4vMfFk6F8g/viewform" }
    ]
  ]}
});
