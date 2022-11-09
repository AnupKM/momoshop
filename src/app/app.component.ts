import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'momoshop';
  tabList = ['Home','Contact','Gallery','About'];
  selectedTab : any;

  navigateTo(selectedTab:any){
    console.log(selectedTab);
    this.selectedTab = selectedTab;
  }

}
