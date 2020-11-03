import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  myForm: FormGroup
  currentNeighborhood: string
  url: string
  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {
        neighborhood: new FormControl(),
        picture: new FormControl(),
        category: new FormControl(),
        type: new FormControl(),
        city: new FormControl(),
        street: new FormControl(),
        floor: new FormControl(),
        homeNumber: new FormControl(),
        numOfRooms: new FormControl(),
        price: new FormControl(),
        size: new FormControl(),
        details: new FormControl()



      })
  }
  Submit() {
    console.log(this.myForm.value)
    this.departmentService.addDepartment(this.myForm.value).subscribe(res => console.log(res))
  }
  updateCurrentNeighborhood() {
    console.log(" this.neighborhood.value", this.neighborhood.value)
    this.currentNeighborhood = this.neighborhood.value


  }
  get neighborhood(): FormControl {
    return this.myForm.get('neighborhood') as FormControl;
  }

  onSelectFile(event) {

    if (event.target.files && event.target.files[0]) {
      let formData = new FormData();
      formData.append('file', event.target.files[0]);
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: ProgressEvent) => {
        console.log(event)
        this.url = (event.target as FileReader).result as string;

        console.log(this.url)
        this.myForm.get('picture').setValue(this.url)

      }
    }
  }


}
