import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
<<<<<<< HEAD
    expect(page.getTitleText()).toEqual('Welcome to course-project!');
=======
    expect(page.getTitleText()).toEqual('Welcome to shoppingcart!');
>>>>>>> c1244806719fe4efa96fe68643c351c50148beb6
=======
    expect(page.getTitleText()).toEqual('Welcome to shoppingcart!');
>>>>>>> c1244806719fe4efa96fe68643c351c50148beb6
  });
});
