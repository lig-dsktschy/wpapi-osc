'use strict';
var ctx, oscList, freqList, gainList, btnList, rangeList;
oscList = [];
freqList = [
    261.63,
    466.16,
    783.99,
    1174.66,
    1396.91,
    1760
];
gainList = [];
btnList = Array.prototype.slice.call(
    document.getElementsByTagName('button')
);
rangeList = Array.prototype.slice.call(
    document.getElementsByTagName('input')
);
window.AudioContext = window.AudioContext || window.webkitAudioContext;
ctx = new AudioContext();
freqList.forEach(function(freq, i) {
    oscList.push(ctx.createOscillator());
    oscList[i].type = 'sine';
    oscList[i].frequency.value = freq;
    oscList[i].start(0);
    gainList.push(ctx.createGain());
    gainList[i].gain.value = rangeList[i].value;
    oscList[i].connect(gainList[i]);
    btnList[i].addEventListener('click', function() {
        if (btnList[i].hasAttribute('isConnected')) {
            gainList[i].disconnect(ctx.destination);
            btnList[i].removeAttribute('isConnected');
        } else {
            gainList[i].connect(ctx.destination);
            btnList[i].setAttribute('isConnected', '');
        }
    });
    rangeList[i].addEventListener('input', function() {
        gainList[i].gain.value = rangeList[i].value;
    });
});