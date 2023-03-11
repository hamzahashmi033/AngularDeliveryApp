import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchTerm = ""
  constructor(activatedRoutes:ActivatedRoute,private Router:Router){
    activatedRoutes.params.subscribe((params)=>{
      if(params.searchTerm){
        this.searchTerm = params.searchTerm
      }
    })
  }
  search(term:string){
    if(term){
      this.Router.navigate(["search/"+term])
    }
  }

}
