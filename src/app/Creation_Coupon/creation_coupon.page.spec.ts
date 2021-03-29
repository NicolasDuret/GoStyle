import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { creation_coupon } from './creation_coupon.page';

describe('creation_coupon', () => {
  let component: creation_coupon;
  let fixture: ComponentFixture<creation_coupon>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [creation_coupon],
      imports: [FormsModule,ReactiveFormsModule,IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(creation_coupon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
