(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{z:()=>d});var e,n=function(){function t(t,e){var n=this;this.element=document.createElement(t),e.forEach((function(t){return n.element.classList.add(t)}))}return t.prototype.appendToParent=function(t){t.append(this.element)},t}(),o=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),r=function(t){function e(e,n,o){var r=t.call(this,e,n)||this;return r.element.textContent=String(o),r}return o(e,t),e}(n),i=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(t){function e(e,n,o){var r=t.call(this,e,n)||this;return r.element.textContent=o,r}return i(e,t),e}(n),l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),s=new(function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.blocks=[],o.visibleBlocks=document.getElementsByClassName("visible"),o.hiddenBlocks=document.getElementsByClassName("hidden"),o.maxVisibleBlocks=5,o.addBlock=o.addBlock.bind(o),o.removeBlock=o.removeBlock.bind(o),o}return l(e,t),e.prototype.addBlock=function(){this.cleanErrors();var t=new r("div",["block","visible"],this.blocks.length+1);t.appendToParent(this.element),this.blocks.push(t),this.visibleBlocks.length>this.maxVisibleBlocks&&this.removeFirstBlock()},e.prototype.removeBlock=function(){if(0!==this.visibleBlocks.length){if(this.visibleBlocks.length>0){var t=this.blocks.pop();this.element.removeChild(t.element)}this.visibleBlocks.length<this.maxVisibleBlocks&&this.hiddenBlocks.length&&this.restoreFirstBlock()}else this.showError("Нет доступных блоков для удаления")},e.prototype.removeFirstBlock=function(){this.blocks.length>0&&this.visibleBlocks[0].classList.replace("visible","hidden")},e.prototype.restoreFirstBlock=function(){this.hiddenBlocks[this.hiddenBlocks.length-1].classList.replace("hidden","visible")},e.prototype.showError=function(t){this.cleanErrors();var e=new c("p",["error"],t);d.appendChild(e.element)},e.prototype.cleanErrors=function(){var t=d.querySelector(".error");t&&d.removeChild(t)},e}(n))("div",["container"]),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),u=function(t){function e(e,n,o){var r=t.call(this,e,n)||this;return r.element.textContent=o,r}return a(e,t),e}(n),p=new u("button",["button"],"+"),f=new u("button",["button"],"-");p.element.removeEventListener("click",s.addBlock),p.element.addEventListener("click",s.addBlock),f.element.removeEventListener("click",s.removeBlock),f.element.addEventListener("click",s.removeBlock);var h=new n("div",["buttons-wrapper"]);p.appendToParent(h.element),f.appendToParent(h.element);var d=document.getElementById("root");s.appendToParent(d),h.appendToParent(d)})();