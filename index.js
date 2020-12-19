function AddEvent(Function,Object,EventType) {
    var PramFilled = false
    if (Function) {
        PramFilled = true
    }else{
        PramFilled = false
    }
    if (Object) {
        if (PramFilled === false) {

            console.log("Please fill out the Function,Object and EventType")

        }
    }else{
        PramFilled === false
    }
    if (EventType) {
        if (PramFilled === false) {
            console.log("Please fill out the Function,Object and EventType")
        }
    }
    if (PramFilled) {Object.addEventListener(EventName,Function)}
}

function ReturnValue(value) {
    return value
}

function Package(Name,Description) {
    var JSON = {
        "name": Name,
        "version": "1.0.0",
        "description": Description,
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "repository": {
            "type": "git",
            "url": "git+"
        },
        "author": "",
        "license": "ISC",
        "bugs": {
            "url": ""
        },
        "homepage": ""
    }
    console.log(JSON)
    console.log("You may copy, paste to a package.json and put the information in the empty one.")
    console.log("You may also use `$ npm init`")
    return JSON
}

module.exports = {
    AddEvent: AddEvent,
    ReturnValue: ReturnValue,
    Package: Package
};
