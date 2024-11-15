import { addButton, removeButton } from '../Button/Button';
import { Element } from '../Element';
import './ButtonsWrapper.css';

export const buttonsWrapper = new Element('div', ['buttons-wrapper']);

addButton.appendToParent(buttonsWrapper.element);
removeButton.appendToParent(buttonsWrapper.element);
