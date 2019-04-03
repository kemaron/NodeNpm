// importuję moduły
var os = require('os');
var colors = require('colors');
var TimeConverter = require('../modules/TimeConverter');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.yellow, release);
    console.log('CPU model:'.red, cpu);
    console.log('Uptime: ~'.blue, (uptime / 60).toFixed(0), 'min');
    console.log('User name:'.grey, userInfo.username);
    console.log('Home dir:'.magenta, userInfo.homedir);
    console.log('Formated Uptime: '.blue, TimeConverter.print(uptime));
}

// eksportuje funkcję dla wywołujących ją
exports.print = getOSinfo;