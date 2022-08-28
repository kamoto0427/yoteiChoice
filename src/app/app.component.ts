import { Component } from '@angular/core';
import { YoteiChoiceService } from 'src/app/service/yotei-choice.service';
import { YoteiChoice } from 'src/app/interface/yoteiChoice';
import { HttpResponse } from '@angular/common/http';
import Yotei1Json from 'src/assets/mock/GET/api/yotei-1.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'yoteiChoice';

  public yotei: any;

  constructor (
    private yoteiChoiceService: YoteiChoiceService,
  ) {}
  ngOnInit () {
    this.feachKamoto();
  }

  /**
   * mockからデータを取得
   */
  public getYoteiData() {
    return Yotei1Json.yotei;
  }

  /**
   * データのlengthを取得
   */
  public getLength() {
    const yotei = this.getYoteiData();
    return yotei.length;
  }

  /**
   * ランダムな数字を返す
   */
  public getRandomNumber(number: number) {
    const rand = Math.floor(Math.random() * number);
    return rand;
  }

  /**
   * 取得した予定JSONデータから任意のデータを1つランダムに取り出す
   */
  public feachKamoto() {
    const length = this.getLength();
    const rand   = this.getRandomNumber(length);
    // mockからデータを取得
    this.yotei = Yotei1Json.yotei[rand];
    // サーバーからデータを取得
    // this.yoteiChoiceService.getYoteiChoice().subscribe((yoteiChoice: YoteiChoice) => {
    //   this.yotei;
    // });
  }
}
