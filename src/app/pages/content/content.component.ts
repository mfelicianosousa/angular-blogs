import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

   private id: string|null = "0";
   @Input() photoCover: string = "";
   @Input() contentTitle: string = "";
   @Input() contentDescription: string = "";

   constructor(
    private route: ActivatedRoute){

   }

   ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
        this.id = value.get("id")
    );
    this.setValueToComponent(this.id);
  }

  setValueToComponent(id: string|null){
    const result = dataFake.filter(article => article.id === this.id)[0]

    console.log(result);

    if (!result){

    }
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;



  }


}
