import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainToCipherComponent } from './plain-to-cipher.component';

describe('PlainToCipherComponent', () => {
  let component: PlainToCipherComponent;
  let fixture: ComponentFixture<PlainToCipherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainToCipherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlainToCipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
