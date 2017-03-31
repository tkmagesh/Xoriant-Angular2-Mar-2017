import { BugTrackerAppPage } from './app.po';

describe('bug-tracker-app App', () => {
  let page: BugTrackerAppPage;

  beforeEach(() => {
    page = new BugTrackerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
