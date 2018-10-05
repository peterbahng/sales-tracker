import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMarketsComponent } from './compare-markets.component';

describe('CompareMarketsComponent', () => {
  let component: CompareMarketsComponent;
  let fixture: ComponentFixture<CompareMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
