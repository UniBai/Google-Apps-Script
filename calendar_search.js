function getCalendar() {
  var cal = CalendarApp.getCalendarById("lkim313815@gmail.com");

  if (cal != null){

    var events = cal.getEvents(new Date("2024/12/17"), new Date("2024/12/17"));

    if (events.length>0){
      for (var i = 0 ; i <events.length ; i++){
        var title = events[i].getTitle();

        var description = events[i].getDescription();

        var startTime = events[i].getStartTime();

        var endTime = events[i].getEndTime();

        var color = events[i].getColor();

        var location = events[i].getLocation();

        Logger.log("\n標題:" + title + "\n描述:" + description + "\n開始時間:" + startTime + "\n結束時間:" + endTime + "\n顏色:" + color + "\n位置:" + location);
      }
    }
    else{
      Logger.log("查詢行程存在!!!")
    }
  }
  else{
    Logger.log("日曆不存在!!!!!!!!!!")
  }
}
