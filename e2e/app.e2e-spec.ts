import { Practicahtml5Page } from './app.po';

describe('practicahtml5 App', () => {
  let page: Practicahtml5Page;

  beforeEach(() => {
    page = new Practicahtml5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
