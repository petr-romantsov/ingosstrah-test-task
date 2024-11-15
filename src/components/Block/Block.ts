import { ClassName, Element } from '../Element';
import './Block.css';

export class Block extends Element {
  constructor(tag: string, classNames: ClassName[], num: number) {
    super(tag, classNames);
    this.element.textContent = String(num);
  }
}

export const block = new Block('div', ['block'], 1);
