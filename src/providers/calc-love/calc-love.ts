import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Calc {
  fname: string,
  sname: string,
  percentage: string,
  result: string
}
@Injectable()
export class CalcLoveProvider {

  url = "https://love-calculator.p.mashape.com/getPercentage?fname=John&sname=Alice";

  apiKey = "nqwBTxtm9dmsh9wK9R3OIjikknLVp1OjQKIjsnAzYZneKyyYZ9";

  nome ={ fname : "teste"}


  //  headers = new HttpHeaders({'X-Mashape-Key': '6ZRa8CJRmkmshPKj3S9qqNuC8TnDp14XRACjsndxaBJ3ksksPU'});


  constructor(public http: HttpClient) {
    console.log('Hello CalcLoveProvider Provider');
    this.getCalcular()
    console.log(this.nome.fname);



  }

  getCalcular() {
    return this.http.get<Calc>(this.url, { headers: { 'X-Mashape-Key': this.apiKey } })
      .subscribe(data => {
        this.nome.fname = data.fname

      }


      )



  }
}
