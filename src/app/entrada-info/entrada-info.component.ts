import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'; 
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-entrada-info',
  templateUrl: './entrada-info.component.html',
  styleUrls: ['./entrada-info.component.css']
})
export class EntradaInfoComponent {

  tipoDocumento: string = '';
  numeroDocumento: string = '';
  

  constructor(private userService: UserService, private router: Router, private sharedDataService: SharedDataService) { }



  buscar() {
    let numeroSinComas = this.obtenerNumeroSinComas(this.numeroDocumento);
    
    this.userService.getUserInfo(this.tipoDocumento, numeroSinComas).subscribe(
      data => {
        console.log(data);
        this.sharedDataService.setData(data);
        this.router.navigate(['/resumen']); 
      },
      error => {
        console.error('Hubo un error al obtener la información del usuario:', error);
      }
    );
  }
  
  

  formatoNumero() {
    let num = this.numeroDocumento.replace(/\D/g, ""); // Eliminar caracteres no numéricos
    this.numeroDocumento = parseInt(num, 10).toLocaleString('en-US'); // Convertir a número y formatear con separadores de miles
}
soloNumeros(event: KeyboardEvent) {
  const pattern = /[0-9]/; // Solo números
  let inputChar = String.fromCharCode(event.charCode);
  
  if (!pattern.test(inputChar)) {
      
      event.preventDefault();
  }
}
obtenerNumeroSinComas(numero: string): string {
  return numero.replace(/,/g, '');
}


}
