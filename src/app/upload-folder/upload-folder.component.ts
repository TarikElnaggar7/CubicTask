import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-upload-folder',
  templateUrl: './upload-folder.component.html',
  styleUrls: ['./upload-folder.component.css'],
})
export class UploadFolderComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  @ViewChild('filepicker') ul: ElementRef;

  ngOnInit(): void {}

  onChange(event: any) {
    for (const file of event.target.files) {
      const li = this.renderer.createElement('li');
      li.innerHTML = file.webkitRelativePath;
      this.renderer.appendChild(this.ul.nativeElement, li);
    }
  }
}
