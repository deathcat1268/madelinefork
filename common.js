
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

function simulateKeyPress(key) {
      if(key.length == 1) {
        document.getElementById('prompt').innerHTML += key.toLowerCase();
      }
}

const GameEventsEnum = Object.freeze({"ClickButtonEvent": 1})

function gameEventFired(e) {

    addWindowMessage({
            "type":"playSound",
            "sound":"button_click"
         });
}

