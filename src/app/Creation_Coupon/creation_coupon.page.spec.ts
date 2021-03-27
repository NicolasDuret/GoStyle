import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { creation_coupon } from './creation_coupon.page';

describe('creation_compte', () => {
  let component: creation_coupon;
  let fixture: ComponentFixture<creation_coupon>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [creation_coupon],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(creation_coupon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
