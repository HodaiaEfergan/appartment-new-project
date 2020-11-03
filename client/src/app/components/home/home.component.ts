import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup
  currentNeighborhood: string


  departmentList: Array<Department>



  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        neighborhood: new FormControl(),
        category: new FormControl(),
        type: new FormControl(),
        city: new FormControl(),
        street: new FormControl(),
        numOfRooms: new FormControl(),
        details: new FormControl(),
      })
  }
  updateCurrentNeighborhood() {
    console.log(" this.neighborhood.value", this.neighborhood.value)
    this.currentNeighborhood = this.neighborhood.value


  }
  post() {
    console.log(this.myForm.value);

    var res = this.departmentService.getDepartments(this.myForm.value).subscribe(res => {
      this.departmentList = res as Array<Department>
      console .log("!!!!!!!",res)
      this.departmentService.currentDepartments = this.departmentList
      this.router.navigate(['/solution/'])
    })



  }
  get details(): FormControl {
    return this.myForm.get('details') as FormControl;
  }
  get category(): FormControl {
    return this.myForm.get('category') as FormControl;
  }
  get neighborhood(): FormControl {
    return this.myForm.get('neighborhood') as FormControl;
  }

  get street(): FormControl {
    return this.myForm.get('street') as FormControl;
  }
  get type(): FormControl {
    return this.myForm.get('type') as FormControl;
  }
  get numOfRooms(): FormControl {
    return this.myForm.get('numOfRooms') as FormControl;
  }





  // retrieveTutorials() {
  //   this.tutorialService.getAll()
  //     .subscribe(
  //       data => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }




}
