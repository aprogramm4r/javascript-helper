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

module.exports = {
    AddEvent: AddEvent
};
