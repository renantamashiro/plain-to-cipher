import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlainToCipherComponent } from './plain-to-cipher.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('PlainToCipherComponent', () => {
  let component: PlainToCipherComponent;
  let fixture: ComponentFixture<PlainToCipherComponent>;
  let service: HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    }).compileComponents();
    
    fixture = TestBed.createComponent(PlainToCipherComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should encrypt plaintext', () => {
    component.plaintext = 'Hello World';
    component.selected = 'caeser';
    component.parameters = [{label: 'K', description: '', type: '', value: 2}];
    component.encrypt();
    expect(component.ciphertext).toBeTruthy();
  });

  it('should return selected-input-type class', () => {
    component.selectedInputType = 'json';
    const result = component.getInputTypeClass('json');
    expect(result).toBe('selected-input-type');
  });

  it('should return option-box class', () => {
    component.selectedInputType = 'text';
    const result = component.getInputTypeClass('json');
    expect(result).toBe('option-box');
  });

  it('should select input type and create JSON template', () => {
    component.plaintext = '{"name": "John", "age": 30}';
    component.selectInputType('json');
    expect(component.selectedInputType).toBe('json');
    expect(component.plaintext).toBe('{\n    "name": "John",\n    "age": 30\n}');
  });
});