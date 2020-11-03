import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department';
const baseUrl = 'http://localhost:4000';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  currentDepartments: Array<Department>
  constructor(private http: HttpClient) { }
  getDepartments(data) {
    return this.http.post(baseUrl + '/releventHouses',data);
  }
  addDepartment(data) {
    return this.http.post(baseUrl + '/add', data)
  }
}
