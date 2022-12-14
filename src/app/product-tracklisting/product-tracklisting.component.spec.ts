import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttracklistingComponent } from './product-tracklisting.component';

describe('ProducttracklistingComponent', () => {
  let component: ProducttracklistingComponent;
  let fixture: ComponentFixture<ProducttracklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttracklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttracklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
