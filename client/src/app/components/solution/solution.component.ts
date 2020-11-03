import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  currentDepartments: Array<Department>
  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.currentDepartments = this.departmentService.currentDepartments
    console.log(this.currentDepartments)

  }
  printPage() {
    var divToPrint = document.getElementById("department-table");
    var newWin = window.open("");
    newWin.document.write("<center><h1>Meng and Mher</h1><p>List of Items</p> </center>");
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.write("<style> td:button1-child(2){display:none;} </style>");
    newWin.print();
    newWin.close();
  }
  addDepartment() {
    console.log("addDepartment")
    this.router.navigate(['/add-department/'])
  }
}
