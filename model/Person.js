class Person {
    constructor(_ma, _hoten, _email, _diachi, _loai) {
        this.ma = _ma;
        this.hoten = _hoten;
        this.email = _email;
        this.diachi = _diachi;
        this.loai = _loai;
    }
}

class Student extends Person {
    constructor(_ma, _hoten, _email, _diachi, _loai, _diemtoan, _diemly, _diemhoa,) {
        super(_ma, _hoten, _email, _diachi, _loai);
        this.diemtoan = _diemtoan;
        this.diemhoa = _diemhoa;
        this.diemly = _diemly;
    }

    tinhdiem() {
        return ((this.diemtoan + this.diemhoa + this.diemly) / 3).toFixed(1);
    }
}

class Employee extends Person {
    constructor(_ma, _hoten, _email, _diachi, _loai, _ngaylam, _mucluong) {
        super(_ma, _hoten, _email, _diachi, _loai);
        this.ngaylam = _ngaylam;
        this.mucluong = _mucluong;
    }

    tinhluong() {
        return (this.ngaylam * this.mucluong);
    }
}

class Customer extends Person {
    constructor(_ma, _hoten, _email, _diachi, _loai, _tenct, _trigiahd, _danhgia) {
        super(_ma, _hoten, _email, _diachi, _loai);
        this.tenct = _tenct;
        this.trigiahd = _trigiahd;
        this.danhgia = _danhgia;
    }
}
