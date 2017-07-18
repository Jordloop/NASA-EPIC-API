import { NasaEpicApiPage } from './app.po';

describe('nasa-epic-api App', () => {
  let page: NasaEpicApiPage;

  beforeEach(() => {
    page = new NasaEpicApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
