function add(b) {
  var realAdd = (num) => {
    return this.value + num;
  }
  return realAdd(b);
}
var obj = {
  value: 1,
  add: add
}
console.log(obj.add(2));//3
