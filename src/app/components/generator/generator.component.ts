import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ColorSketchModule } from 'ngx-color/sketch';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [
    CommonModule,
    ColorSketchModule
  ],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.css'
})
export class GeneratorComponent {

  //#region constructor
  constructor(private toastrService: ToastrService){
  }
  //#endregion

}
