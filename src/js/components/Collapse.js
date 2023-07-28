import "./css/collapse.css";

export default class Collapse {
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
