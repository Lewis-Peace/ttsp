import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../Services/global-variables.service';
import { Router } from '@angular/router';
import { FilesystemService } from '../Services/filesystem.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private globalVariables: GlobalVariablesService,
    private router: Router,
    private filesystemService: FilesystemService
    ) { }

  async ngOnInit() {
    const tutorialfile = await this.filesystemService.checkFile('.tutorial');
    if (tutorialfile || true) {
      this.router.navigate(['tabs', 'tab2']);
    }
  }

  public startTutorial() {
    this.globalVariables.setTutorial(true);
    this.router.navigate(['tabs', 'tab1']);
    this.filesystemService.stopTutorial('.tutorial');
  }

  public start() {
    this.router.navigate(['tabs', 'tab2'])
    this.filesystemService.stopTutorial('.tutorial');
  }

}
