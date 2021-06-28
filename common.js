
function isUnlocked() {
        return isKeyboardUnlocked;
}

function getWindowMessages() {
        return JSON.stringify({scripts: windowMessages});
        //windowMessages = [];
}

function addWindowMessage(message) {
        windowMessages.push(message);
}



const GameEventsEnum = Object.freeze({"ClickButtonEvent": 1})

function gameEventFired(e) {

    addWindowMessage({
            "type":"playSound",
            "sound":"button_click"
         });
}

