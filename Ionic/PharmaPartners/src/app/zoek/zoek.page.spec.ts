import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZoekPage } from './zoek.page';

describe('ZoekPage', () => {
  let component: ZoekPage;
  let fixture: ComponentFixture<ZoekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZoekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
