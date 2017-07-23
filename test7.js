//扩充类型的功能
Function.prototype.method = function(name,func){
    //没用该方法时再添加它
    if (!this.prototype[name]){
        this.prototype[name] = func;
    }
    return this;

}
