/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/Collapse.js

class Collapse {
  constructor(parentEl) {
    this.container = document.querySelector(`.${parentEl}`);
  }
  init() {
    const element = document.createElement("div");
    element.classList.add("collapse-container");
    element.innerHTML = `<div class="btn-container">
    <span class="collapse-btn btn">Collapse</span>             
</div>
<div class="description">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>`;
    this.container.append(element);
    this.element = element;
    this.btn = this.element.querySelector(".collapse-btn");
    this.description = this.element.querySelector(".description");
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
    this.btn.addEventListener("mouseout", this.onMouseLeave);
    this.btn.addEventListener("mouseover", this.onMouseOver);
    this.btn.addEventListener("click", this.onBtnClick);
  }
  onMouseLeave() {
    this.btn.classList.add("over");
  }
  onMouseOver() {
    this.btn.classList.remove("over");
  }
  onBtnClick() {
    if (!this.description.classList.contains("active")) {
      this.description.classList.remove("deactive");
      this.description.classList.add("active");
      return;
    }
    this.description.classList.remove("active");
    this.description.classList.add("deactive");
  }
}
;// CONCATENATED MODULE: ./src/js/components/Chat.js

class Chat {
  constructor(parentEl) {
    this.container = document.querySelector(`.${parentEl}`);
    const chat = document.createElement("div");
    chat.classList.add("chat");
    chat.innerHTML = `<span class="chat-btn"></span>`;
    this.container.append(chat);
    this.element = chat;
    this.openBtn = this.element.querySelector(".chat-btn");
    this.onOpenBtn = this.onOpenBtn.bind(this);
    this.openChat = this.openChat.bind(this);
    this.removeActiveChat = this.removeActiveChat.bind(this);
    this.openBtn.addEventListener("mousedown", this.onOpenBtn);
    this.openBtn.addEventListener("mouseup", this.openChat);
  }
  onOpenBtn() {
    if (this.openBtn.classList.contains("up-click")) {
      this.openBtn.classList.remove("up-click");
    }
    this.openBtn.classList.add("down-click");
  }
  openChat() {
    this.openBtn.classList.remove("down-click");
    this.openBtn.classList.add("up-click");
    if (this.activeWindow) {
      this.activeWindow.classList.remove("deactive");
      this.activeWindow.classList.add("active");
      return;
    }
    const {
      element,
      closeBtn
    } = this.chatWindow;
    this.element.append(element);
    this.activeWindow = element;
    closeBtn.addEventListener("click", this.removeActiveChat);
  }
  get chatWindow() {
    const chatWrap = document.createElement("div");
    chatWrap.classList.add("chat-wrap");
    chatWrap.innerHTML = `<div class="chat-header">
    <h3 class="chat-title">Напишите нам</h3>
    <span class="chat-close-btn">&#65794;</span>
</div>
<div class="chat-main">
    <textarea name="chat" cols="45" rows="16" class="text-in"></textarea>
</div>
<div class="chat-footer">
    <button class="chat-send-btn">Отправить</button>
</div>`;
    const closeBtn = chatWrap.querySelector(".chat-close-btn");
    const input = chatWrap.querySelector(".text-in");
    const sendBtn = chatWrap.querySelector(".chat-send-btn");
    return {
      element: chatWrap,
      input,
      sendBtn,
      closeBtn
    };
  }
  removeActiveChat() {
    this.openBtn.classList.remove("up-click");
    this.activeWindow.classList.remove("active");
    this.activeWindow.classList.add("deactive");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const collapse = new Collapse("wrapper");
collapse.init();
const chat = new Chat("container");
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;