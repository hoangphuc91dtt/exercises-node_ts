// Ex 1

interface CD {
  maCD: number;
  tuaCD: string;
  caSy: string;
  soBaiHat: number;
  giaThanh: number;
}

let cd1: CD = {
  maCD: 1,
  tuaCD: "Album 1",
  caSy: "Hồ Quang Hiếu",
  soBaiHat: 10,
  giaThanh: 10000000
};

console.log("Thông tin CD:");
console.log(`Mã CD: ${cd1.maCD}`);
console.log(`Tựa CD: ${cd1.tuaCD}`);
console.log(`Ca sỹ: ${cd1.caSy}`);
console.log(`Số bài hát: ${cd1.soBaiHat}`);
console.log(`Giá thành: ${cd1.giaThanh}`);

// Ex 2
interface CD {
  maCD: number;
  tuaCD: string;
  caSy: string;
  soBaiHat: number;
  giaThanh: number;
}

class DanhSachCD {
  private dsCD: CD[] = [];

  public themCD(cd: CD): boolean {
    if (this.dsCD.findIndex((item) => item.maCD === cd.maCD) !== -1) {
      console.log(`Mã CD ${cd.maCD} đã tồn tại trong danh sách.`);
      return false;
    }

    if (this.dsCD.length >= 10) {
      console.log("Danh sách đã đầy.");
      return false;
    }

    this.dsCD.push(cd);
    console.log(`Thêm CD thành công.`);
    return true;
  }

  public soLuongCD(): number {
    return this.dsCD.length;
  }

  public tongGiaThanh(): number {
    let sum = 0;
    for (let i = 0; i < this.dsCD.length; i++) {
      sum += this.dsCD[i].giaThanh;
    }
    return sum;
  }

  public sapXepGiamDanTheoGiaThanh(): void {
    this.dsCD.sort((a, b) => b.giaThanh - a.giaThanh);
  }

  public sapXepTangDanTheoTuaCD(): void {
    this.dsCD.sort((a, b) => a.tuaCD.localeCompare(b.tuaCD));
  }

  public xuatDanhSach(): void {
    console.log("Danh sách các CD:");
    for (let i = 0; i < this.dsCD.length; i++) {
      console.log(`Mã CD: ${this.dsCD[i].maCD}`);
      console.log(`Tựa CD: ${this.dsCD[i].tuaCD}`);
      console.log(`Ca sỹ: ${this.dsCD[i].caSy}`);
      console.log(`Số bài hát: ${this.dsCD[i].soBaiHat}`);
      console.log(`Giá thành: ${this.dsCD[i].giaThanh}`);
      console.log("--------------------");
    }
  }
}

let ds = new DanhSachCD();

ds.themCD({
  maCD: 1,
  tuaCD: "Album 1",
  caSy: "Ca sỹ A",
  soBaiHat: 10,
  giaThanh: 100000
});
ds.themCD({
  maCD: 2,
  tuaCD: "Album 2",
  caSy: "Tóc Tiên",
  soBaiHat: 12,
  giaThanh: 120000
});
ds.themCD({
  maCD: 3,
  tuaCD: "Album 3",
  caSy: "Jack",
  soBaiHat: 8,
  giaThanh: 80000
});

console.log(`Số lượng CD trong danh sách là ${ds.soLuongCD()}.`);
console.log(`Tổng giá thành của các CD là ${ds.tongGiaThanh()}.`);

ds.sapXepGiamDanTheoGiaThanh();
console.log("Danh sách sau khi sắp xếp giảm dần theo giá thành:");
ds.xuatDanhSach();

ds.sapXepTangDanTheoTuaCD();
console.log("Danh sách sau khi sắp xếp tăng dần theo tựa CD:");
ds.xuatDanhSach();
