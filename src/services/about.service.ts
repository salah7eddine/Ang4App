import {Injectable} from "@angular/core";
/**
 * Created by Admin on 26/02/2018.
 */
@Injectable()
export class AboutService{
  info={
    nom:'Abousaid',
    email:'med@gmail.com',
    tel:645347865
  }
  comments=[
    {date:new Date(),message:'A'},
    {date:new Date(),message:'B'},
    {date:new Date(),message:'C'}
  ]

  addComments(c){
    c.date=new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

  getInfo(){
    return this.info;
  }
}
