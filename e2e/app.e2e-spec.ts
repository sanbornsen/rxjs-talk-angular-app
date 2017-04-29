import { SockappPage } from './app.po';

describe('sockapp App', () => {
  let page: SockappPage;

  beforeEach(() => {
    page = new SockappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
