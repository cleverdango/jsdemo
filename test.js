var add = function(a,b){
    return a+b;
}

var myObject = {
    value:0,
    increment:function (inc){
        this.value += typeof inc === 'number' ? inc :1;
    }
};
myObject.increment();
document.writeln(myObject.value);
myObject.increment(2);
document.writeln(myObject.value);

var sum = add(3,4);

myObject.double = function(){
    var that = this;//this指的是myObject对象
    var helper = function(){
        that.value = add(that.value,that.value);
    }
    helper();
};

myObject.double();
document.writeln(myObject.value);//3+3=6