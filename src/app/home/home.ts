import { Component, OnInit } from '@angular/core';
import { products } from '../models/products';
import { GroupDescriptor, DataResult, process } from '@progress/kendo-data-query';

@Component({
    selector: 'my-app',
    template: `
        <kendo-grid [data]="gridData" [group]="groups">
            <kendo-grid-column field="ProductName">
                <ng-template kendoGridGroupHeaderTemplate>
                  
                </ng-template>
            </kendo-grid-column>
        </kendo-grid>
    `
})

export class Home  {
    public groups = [{ field: "ProductName" }];
   
    public gridData = process([{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18.0000,
        "Discontinued": false
      }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19.0000,
        "Discontinued": true
      }
    ], {
     group: this.groups
    });

}