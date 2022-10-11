import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedLang: string;
  selectedUpload: string;
  showUploadPhotos: boolean = false;
  showUploadFolder: boolean = false;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {}

  onLangChange() {
    if (this.selectedLang == 'ar') {
      this.translate.use('ar');
    } else {
      this.translate.use('en');
    }
  }
  onUploadSelectChange() {
    if (this.selectedUpload == 'photos') {
      this.showUploadPhotos = true;
      this.showUploadFolder = false;
    } else {
      this.showUploadPhotos = false;
      this.showUploadFolder = true;
    }
  }
}
