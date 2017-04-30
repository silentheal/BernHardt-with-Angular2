import { Bernhardt3Page } from './app.po';

describe('bernhardt3 App', () => {
  let page: Bernhardt3Page;

  beforeEach(() => {
    page = new Bernhardt3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
