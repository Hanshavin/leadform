import Observer from 'observerjs';
import isMobile from './ismobile';

const observer = new Observer();

class FcbLeadForm {
  constructor() {
    this.isLoad = false;
    this.iframe = this.createIframe();
    this.setButtons();
  }
  createIframe() {
    const self = this;

    const iframe = document.createElement('iframe');
    const appId = document.getElementById('fcb-leadForm').getAttribute('data-event-id');

    iframe.style.border = '0px none transparent';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.zIndex = '2147483647';
    iframe.style.display = 'none';
    iframe.src = `http://localhost:8080/lead-form/${appId}`;

    iframe.onload = () => {
      self.isLoad = true;
      self.initApp();
    };

    document.body.appendChild(iframe);

    return iframe;
  }
  initApp() {
    Observer.emit('init', '*', this.iframe.contentWindow);
  }
  setButtons() {
    const self = this;

    const buttons = document.querySelectorAll('.fcb-leadForm-button');

    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].addEventListener('click', () => {
        self.show();
      });
    }
  }
  show() {
    if (!this.isLoad) return false;

    this.iframe.style.display = 'block';

    if (isMobile.any()) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    }

    Observer.emit('open', '*', this.iframe.contentWindow);

    return 1;
  }
  hide() {
    this.iframe.style.display = 'none';

    document.body.style.overflow = 'inherit';
    document.body.style.position = 'inherit';
    document.body.style.width = 'inherit';
    document.body.style.height = 'inherit';
  }
}

const fcbLeadForm = new FcbLeadForm();

fcbLeadForm.initApp();

observer.suscribe('close', () => { fcbLeadForm.hide(); });
