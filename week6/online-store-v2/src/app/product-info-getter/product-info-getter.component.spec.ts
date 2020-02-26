import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoGetterComponent } from './product-info-getter.component';

describe('ProductInfoGetterComponent', () => {
  let component: ProductInfoGetterComponent;
  let fixture: ComponentFixture<ProductInfoGetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInfoGetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
