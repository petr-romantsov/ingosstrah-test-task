import { root } from '../..';
import { Block } from '../Block/Block';
import { buttonsWrapper } from '../ButtonsWrapper/ButtonsWrapper';
import { ClassName, Element } from '../Element';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import './Container.css';

export class Container extends Element {
  blocks: Block[];
  maxVisibleBlocks: number;
  visibleBlocks: HTMLCollection;
  hiddenBlocks: HTMLCollection;

  constructor(tag: string, classNames: ClassName[]) {
    super(tag, classNames);
    this.blocks = [];
    this.visibleBlocks = document.getElementsByClassName('visible');
    this.hiddenBlocks = document.getElementsByClassName('hidden');
    this.maxVisibleBlocks = 5;

    this.addBlock = this.addBlock.bind(this);
    this.removeBlock = this.removeBlock.bind(this);
  }

  addBlock(): void {
    this.cleanErrors();
    const newBlock = new Block(
      'div',
      ['block', 'visible'],
      this.blocks.length + 1,
    );
    newBlock.appendToParent(this.element);
    this.blocks.push(newBlock);

    if (this.visibleBlocks.length > this.maxVisibleBlocks) {
      this.removeFirstBlock();
    }
  }

  removeBlock(): void {
    if (this.visibleBlocks.length === 0) {
      this.showError('Нет доступных блоков для удаления');
      return;
    }

    if (this.visibleBlocks.length > 0) {
      const lastBlock = this.blocks.pop();
      this.element.removeChild(lastBlock.element);
    }

    if (
      this.visibleBlocks.length < this.maxVisibleBlocks &&
      this.hiddenBlocks.length
    ) {
      this.restoreFirstBlock();
    }
  }

  removeFirstBlock(): void {
    if (this.blocks.length > 0) {
      const firstBlock = this.visibleBlocks[0];
      firstBlock.classList.replace('visible', 'hidden');
    }
  }

  restoreFirstBlock(): void {
    this.hiddenBlocks[this.hiddenBlocks.length - 1].classList.replace(
      'hidden',
      'visible',
    );
  }

  showError(message: string): void {
    this.cleanErrors();
    const errorMessage = new ErrorMessage('p', ['error'], message);
    root.appendChild(errorMessage.element);
  }

  cleanErrors(): void {
    const existingError = root.querySelector('.error');
    if (existingError) {
      root.removeChild(existingError);
    }
  }
}

export const container = new Container('div', ['container']);
