import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZoekenPage } from './zoeken.page';

describe('ZoekenPage', () => {
  let component: ZoekenPage;
  let fixture: ComponentFixture<ZoekenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoekenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZoekenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
