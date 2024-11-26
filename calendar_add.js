function setCalendar() {
  var cal = CalendarApp.getOwnedCalendarById("lkim313815@gmail.com");

  if (cal != null){
    var title = "看電影";

    var desc = "美麗華大直影城";

    var loc = "內湖";

    var event = cal.createEvent(title, new Date("2024/12/18 18:00"), new Date("2024/12/18 19:30"), {description : desc, location : loc});

    event.setColor("9");
    Logger.log(event.getId());
  }
  else{
    Logger.log("cannot find it!");
  }
}
