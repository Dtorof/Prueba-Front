import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaInfoComponent } from './entrada-info.component';

describe('EntradaInfoComponent', () => {
  let component: EntradaInfoComponent;
  let fixture: ComponentFixture<EntradaInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradaInfoComponent]
    });
    fixture = TestBed.createComponent(EntradaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
