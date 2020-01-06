import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedaddComponent } from './medadd.component';

describe('MedaddComponent', () => {
  let component: MedaddComponent;
  let fixture: ComponentFixture<MedaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedaddComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
