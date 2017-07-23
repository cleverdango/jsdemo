//创建一个test的构造器函数，它构造一个带有status的属性对象
//类似构造函数
var test = function (string) {
    this.status = string;
}
//类似getter
test.prototype.get_status = function () {
    return this.status;
}
var mytest = new test("xxx");

var array = [3, 4];
var sum = add.apply(null, array);

var statusObject = {
    status: 'A-Ok'
};
//statusObject并没有继承自test.prototype
//但是我们可以在statusObject上调用get_status的方法
var status = test.prototype.get_status.apply(statusObject);

var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];//arguments为关键词
    }
    return sum;
};
document.writeln(sum(1, 4, 56, 6, 7))

var add = function(a,b){
    if (typeof a !== 'number'){
        throw {
            name:'TypeError',
            message:"dadfad"
        }
    }
    return a+b;
}