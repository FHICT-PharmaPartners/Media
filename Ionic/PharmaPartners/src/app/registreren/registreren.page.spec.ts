import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrerenPage } from './registreren.page';

describe('RegistrerenPage', () => {
  let component: RegistrerenPage;
  let fixture: ComponentFixture<RegistrerenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrerenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
