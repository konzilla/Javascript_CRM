var today = new Date();
    var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

    var dayOfWeek = new Array();
        dayOfWeek[0] = "Sunday";
        dayOfWeek[1] = "Monday";
        dayOfWeek[2] = "Tuesday";
        dayOfWeek[3] = "Wednesday";
        dayOfWeek[4] = "Thursday";
        dayOfWeek[5] = "Friday";
        dayOfWeek[6] = "Saturday";

    var monthName = month[today.getMonth()];
    var dayWeek = dayOfWeek[today.getDay()];
    var day = today.getDate();
    var year = today.getFullYear();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

     var dataString = '<h3>Today is ' + dayWeek + ' ' + monthName + ' ' + day + ', ' + year +
            ' and the current time is ' + hours + ':' + minutes + ':' + seconds + '</h3>';

    document.write(dataString);
