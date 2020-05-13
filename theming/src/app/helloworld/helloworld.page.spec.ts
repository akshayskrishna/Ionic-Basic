import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelloworldPage } from './helloworld.page';

describe('HelloworldPage', () => {
  let component: HelloworldPage;
  let fixture: ComponentFixture<HelloworldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloworldPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelloworldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
