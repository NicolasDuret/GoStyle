import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { profil } from './profil.page';

describe('profil', () => {
  let component: profil;
  let fixture: ComponentFixture<profil>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [profil],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(profil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
