import { browser, by, element } from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTableText() {
    return element(by.css('app-root table')).getText();
  }
}
