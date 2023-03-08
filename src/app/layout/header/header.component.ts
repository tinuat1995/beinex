import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isToggled :boolean = true
  constructor() { }

  ngOnInit(): void {

    document.body.classList.add('toggle-sidebar')
  }

  toggle(){
    if(!this.isToggled){
      this.isToggled = true
      document.body.classList.add('toggle-sidebar')
    }
    else{
      this.isToggled = false
      document.body.classList.remove('toggle-sidebar')
    }
  }

}
