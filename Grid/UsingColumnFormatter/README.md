# UsingColumnFormatter
The IgxColumnComponent Formatter allows you to format the display of column data by providing custom logic for each column, without modifying the underlying bound data values.

*Note: The IgxColumnComponent Formatter is only used to format data when autogenerating columns in the igx-Grid. If defining columns in HTML, you will use pipes or templates to format your data.*

# Sample
```html
<igx-grid [data]="localData" 
          [autoGenerate]="true" 
          height="400px"
          (onColumnInit)="onColumnInit($event)">

</igx-grid>
```

```typescript
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
  ```