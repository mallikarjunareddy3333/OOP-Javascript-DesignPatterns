require(["05_factory_input_ele"], function(controls){
    var text = controls.create({type: "text", value: "Arjun"});
    var language = controls.create({type: "checkbox", checked: "true"});

    document.body.append(text);
    document.body.append(language);

});