/*CMD
  command: 8b
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendMediaGroup({
media: [
{ type: "photo", 
media: "https://ibb.co/6ymJ855",
caption: "♦FOCUS — это бизнес-сообщество, которое поможет тебе выйти на совершенно новый уровень дохода, даже если у тебя нет опыта в бизнесе, навыка ведения социальных сетей и окружения предпринимателей.",
parse_mode: "markdown"},
{ type: "photo", 
media: "https://ibb.co/sCnp2hP",
parse_mode: "markdown"}
]
});

Api.sendPhoto({
  photo: "https://ibb.co/0m23hp7",
  caption: "Основатель FOCUS - Бойко Владислав\nВходит в координационный совет компании, средний чек 7000-10.000$ в месяц, в команде более 2500 человек, оборот 2 000 000$+\n\nМиссия: помочь как можно большему количеству человек обрести финансовую стабильность и уйти из найма\n\nДевиз: нет ничего невозможного"
});

Bot.sendMessage("География команды:\n\n🔻11 офисов\n🔻2500 партнеров\n🔻3 страны открыто");
Bot.sendMessage("❕С FOCUS Ты получаешь целую команду единомышленников, которые уже состоялись в этом бизнесе и заинтересованы в твоём результате.❕");