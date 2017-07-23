function add(b) {
  return this.value + b;
}
var obj = {
  value: 1,
  add: add
}
console.log(obj.add(2));//3