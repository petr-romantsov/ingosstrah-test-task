import { block } from '../Block/Block';
import { ClassName, Element } from '../Element';
import './Container.css';

export class Container extends Element {
  constructor(tag: string, classNames: ClassName[]) {
    super(tag, classNames);
  }
}
export const container = new Container('div', ['container']);
block.appendToParent(container.element);
