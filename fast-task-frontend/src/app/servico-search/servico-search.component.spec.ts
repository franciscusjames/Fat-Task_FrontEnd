import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoSearchComponent } from './servico-search.component';

describe('ServicoSearchComponent', () => {
  let component: ServicoSearchComponent;
  let fixture: ComponentFixture<ServicoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
