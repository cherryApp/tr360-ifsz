import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAgComponent } from './product-ag.component';

describe('ProductAgComponent', () => {
  let component: ProductAgComponent;
  let fixture: ComponentFixture<ProductAgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
