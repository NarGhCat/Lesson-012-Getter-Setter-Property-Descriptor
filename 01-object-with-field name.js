'use strict';

const obj = {
  name: [], // ['name', length]
  set name(val) {
    let newArr = val.split(", ")

    for(let i = 0; i < newArr.length; i++) {
      obj.name.push([newArr[i], newArr[i].length]);
    }
  },
  get name() {
    return obj.name;
  },
}

obj.name = 'Hovhannes, Sona';

console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
