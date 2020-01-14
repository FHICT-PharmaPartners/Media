import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowConflictComponent } from './show-conflict.component';

describe('ShowConflictComponent', () => {
  let component: ShowConflictComponent;
  let fixture: ComponentFixture<ShowConflictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowConflictComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
