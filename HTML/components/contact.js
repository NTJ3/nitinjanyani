class ContactInfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="bg-color-sky-light">
    <div class="container content-lg">
        <div class="row">
            <div class="col-sm-3 sm-margin-b-30">
                <div class="text-right sm-text-left">
                    <h2 class="margin-b-0">Contacts</h2>
                    <!-- <p>Hire me.</p> -->
                </div>
            </div>
            <div class="col-sm-8 col-sm-offset-1">
                <div class="row">
                    <div class="col-md-3 col-xs-6 md-margin-b-30">
                        <h5>Location</h5>
                        <a href="http://keenthemes.com/">Baroda, Gujarat</a>
                    </div>
                    <div class="col-md-3 col-xs-6 md-margin-b-30">
                        <h5>Phone</h5>
                        <a href="http://keenthemes.com/">+91 63519 48814<br/>+91 70467 06306</a>
                    </div>
                    <div class="col-md-3 col-xs-6">
                        <h5>Email</h5>
                        <a href="mailto:nitinjaniyani7@gmail.com">nitinjaniyani7@gmail.com</a>
                    </div>
                    <!-- <div class="col-md-3 col-xs-6">
                        <h5>Linked In</h5>
                        <a href="https://in.linkedin.com/in/nitin-janyani-222ba611a" target="_blank">Nitin Janyani</a>
                    </div> -->
                </div>
            </div>
        </div>
        <!--// end row -->
    </div>
    </div>
`;
  }
}
customElements.define("contact-info", ContactInfo);
