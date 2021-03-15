import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { coupon } from './coupon.page';

describe('coupon', () => {
  let component: coupon;
  let fixture: ComponentFixture<coupon>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [coupon],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(coupon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
