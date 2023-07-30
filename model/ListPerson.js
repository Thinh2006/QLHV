class ListPerson {
    arrNV = [];
    constructor() {}

    timNV(ma) {
        for (let i = 0; i < this.arrNV.length; i++) {
            if (this.arrNV[i].ma === ma) {
                return i;
            }
        }
        return -1;
    }

    themNV(nhanvien) {
        this.arrNV.push(nhanvien);
    }

    xoaNV(ma) {
        const index = this.timNV(ma);
        if (index !== -1) {
            this.arrNV.splice(index, 1);
        }
    }

    capnhatNV(nhanvien) {
        const index = this.timNV(nhanvien.ma);
        if (index !== -1) {
            this.arrNV[index] = nhanvien;
        } else {
            alert(`So tai khoan ${nhanvien.ma} khong ton tai`);
        }
    }
}
