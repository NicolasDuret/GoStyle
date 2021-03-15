import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { liste } from './liste.page';

describe('liste', () => {
  let component: liste;
  let fixture: ComponentFixture<liste>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [liste],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(liste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
