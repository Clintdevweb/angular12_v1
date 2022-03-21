import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';
@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss'],
})
export class ChaComponent implements OnInit {
  public messageChaoCon: string = '';

  @ViewChild('teo') teo: ConComponent | undefined;
  @ViewChild('hanh') hanh: ConComponent | undefined;
  constructor() {}

  ngOnInit(): void {}

  public chaoCon(name: string): void {
    console.log(name);
    this.messageChaoCon = 'Chao con ' + name;
  }

  public choTien() {
    console.log(123)
    // console.log([this.teo]);
    this.teo?.nhanTienTuCha(10);
    this.hanh?.nhanTienTuCha(20);

    // this.Hanh?
  }
}
