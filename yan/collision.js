
/* collision.js */

import { distance } from './math.js';

// circle in circle collision detection

export const circleInCircle = (x1, y1, r1, x2, y2, r2) => {

  return distance( x1, y1, x2, y2 ) < r1 + r2;

};

// point in circle collision check

export const pointInCircle = (px, py, cx, cy, cr) => {

  return distance( px, py, cx, cy ) <= cr;

};

// aabb rectangle in rectangle collision detection

export const rectInRect = (x1, y1, w1, h1, x2, y2, w2, h2) => {

  if(

    x1 + w1 < x2 + w2 && x1 + w1 > x2 &&

    y1 + h1 < y2 + h2 && y1 + h1 > y2

  ) {

    return true;

  }

  return false;

};
