import { Block } from '../Block/Block';
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

addButton.element.addEventListener('click', () => {
  const count = container.element.children.length;
  const id = count + 1;
  const newBlock = new Block('div', ['block'], id);

  newBlock.appendToParent(container.element);
});

removeButton.element.addEventListener('click', () => {
  const blockToRemove = container.element.lastChild;
  console.log(blockToRemove);

  blockToRemove.remove();
});
