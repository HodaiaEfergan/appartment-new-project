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
  constructor(private departmentService: DepartmentService,private router:Router) { }

  ngOnInit() {
    this.currentDepartments = this.departmentService.currentDepartments
    console.log(this.currentDepartments)

  }
  printPage() {
  
  window.print()
  }
  addDepartment(){console.log("addDepartment")
    this.router.navigate(['/add-department/'])
  }
}
