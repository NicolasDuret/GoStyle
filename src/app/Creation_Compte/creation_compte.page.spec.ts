import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { creation_compte } from './creation_compte.page';

describe('creation_compte', () => {
  let component: creation_compte;
  let fixture: ComponentFixture<creation_compte>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [creation_compte],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(creation_compte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
