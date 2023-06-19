import { ButtonDelegate } from "./ButtonDelegate"

export class Button {

    private delegate: ButtonDelegate  | undefined = undefined
    private text: string = ""

    setDelegate(delegate: ButtonDelegate) {
        this.delegate = delegate
    }

    setText(text: string) {
        this.text = text
    }

    click() {
        // do somthing
        // fire onclick
        this.onCLick()
    }

    onCLick() {
        //...

        this.delegate?.onClick()

        //...
    }

    onTap() {
        //...

        this.delegate?.onTap()

        //...
    }
}