import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missing-permission',
  templateUrl: './missing-permission.component.html',
  styleUrls: ['./missing-permission.component.css']
})
export class MissingPermissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Error')
  }

}
