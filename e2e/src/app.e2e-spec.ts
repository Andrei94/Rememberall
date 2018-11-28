import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    AppPage.navigateTo();
  });

  it('should display remarks', () => {
    expect(AppPage.getTableText()).toEqual('Rejected Pdf CISM that embarrassed the team. Saved the honor of the bit team\n' +
      'Ran a jenkins command without sending an email about it');
  });
  it('should be bg-success for first row, bg-danger for second row', () => {
    expect(AppPage.getTableEntriesCss()).toEqual([true, false]);
  });
});
