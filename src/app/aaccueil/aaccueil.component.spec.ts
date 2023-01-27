import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaccueilComponent } from './aaccueil.component';

describe('AaccueilComponent', () => {
  let component: AaccueilComponent;
  let fixture: ComponentFixture<AaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AaccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
