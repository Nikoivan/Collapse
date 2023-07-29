import "./css/chat.css";

export default class Chat {
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

    const { element, closeBtn } = this.chatWindow;
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
    return { element: chatWrap, input, sendBtn, closeBtn };
  }

  removeActiveChat() {
    this.openBtn.classList.remove("up-click");
    this.activeWindow.classList.remove("active");
    this.activeWindow.classList.add("deactive");
  }
}
