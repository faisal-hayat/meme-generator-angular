import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ColorSketchModule } from 'ngx-color/sketch';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [
    CommonModule,
    ColorSketchModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {
  @ViewChild('memeCanvas') myCanvas: ElementRef<HTMLCanvasElement> | any;
  topText: string = '';
  bottomText: string = '';

  //#region constructor
  constructor(private toastrService: ToastrService){
  }
  //#endregion

  //#region life cycle methods
  ngInInit(): void{
  }
  //#endregion

  //#region preview method
  preview(event: any) {
    let canvas = this.myCanvas.nativeElement;
    let ctx = canvas?.getContext('2d');
    
    let render = new FileReader();
    render.readAsDataURL(event.target.files[0]);
    render.onload = function(e){
      const image = new Image();
      image.src = e.target?.result as string;
        image.onload = function(evt){
          // ctx?.drawImage(image);
          ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
        }
    }
  }
  //#endregion

  //#region keyup text
  topTextFunc($event: Event) {
    this.topText = ($event.target as HTMLInputElement).value as string;
  }
  //#endregion
}
