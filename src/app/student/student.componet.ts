
import{Component, Input} from "@angular/core";
import {IStudent} from "../interface/student.interface";
import {IClassroom} from "../interface/classRoom.interface";
@Component({
  selector:'app-student',
  // template:'<h1>Day la Componet cua student</h1>'
  templateUrl:'./student.component.html'
})
export class StudentComponet{

  @Input()
  data !: IStudent;

}

