import { Button } from "./Button";
import { ButtonDelegate } from "./ButtonDelegate";

class View implements ButtonDelegate {

    button: Button = new Button()

    constructor(){
        this.button.setDelegate(this)
        this.button.click()
    }

    // button delegates
    onClick = () => {
        console.log(`click events coming in`)
    }

    onTap = () => {
        console.log(`tap events coming in`)
    }
}

export { View };
