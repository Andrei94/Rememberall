import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    AppPage.navigateTo();
    expect(AppPage.getTableText()).toBe('Rejected Pdf CISM that embarrassed the team. Saved the honor of the bit team\n' +
      'Ran a jenkins command without sending an email about it');
  });
});
