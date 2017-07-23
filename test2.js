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

    var helper = function(){
        document.writeln(this);//undefined
        this.value = add(this.value,this.value);
    }
    helper();
};

myObject.double();
document.writeln(myObject.value);//3