import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oauth2HandlerComponent } from './oauth2-handler.component';

describe('Oauth2HandlerComponent', () => {
  let component: Oauth2HandlerComponent;
  let fixture: ComponentFixture<Oauth2HandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oauth2HandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oauth2HandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
