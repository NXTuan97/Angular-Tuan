import {Component,Input} from "@angular/core";
import {IStudent} from "../interface/student.interface";
import {IClassroom} from "../interface/classRoom.interface";
@Component({
  selector:'app-classRoom',
  templateUrl:'./classRoom.component.html'
})
export class classRoomComponet{
  @Input()
  file!: IClassroom;
  className = 'T2204M';
  classStatus = true;
  teacherName = [
    'Trịnh Quang Hòa',
    'Nguyễn Tuân',
    'Đặng Kim Thi'
  ];
  subjectNames = [
    'LBEP',
    'HCJS',
    'AJS',
    'DMS'
  ];
  studentNames = [
    'Nguyen Xuan Tuan',
    'Nguyen Xuan Thức',
    'Nguyen Xuan Tú'
  ];
  studentAge = [18,19,43];
  //Tạo 1 danh sách sinh viên
  studentArray : IStudent[]=[
    {studentName:'Nguyễn Xuân Tuấn',studentAge:18, phoneNumber:'0886636797'},
    {studentName:'Nguyễn Văn Minh',studentAge:14, phoneNumber:'05666615158'},
  ]
  //tạo 1 danh sách lớp
  changeName(){
    this.file.className='T2205P'
  };
  changClassStatus(){
    this.file.classStatus = !this.file.classStatus
  };
}
