import { Component, OnInit } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  localData = null;

  ngOnInit(): void {
    this.localData = this.getData();
  }

  onColumnInit(column: IgxColumnComponent) {
    if (column.field == "Sal") {
      column.formatter = (salary => this.formatSalary(salary));
    }
    else if (column.field == "IsActive") {
      column.formatter = (isActive => this.formatIsActive(isActive));
    }
  }
  
  formatSalary(value: number) : string {
    return formatCurrency(value, "en-us", "$");
  }
  
  formatIsActive(isActive: boolean): string {    
    var displayText = "Not Active";    
    if (isActive) {
      displayText = "Active";
    }
    return displayText;
  }
  
  getData() {
    const lastYear = new Date().getFullYear() - 1;
    const employeesData = [
      {
        'FirstName': 'Downs',
        'LastName': 'Holcomb',
        'Country': 'Italy',
        'Age': 35,
        'RegistererDate': new Date(lastYear, 7, 25),
        'IsActive': false,
        'Sal': 50000
      },
      {
        'FirstName': 'Mckenzie',
        'LastName': 'Calderon',
        'Country': 'USA',
        'Age': 26,
        'RegistererDate': new Date(lastYear - 1, 9, 22),
        'IsActive': false,
        'Sal': 70000
      },
      {
        'FirstName': 'Howell',
        'LastName': 'Hawkins',
        'Country': 'Canada',
        'Age': 25,
        'RegistererDate': new Date(lastYear, 8, 8),
        'IsActive': true,
        'Sal': 90000
      },
      {
        'FirstName': 'Sheppard',
        'LastName': 'Nicholson',
        'Country': 'Italy',
        'Age': 49,
        'RegistererDate': new Date(lastYear - 1, 6, 28),
        'IsActive': false,
        'Sal': 30000
      },
      {
        'FirstName': 'Bettye',
        'LastName': 'Trujillo',
        'Country': 'Canada',
        'Age': 37,
        'RegistererDate': new Date(new Date().setDate(-20)),
        'IsActive': false,
        'Sal': 90000
      },
      {
        'FirstName': 'Joyce',
        'LastName': 'Vaughan',
        'Country': 'USA',
        'Age': 48,
        'RegistererDate': new Date(lastYear - 1, 4, 24),
        'IsActive': true,
        'Sal': 80000
      }];
    return employeesData;
  }
}
