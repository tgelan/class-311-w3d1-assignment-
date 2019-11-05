/* eslint-disable require-jsdoc */
"use strict";
/**
 * Stack class
 * 
 */
 
class Stack {
  /**
   * constructor {undefined}text is the text to be tested for occurence
   */
    constructor() {
        this.storage = [];
    }
    push(element) {
        this.storage.push(element);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.storage.length - 1];
    }
    size() {
        return this.storage.length;
    }
}
