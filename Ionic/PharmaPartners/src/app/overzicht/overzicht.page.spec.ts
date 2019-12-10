import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverzichtPage } from './overzicht.page';

describe('OverzichtPage', () => {
  let component: OverzichtPage;
  let fixture: ComponentFixture<OverzichtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverzichtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
