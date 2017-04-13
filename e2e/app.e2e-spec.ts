import { TestChallengePage } from './app.po';

describe('test-challenge App', function() {
  let page: TestChallengePage;

  beforeEach(() => {
    page = new TestChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
