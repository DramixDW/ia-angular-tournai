import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonSuperComposantComponent } from './mon-super-composant.component';

describe('MonSuperComposantComponent', () => {
  let component: MonSuperComposantComponent;
  let fixture: ComponentFixture<MonSuperComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonSuperComposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonSuperComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
