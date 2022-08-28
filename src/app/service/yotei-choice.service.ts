import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { YoteiChoice } from 'src/app/interface/yoteiChoice';

@Injectable({
  providedIn: 'root'
})
export class YoteiChoiceService {

  constructor(
    private http: HttpClient
  ) { }

  public getYoteiChoice() {
    const url = 'https://raw.githubusercontent.com/kamoto0427/yotei_choice.json/main/yotei-choice1.json';
    return this.http.get<YoteiChoice>(url);
  }
}
