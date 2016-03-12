var objects;
(function (objects) {
    // KeyboardControls Class +++++++++++++++
    var KeyboardControls = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++    
        function KeyboardControls() {
        }
        //public methods
        KeyboardControls.prototype.enabled = function () {
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
            return true;
        };
        KeyboardControls.prototype.disabled = function () {
            document.removeEventListener('keydown', onkeydown, false);
            document.removeEventListener('keyup', onkeyup, false);
        };
        KeyboardControls.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow key*/
                case 87:
                    this.moveForward = true;
                    break;
                case 37: /*left arrow key*/
                case 65:
                    this.moveLeft = true;
                    break;
                case 40: /*down arrow key*/
                case 83:
                    this.moveBackward = true;
                    break;
                case 39: /*right arrow key*/
                case 68:
                    this.moveRight = true;
                    break;
                case 32:
                    this.jump = true;
                    break;
            }
        };
        KeyboardControls.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case 38: /*up arrow key*/
                case 87:
                    this.moveForward = false;
                    break;
                case 37: /*left arrow key*/
                case 65:
                    this.moveLeft = false;
                    break;
                case 40: /*down arrow key*/
                case 83:
                    this.moveBackward = false;
                    break;
                case 39: /*right arrow key*/
                case 68:
                    this.moveRight = false;
                    break;
                case 32:
                    this.jump = false;
                    break;
            }
        };
        return KeyboardControls;
    })();
    objects.KeyboardControls = KeyboardControls;
})(objects || (objects = {}));
//# sourceMappingURL=keyboardcontrols.js.map