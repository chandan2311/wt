import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComputeService {

  calculate(q:number,r:number){

    return q*r;
  }
}
