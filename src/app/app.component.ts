import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { ColorSketchModule } from 'ngx-color/sketch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    GeneratorComponent,
    ColorSketchModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meme-generator';
  //#region  constructor
  constructor(private toastrService: ToastrService){
  }
  //#endregion
}
