import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "./shared/services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private lsService: LocalStorageService,
  ) { }


  ngOnInit(): void {
    this.lsService.setQuestionsKey();
  }
}
