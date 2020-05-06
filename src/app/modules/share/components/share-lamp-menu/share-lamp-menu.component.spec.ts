import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLampMenuComponent } from './share-lamp-menu.component';

describe('ShareLampMenuComponent', () => {
  let component: ShareLampMenuComponent;
  let fixture: ComponentFixture<ShareLampMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareLampMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareLampMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
