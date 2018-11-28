import {browser, by, element} from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTableText() {
    return element(by.css('app-root table')).getText();
  }

  static getTableEntriesCss() {
    return element.all(by.css('tr td div')).map(el => el.getAttribute('class').then(x => x.includes('bg-success')));
  }
}
