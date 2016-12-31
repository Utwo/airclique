import { AirPage } from './app.po';

describe('air App', function() {
  let page: AirPage;

  beforeEach(() => {
    page = new AirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
