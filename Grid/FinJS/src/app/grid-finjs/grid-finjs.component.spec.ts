import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridFinjsComponent } from './grid-finjs.component';
import { IgxGridModule, IgxDatePickerModule, IgxCheckboxModule } from 'igniteui-angular';

describe('GridFinjsComponent', () => {
  let component: GridFinjsComponent;
  let fixture: ComponentFixture<GridFinjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFinjsComponent ],
      imports: [ FormsModule, BrowserAnimationsModule, IgxGridModule, IgxDatePickerModule, IgxCheckboxModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFinjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
