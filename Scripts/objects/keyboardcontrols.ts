module objects {
    // KeyboardControls Class +++++++++++++++
    export class KeyboardControls {
        // PUBLIC INSTANCE VARIABLES ++++++++++++
        public moveForward: boolean;
        public moveBackward: boolean;
        public moveLeft: boolean;
        public moveRight: boolean;
        public jump: boolean;
          public enabled: boolean;

    
        // CONSTRUCTOR ++++++++++++++++++++++++++    
        constructor() {
            this.enabled = false;
            document.addEventListener('keydown', this.onKeyDown.bind(this),false);
            document.addEventListener('keyup', this.onKeyUp.bind(this),false);
            
        }
        
        //public methods
      /*  public enabled():boolean{            
            
            return true;
        }*/
        
           public disabled():void{            
           document.removeEventListener('keydown',onkeydown,false);
            document.removeEventListener('keyup',onkeyup,false); 
        }
        
        public onKeyDown(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case 38:/*up arrow key*/
                case 87:/*w key*/
                    this.moveForward = true;
                    break;
                case 37:/*left arrow key*/
                case 65:/*a key*/
                    this.moveLeft = true;
                    break;
                case 40:/*down arrow key*/
                case 83:/*s key*/
                    this.moveBackward = true;
                    break;
                case 39:/*right arrow key*/
                case 68:/*d key*/
                    this.moveRight = true;
                    break;

                case 32:/*space key*/
                    this.jump = true;
                    break;
            }

        }
        public onKeyUp(event: KeyboardEvent): void {

            switch (event.keyCode) {
                case 38:/*up arrow key*/
                case 87:/*w key*/
                    this.moveForward = false;
                    break;
                case 37:/*left arrow key*/
                case 65:/*a key*/
                    this.moveLeft = false;
                    break;
                case 40:/*down arrow key*/
                case 83:/*s key*/
                    this.moveBackward = false;
                    break;
                case 39:/*right arrow key*/
                case 68:/*d key*/
                    this.moveRight = false;
                    break;

                case 32:/*space key*/
                    this.jump = false;
                    break;
            }

        }
    }
}