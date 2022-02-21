import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('debe mostrar el menú', () => {
    page.navigateTo();
    expect(page.getMenu()).toBeTruthy();
  });

  it('debería obtener el texto de las diapositivas', () => {
    page.navigateTo();
    expect(page.getFirstSlide()).toBe('ion-slide');
  });

  it('debe crear una salida de enrutador', () => {
    page.navigateTo();
    expect(page.getRouter()).toBeTruthy();
  });
});
