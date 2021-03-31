import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { connexion } from './connexion';

describe('connexion', () => {
  let component: connexion;
  let fixture: ComponentFixture<connexion>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [connexion],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(connexion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
