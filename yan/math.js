export const random = (min = 0, max = 1) => Math.random() * (max - min) + min;

export const clamp = (num, min, max) => Math.max(min, Math.min(num, max));
