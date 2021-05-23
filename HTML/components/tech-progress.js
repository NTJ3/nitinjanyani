class TechProgressInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="progress-box">
    <h5>Flutter <span class="color-heading pull-right">
        <!-- 80% -->
    </span></h5>
    <div class="progress">
        <div class="progress-bar bg-color-base" role="progressbar" data-width="80"></div>
    </div>
</div>
<div class="progress-box">
    <h5>Android <span class="color-heading pull-right">
        <!-- 80% -->
    </span></h5>
    <div class="progress">
        <div class="progress-bar bg-color-base" role="progressbar" data-width="80"></div>
    </div>
</div>
<div class="progress-box">
    <h5>IOS <span class="color-heading pull-right">
        <!-- 50% -->
    </span></h5>
    <div class="progress">
        <div class="progress-bar bg-color-base" role="progressbar" data-width="50"></div>
    </div>
</div>
<div class="progress-box">
    <h5>Firebase <span class="color-heading pull-right">
        <!-- 80% -->
    </span></h5>
    <div class="progress">
        <div class="progress-bar bg-color-base" role="progressbar" data-width="80"></div>
    </div>
</div>
<div class="progress-box">
    <h5>Node Js <span class="color-heading pull-right">
        <!-- 60% -->
    </span></h5>
    <div class="progress">
        <div class="progress-bar bg-color-base" role="progressbar" data-width="60"></div>
    </div>
  </div>
`;
  }
}
customElements.define("techprogress-info", TechProgressInfo);
