import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyUrlModalComponent } from './copy-url-modal.component';

describe('CopyUrlModalComponent', () => {
  let component: CopyUrlModalComponent;
  let fixture: ComponentFixture<CopyUrlModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyUrlModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyUrlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
