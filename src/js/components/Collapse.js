export default class Collapse {
  constructor(parentEl) {
    this.container = document.querySelector(`.${parentEl}`);
    this.element = this.container.querySelector(".collapse-container");
    this.btn = this.element.querySelector(".collapse-btn");
    this.description = this.element.querySelector(".description");

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);

    this.btn.addEventListener("mouseout", this.onMouseLeave);
    this.btn.addEventListener("mouseover", this.onMouseOver);
    this.btn.addEventListener("click", this.onBtnClick);
  }

  onMouseLeave(e) {}

  onMouseOver(e) {}

  onBtnClick(e) {
    if (!this.description.classList.contains("active")) {
      this.description.classList.remove("deactive");
      this.description.classList.add("active");
      return;
    }
    this.description.classList.remove("active");
    this.description.classList.add("deactive");
  }
}
