function loadDataFromAPI() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Row 1 - Data
        document.getElementById("local_new_cases").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.local_new_cases);
        document.getElementById("local_active_cases").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.local_active_cases);
        document.getElementById("local_total_cases").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.local_total_cases);
        // Row 2 - Data
        document.getElementById("local_deaths").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.local_deaths);
        document.getElementById("local_recovered").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.local_recovered);
        document.getElementById("global_new_cases").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.global_new_cases);
        // Row 3 - Data
        document.getElementById("global_total_cases").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.global_total_cases);
        document.getElementById("global_deaths").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.global_deaths);
        document.getElementById("global_new_deaths").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.global_new_deaths);
        // Row 4 - Data
        document.getElementById("global_recovered").innerHTML = numberWithCommas(JSON.parse(this.responseText).data.global_recovered);
        
        // Last Updates
        document.getElementById("update_date_time1").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time2").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time3").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time4").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time5").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time6").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time7").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time8").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time9").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        document.getElementById("update_date_time10").innerHTML =  "Last Update : "+JSON.parse(this.responseText).data.update_date_time;
        
      }
    };
    xhttp.open("GET", "https://hpb.health.gov.lk/api/get-current-statistical", true);
    xhttp.send();
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function updateTime() {
  var dateInfo = new Date();

  /* time */
  var hr,
    _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
    sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
    ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  var currentTime = hr + ":" + _min + ":" + sec;

  // print time
  document.getElementsByClassName("hms")[0].innerHTML = currentTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;

  /* date */
  var dow = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    day = dateInfo.getDate();

  // store date
  var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;

  document.getElementsByClassName("date")[0].innerHTML = currentDate;
};

// print time and date once, then update them every second
updateTime();
setInterval(function() {
  updateTime()
}, 1000);