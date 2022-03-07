import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  @HostBinding('class') className = '';

  toggleDarkMode = new FormControl(false);

  constructor(
    private overlay: OverlayContainer,
    private observer: BreakpointObserver,
    private dialog: MatDialog,
    ){ }


  ngOnInit(): void {
    //Dark mode toggle
    this.toggleDarkMode.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'toggleMode';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  //Dialog pop up box
  showDialog(): void {
    this.dialog.open(DialogComponent,
      {
        width: '500px'
      });
  }
  //SIDEBAR TOGGLE

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 300px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }



}
