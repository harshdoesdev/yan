const doc = document;

export const qs = (sel, ctx = doc) => ctx.querySelector(sel);

export const qsa = (sel, ctx = doc) => ctx.querySelectorAll(sel);

export const style = (el, obj) => Object.assign(el.style, obj);

export const on = (el, evt, hand) => el.addEventListener(evt, hand);

export const off = (el, evt, hand) => el.removeEventListener(evt, hand);
