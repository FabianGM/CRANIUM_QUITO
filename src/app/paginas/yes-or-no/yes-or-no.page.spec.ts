import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YesOrNoPage } from './yes-or-no.page';

describe('YesOrNoPage', () => {
  let component: YesOrNoPage;
  let fixture: ComponentFixture<YesOrNoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesOrNoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YesOrNoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
