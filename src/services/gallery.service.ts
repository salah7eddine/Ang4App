import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by Admin on 26/02/2018.
 */
@Injectable()
export class GalleryService{
  constructor(private http:Http){

  }
  search(motCle:string,size:number,page:number){
    return this.http.get("https://pixabay.com/api/?key=6825048-b53e55ee93018fe0c6947593b&q="+motCle
      +"&per_page="+size+"&page="+page)
      .map(resp=>resp.json())

  }
}
