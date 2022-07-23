import{Component} from "@angular/core";
import {IPage} from "../interface/page.interface";
import {HttpClient,HttpParams} from "@angular/common/http";
import {IMenu} from "../interface/menu.interface";

@Component({
  selector:'app-Page',
  templateUrl: "page.component.html"
})
export class PageComponent{
  data: IPage | undefined;
  menu: IMenu | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    const url = 'https://foodgroup.herokuapp.com/api/today-special'
    this.http.get<IPage>(url)
      .subscribe(value => {
        this.data = value;
      });
    const url1 = 'https://foodgroup.herokuapp.com/api/menu'
    this.http.get<IMenu>(url1)
      .subscribe(value => {
        this.menu = value;
      });
  }
}
