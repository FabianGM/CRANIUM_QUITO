import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OptionMlPage } from './option-ml.page';

describe('OptionMlPage', () => {
  let component: OptionMlPage;
  let fixture: ComponentFixture<OptionMlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionMlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OptionMlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
