import {Component, OnInit,} from '@angular/core';
import {Resource} from '../../Modelo/resource.model';

import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-recursos',
  imports: [
    FormsModule,
  CommonModule
  ],
  templateUrl: './recursos.html',
  styleUrl: './recursos.scss',
})

export class RecursosComponent implements OnInit {
  resources: Resource[] = [];
  filteredResources: Resource[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Cargamos el JSON desde la carpeta assets
    this.http.get<Resource[]>('/assets/recursos.json').subscribe({
      next: (data) => {
        this.resources = data;
        this.filteredResources = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error cargando recursos', err);
        this.isLoading = false;
      }
    });
  }

  filterList(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredResources = this.resources.filter(item =>
      item.title.toLowerCase().includes(term)
    );
  }
}
