import { AppRegisterModule } from './app-register.module';

describe('AppRegisterModule', () => {
  let appRegisterModule: AppRegisterModule;

  beforeEach(() => {
    appRegisterModule = new AppRegisterModule();
  });

  it('should create an instance', () => {
    expect(appRegisterModule).toBeTruthy();
  });
});
