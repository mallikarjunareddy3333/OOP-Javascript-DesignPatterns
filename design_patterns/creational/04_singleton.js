var dom = (
    function(){
        var _counter = 0;
        var instance;

        function generateId(){
            return "customId" + _counter++;
        }

        function create(tagName, id){
            var el = document.createElement(tagName);
            el.id = id || generateId();
            return el;
        }

        function createInstance(){
            return {
                generateId: generateId,
                create: create
            };
        }

        return {
            getInstance: function(){
                return instance || (instance = createInstance());
            }
        };
    }()
);

var el = dom.getInstance().create('div');
var el1 = dom.getInstance().create('div');

console.log(el.id);
console.log(el1.id);
