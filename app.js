import { randomInt } from './yan/math.js';

import { qs, on } from './yan/dom.js';

const cnv = qs('#display'),
      ctx = cnv.getContext("2d");

const resize = () => {

  cnv.width = window.innerWidth;

  cnv.height = window.innerHeight;

};

resize();

const points = [];

const gameloop = () => {

  requestAnimationFrame(gameloop);

  ctx.clearRect(0, 0, cnv.width, cnv.height);

  points.forEach(({ x, y, color }) => {

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();

  });

};

const drawPoint = e => {

  let x, y;

  if(e.type === "mousemove") {

    x = e.clientX;

    y = e.clientY;

  } else if(e.type === "touchmove") {

    x = e.touches[0].clientX;

    y = e.touches[0].clientY;

  }

  points.push({

    x,

    y,

    color: `rgb(${ randomInt(0, 255) }, ${ randomInt(0, 255) }, ${ randomInt(0, 255) })`

  });

};

on(cnv, "touchmove", drawPoint);

on(cnv, "mousemove", drawPoint);

on(window, "load", gameloop);

on(window, "resize", resize);
