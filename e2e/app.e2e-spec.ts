import { MultiLingulaWithNg2Page } from './app.po';

describe('multi-lingula-with-ng2 App', function() {
  let page: MultiLingulaWithNg2Page;

  beforeEach(() => {
    page = new MultiLingulaWithNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
