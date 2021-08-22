/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import KB from "./KB.js";
const Keyboard = new KB("Dell", 23, "Blue", true);

console.log("The Keyboard object:", Keyboard);

Keyboard.dpad(false);
console.log(Keyboard);
