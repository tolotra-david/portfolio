import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgParticleComponent } from './ng-particle.component';

describe('NgParticleComponent', () => {
  let component: NgParticleComponent;
  let fixture: ComponentFixture<NgParticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgParticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgParticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
