'use strict';
var ctx, oscList, freqList;
oscList = [];
freqList = [
    261.63,
    466.16,
    783.99,
    1174.66,
    1396.91,
    1760
];
window.AudioContext = window.AudioContext || window.webkitAudioContext;
ctx = new AudioContext();
freqList.forEach(function(freq, i) {
    oscList.push(ctx.createOscillator());
    oscList[i].type = 'sine';
    oscList[i].frequency.value = freq;
    oscList[i].connect(ctx.destination);
    oscList[i].start(0);
});