import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfielPage } from './profiel.page';

describe('ProfielPage', () => {
  let component: ProfielPage;
  let fixture: ComponentFixture<ProfielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfielPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
