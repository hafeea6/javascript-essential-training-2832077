/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const kb = {
  companyName: "Dell",
  numKey: 32,
  arrows: {
    type: "Up, Down, Left, Right",
  },
  newName: function (newName) {
    this.companyName = newName;
  },
};

console.log(kb.companyName);
console.log(kb.arrows.type);
