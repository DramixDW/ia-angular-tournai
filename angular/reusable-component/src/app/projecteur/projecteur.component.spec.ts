import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecteurComponent } from './projecteur.component';

describe('ProjecteurComponent', () => {
  let component: ProjecteurComponent;
  let fixture: ComponentFixture<ProjecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
