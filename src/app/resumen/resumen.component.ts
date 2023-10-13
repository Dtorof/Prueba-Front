import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';  

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  datosUsuario: any;  
  constructor(private router: Router, private sharedDataService: SharedDataService) { 
    this.sharedDataService.data$.subscribe(data => {
      if (data) {
        this.datosUsuario = data; 
      }
    });
  }

  ngOnInit(): void {
  }

  volver() {
    this.router.navigate(['/entrada-info']); 
  }
}
