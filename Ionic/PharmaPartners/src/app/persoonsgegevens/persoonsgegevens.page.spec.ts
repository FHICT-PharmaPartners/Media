import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersoonsgegevensPage } from './persoonsgegevens.page';

describe('PersoonsgegevensPage', () => {
  let component: PersoonsgegevensPage;
  let fixture: ComponentFixture<PersoonsgegevensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoonsgegevensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersoonsgegevensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
