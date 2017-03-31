import { HelloWorldAppPage } from './app.po';

describe('hello-world-app App', () => {
  let page: HelloWorldAppPage;

  beforeEach(() => {
    page = new HelloWorldAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
