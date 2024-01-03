import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CipherToPlainComponent } from './cipher-to-plain.component';

describe('CipherToPlainComponent', () => {
  let component: CipherToPlainComponent;
  let fixture: ComponentFixture<CipherToPlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CipherToPlainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CipherToPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
