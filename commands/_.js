/*CMD
  command: *
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
var button10 = [{ title : "🛑График" , command : "10b" }]; */

let new_members = request.new_chat_members;
let msg = "Hello, ";
let comma = "";

if(new_members.length > 0){
 Api.sendPhoto({
  photo: "https://ibb.co/6ymJ855",
  caption: "🔺Приветствуем нового участника🔺\n\nПодпишись на нашего бота чтобы иметь всю актуальную информацию!",

  reply_markup: { inline_keyboard: [
    [
      { text: "♦ПОДПИСАТЬСЯ♦", url: "https://t.me/team_focus_bot?start" }
    ]
  ]}
});
}


