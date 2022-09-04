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
    this.init();
  }

  /**
   * 初期化処理
   */
     public init() {
      // mockからデータを取得
      const yoteiData = this.getYoteiData();
      // ランダムな数字をもとに重複しないように配列を作成する
      this.notDuplicationRandomArray(yoteiData);
    }

  /**
   * mockからデータを取得
   */
  public getYoteiData() {
    // サーバーからデータを取得
    // this.yoteiChoiceService.getYoteiChoice().subscribe((yoteiChoice: YoteiChoice) => {
    //   this.yotei;
    // });
    return Yotei1Json.yotei;
  }

  /**
   * ランダムな数字を返す
   */
  public getRandomNumber(number: number) {
    const rand = Math.floor(Math.random() * number);
    return rand;
  }

  /**
   * ランダムに配列を並び替え、重複しないような配列を返す
   */
  public notDuplicationRandomArray([...yoteiData]: any) {
    for (let i = yoteiData.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [yoteiData[i], yoteiData[j]] = [yoteiData[j], yoteiData[i]];
    }
    this.yotei = yoteiData;
    return yoteiData;
  }
}
