// define("dom", ['jquery', 'folder/myModule'], function($, myMod){
//     $
// });

define(function(){
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
});