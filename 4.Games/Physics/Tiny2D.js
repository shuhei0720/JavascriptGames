"use strict";

let BodyStatic = 1;
let BodyDynamic = 2;
let ShapeCircle = 3;
let ShapeRectangle = 4;
let ShapeLine = 5;

function Vec(x, y) {
    this.x = x;
    this.y = y;
}

Vec.prototype.add = function (v) {
    return new Vec(this.x + v.x, this.y + v.y);
}

Vec.prototype.mul = function (x, y) {
    let r = y || x;
    return new Vec(this.x * x, this.y * r);
}

Vec.prototype.dot = function (v) {
    return this.x * v.x + this.y * v.y;
}

Vec.prototype.cross = function (v) {
    return this.x * v.y - v.x * this.y;
}

Vec.prototype.move = function (dx, dy) {
    this.x += dx;
    this.y += dy;
}

function RectangleEntity(x, y, width, height) {
    this.shape = ShapeRectangle;
    this.type = BodyStatic;
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.deceleration = 1.0;
    this.isHit = function (i, j) {
        return (this.x <= i && i <= this.x + this.w &&
            this.y <= j && j <= this.y + this.h)
    }
}

function LineEntity(x0, y0, x1, y1, restitution) {
    this.shape = ShapeLine;
    this.type = BodyStatic;
    this.x = (x0 + x1) / 2;
    this.y = (y0 + y1) / 2;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;

    this.restitution = restitution || 0.9;
    this.vec = new Vec(x1 - x0, y1 - y0);
    let length = Math.sqrt(Math.pow(this.vex.x, 2) + Math.pow(this.vec.y, 2));
    this.norm = new Vec(y0 - y1, x1 - x0).mul(1 / length);
}

function CircleEntity(x, y, radius, type, restitution, deceleration) {
    
}