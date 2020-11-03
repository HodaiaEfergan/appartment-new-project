import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selectedAptType;
  aptType = [
    'פנטהוז', 'דירה', 'דירת גן', 'מחסן', 'יחידת דיור', 'פרטי'
  ]

  constructor(private service: DepartmentService) { }

  ngOnInit() {
  }

  async search() {
    console.log(this.selectedAptType);
    const query = {
      type: this.selectedAptType
    };
    var response = await this.service.getDepartments(query);
    console.log(response);
  }

}
