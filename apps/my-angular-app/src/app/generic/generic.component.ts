import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.css',
})
export class GenericComponent {}
