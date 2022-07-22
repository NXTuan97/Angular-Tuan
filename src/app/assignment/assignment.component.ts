import {Component} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {IAssignment} from "../interface/assignment.interface";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
})

export class AssignmentComponent {
  data : IAssignment | undefined;
  cityCode = 'Hanoi';

  //Lay du lieu tu API cho vao bien data
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.changeCity();
  }

  changeCity() {
    const url = 'http://api.openweathermap.org/data/2.5/forecast';
    let params = new HttpParams();
    params = params.append('q',this.cityCode);
    params = params.append('appid','09a71427c59d38d6a34f89b47d75975c');
    params = params.append('units','metric');
    this.http.get<IAssignment>(url,{params: params})
      .subscribe(value => {
        this.data = value;
      })
  }
}
