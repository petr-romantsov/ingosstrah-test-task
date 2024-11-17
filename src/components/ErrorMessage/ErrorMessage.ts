import { ClassName, Element } from '../Element';
import './ErrorMessage.css';

export class ErrorMessage extends Element {
  constructor(tag: string, classNames: ClassName[], text: string) {
    super(tag, classNames);
    this.element.textContent = text;
  }
}
