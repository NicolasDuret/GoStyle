import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Scan } from './scan.page';

describe('Scan', () => {
  let component: Scan;
  let fixture: ComponentFixture<Scan>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Scan],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Scan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
