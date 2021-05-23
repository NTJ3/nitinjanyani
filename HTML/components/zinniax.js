class ZinniaxInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="work-popup-content">
    <a href="javascript:void(0);" class="work-popup-close">Hide</a>
    <div class="margin-b-30">
        <h3 class="margin-b-5">Sotrecash</h3>
        <span><strong>Audit &amp; Survey App</strong></span>
    </div>
    <div class="row">
        <div class="col-sm-10 sm-margin-b-20">
            <div class="margin-t-10 sm-margin-t-0">
                <strong style="font-size: large;">Overview</strong>
                <p>Storecash is a mobile application for the store owners where they can audit their store and earn money. In the mobile application the user can see questionaire/audits uploaded by different companies or brands.<br> <br>  They just need to give answers to those questions along with the proof if required. Later they can claim the money earned and can get it credited into their bank account.</p>
                <p>I have experienced <strong>Firebase Analytics, Crshalytics, In-AppMessaging</strong> during developing this app.</p>
                <strong style="font-size: large;">Tools & Technologies</strong>
                <ul class="list-inline work-popup-tag">
                    <li class="work-popup-tag-item" style="font-size: medium;">Flutter, Firebase</li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    `;
  }
}
customElements.define("zinniax-info", ZinniaxInfo);
