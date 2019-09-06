function Calculator() {
    this._currentValue = 0;
}

Calculator.prototype = {
    execute: function(command){
        this._currentValue = command.execute(this._currentValue);
    },
    getCurrentValue: function(){
        return this._currentValue;
    }
}

function Command(fn, value){
    this.execute = fn;
    this.value = value;
}

function AddCommand(value){
    Command.call(this, function(value){
        return value + this.value;
    }, value);
}

var calc = new Calculator();

calc.execute(new AddCommand(19));
console.log(calc.getCurrentValue());

calc.execute(new AddCommand(1));
console.log(calc.getCurrentValue());
