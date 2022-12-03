import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  datas = [
    {image: "../../assets/one.jpg",
    avai: "Coming soon",
    place:"MISSISSAUGA",
    name:"Lakeview DXE",
    price: "STARTING FROM $600K",
    date:"Move in 2024"}, 
    {image: "../../assets/one.jpg",
    avai: "Coming soon",
    place: "MIDTOWN TORONTO",
    name: "One Delisle",
    price: "STARTING FROM $900K",
    date: "Move in 2024"} , 
    {image: "../../assets/one.jpg",
    avai: "Coming soon",
    place: "GEORGETOWN",
    name: "McGibbon on Main",
    price: "STARTING FROM $500K",
    date:"Move in 2024"}
  ];

  // moreData: Array<string> = [, , ]
  // price: Array<string> = [, , ]
  // timeAndDate: Array<string> = [, , ]
  
  ngOnInit(): void {
  }

}
