import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePreviewDockMenuComponent } from './image-preview-dock-menu.component';

describe('ImagePreviewDockMenuComponent', () => {
  let component: ImagePreviewDockMenuComponent;
  let fixture: ComponentFixture<ImagePreviewDockMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePreviewDockMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePreviewDockMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
