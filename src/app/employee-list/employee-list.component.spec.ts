import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EmployeeService } from '../employee.service';
//import { EmployeeService } from 'src/app/employee.service.ts';


fdescribe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,HttpClientTestingModule,FormsModule],
      declarations: [ EmployeeListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getOperatorDetail  and return [] ',fakeAsync(()=>{
    fixture = TestBed.createComponent(EmployeeListComponent);
    let component=fixture.debugElement.componentInstance;
    let empService=fixture.debugElement.injector.get(EmployeeService);
    spyOn(empService,"getEmployeeList").and.callFake
    {return of(expect(component.tempOperator).toEqual({ "statusCode":200 }));}
    
    component.getEmployeeList();
    
    expect(component.tempOperator).toEqual({ "statusCode":200 });
    
  })) 

});
