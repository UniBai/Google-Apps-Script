function delCalendar() {
  var cal = CalendarApp.getCalendarById("你的日曆ID");
  if (cal != null){
    var events = cal.getEvents(new Date("2024/12/18"), new Date("2024/12/18"));
    for (var i=0; i<events.length; i++){
      events[i].deleteEvent();
    }
    Logger.log("行程已刪除！");
  } else {
    Logger.log("行程不存在！");
  }
}