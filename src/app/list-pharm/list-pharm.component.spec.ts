import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPharmComponent } from './list-pharm.component';

describe('ListPharmComponent', () => {
  let component: ListPharmComponent;
  let fixture: ComponentFixture<ListPharmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPharmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
