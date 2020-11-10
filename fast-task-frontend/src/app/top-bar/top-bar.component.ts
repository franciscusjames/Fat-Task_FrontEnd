import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from '../_services/authentication/authentication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public collapse = true;
  public showMenu: boolean;

  // constructor(private authenticationService: AuthenticationService) { }
  constructor() { }

  public toggleCollapse(): void {
    this.collapse = !this.collapse;
  }

  public selectAndClose(): boolean {
    this.collapse = true;
    return false;
  }

  public ngOnInit(): void {
    // this.authenticationService.currentUser
    //   .subscribe(res => {
    //     if (res) this.showMenu = true;
    //   });
    this.showMenu = true;
  }

  public logout(): void {
    // this.authenticationService.logout();
    this.showMenu = false;
  }


}
