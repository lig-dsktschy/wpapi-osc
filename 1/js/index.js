'use strict';
var ctx, osc;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
ctx = new AudioContext();
osc = ctx.createOscillator();
osc.type = 'sine';
osc.frequency.value = 440;
osc.connect(ctx.destination);
osc.start(0);