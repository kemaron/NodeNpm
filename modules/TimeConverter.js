function TimeFormat(sec) {
    var hours = Math.floor(sec/3600);
    var minutes = Math.floor(sec/60);
    var seconds = sec - (minutes*60);    
    var fullTime = '';

    if (hours >= 1) {
        fullTime = hours + ' godz. ';
    }
    
    if (minutes > 0) {
        fullTime += (minutes - (hours*60) )+ ' min. ';
    }
    fullTime += seconds + ' sek.';

    return fullTime;
}

exports.print = TimeFormat;


