/**
* @see https://www.notion.so/a672b2292c5e4db5811e05bae1e38fe1
*/
export class MessageUtilAreaModel{
    value:  Element;

    constructor(messageUtilArea: Element){
        this.value = messageUtilArea;
    }

    appendMuskButton = () =>{
        const muskButton = document.createElement('button');
        muskButton.textContent = 'マスク';
        this.value.appendChild(muskButton);
    }
}