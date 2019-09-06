require(["eventmanager"], function(evtman){
    function foo(evt){
        console.log(evt.message);
    }

    evtman.subscribe("test/foo", foo);

    evtman.publish("test/foo", {message: "Hello this is custom object"});

    evtman.unsubscribe("test/foo", foo);

    evtman.publish("test/foo", {message: "This should not be seen"});

});