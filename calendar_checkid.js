function getAllId() {
  var ary = CalendarApp.getAllOwnedCalendars();

  if (ary.length == 0){
    Logger.log("cannot find it");
    return;
  }
  for (var i = 0; i<ary.length; i++){
    Logger.log("ID=" + ary[i].getId() + " , 名稱=" + ary[i].getName());


  }
}
