import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment.done',
  templateUrl: './payment.done.component.html',
  styleUrls: ['./payment.done.component.scss'],
})
export class PaymentDoneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  moviePage(){
    this.router.navigate(['list-movies']);
  }

}
