// var dom = {
//     _counter: 0,
//     generateId: function(){
//         return "CustomId" + this._counter++;
//     },
//     create: function(tagName, id){
//         var el = document.createElement(tagName);

//         el.id = id || this.generateId();

//         return el;
//     }
// };

var dom = (function(){ //immediately invoked function returns the object
                        // provides the ability of local scope and emulates privacy

    var _counter = 0;
    
    function generateId(){
        return "CustomId" + _counter++;
    }

    function create(tagName, id){
        var el = document.createElement(tagName);

        el.id = id || generateId();

        return el;
    }

    return {
        generateId: generateId,
        create: create
    }

}());

var div1 = dom.create("div");
console.log(div1.id);

var div2 = dom.create("div");
console.log(div2.id);

dom._counter = "arjun";

var div3 = dom.create("div");
console.log(div3.id);
