export type ClassName = string;
export class Element {
  element: HTMLElement;

  constructor(tag: string, classNames: ClassName[]) {
    this.element = document.createElement(tag);
    classNames.forEach((name) => this.element.classList.add(name));
  }

  appendToParent(parent: HTMLElement): void {
    parent.appendChild(this.element);
  }
}
