import { container } from '../Container/Container';
import { ClassName, Element } from '../Element';
import './Button.css';

class Button extends Element {
  constructor(tag: string, classNames: ClassName[], title: string) {
    super(tag, classNames);
    this.element.textContent = title;
  }
}

export const addButton = new Button('button', ['button'], '+');
export const removeButton = new Button('button', ['button'], '-');

addButton.element.removeEventListener('click', container.addBlock);
addButton.element.addEventListener('click', container.addBlock);

removeButton.element.removeEventListener('click', container.removeBlock);
removeButton.element.addEventListener('click', container.removeBlock);
