import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdvComponent } from './mdv.component';

describe('MdvComponent', () => {
  let component: MdvComponent;
  let fixture: ComponentFixture<MdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
