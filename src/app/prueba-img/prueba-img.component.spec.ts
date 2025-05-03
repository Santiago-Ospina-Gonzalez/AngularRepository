import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaImgComponent } from './prueba-img.component';

describe('PruebaImgComponent', () => {
  let component: PruebaImgComponent;
  let fixture: ComponentFixture<PruebaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
