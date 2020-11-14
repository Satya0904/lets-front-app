import { LetsFrontAppPage } from './app.po';

describe('lets-front-app App', function() {
  let page: LetsFrontAppPage;

  beforeEach(() => {
    page = new LetsFrontAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
