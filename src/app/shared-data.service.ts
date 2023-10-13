import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubject = new BehaviorSubject<{ primerApellido: string, primerNombre: string }>({ primerApellido: '', primerNombre: '' });
  data$ = this.dataSubject.asObservable();

  setData(data: { primerApellido: string, primerNombre: string }) {
    this.dataSubject.next(data);
  }
}
