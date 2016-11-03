'use strict';
var ctx, oscList, freqList, btnList;
oscList = [];
freqList = [
    261.63,
    466.16,
    783.99,
    1174.66,
    1396.91,
    1760
];
btnList = Array.prototype.slice.call(
    document.getElementsByTagName('button')
);
window.AudioContext = window.AudioContext || window.webkitAudioContext;
ctx = new AudioContext();
freqList.forEach(function(freq, i) {
    oscList.push(ctx.createOscillator());
    oscList[i].type = 'sine';
    oscList[i].frequency.value = freq;
    oscList[i].start(0);
    btnList[i].addEventListener('click', function() {
        if (btnList[i].hasAttribute('isConnected')) {
            oscList[i].disconnect(ctx.destination);
            btnList[i].removeAttribute('isConnected');
        } else {
            oscList[i].connect(ctx.destination);
            btnList[i].setAttribute('isConnected', '');
        }
    });
});