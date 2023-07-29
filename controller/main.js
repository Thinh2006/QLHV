const getelement= (selector) => document.querySelector(selector);

let dsnv = new DSNV();


const laythongtin = (isEdit) => {
    const loai = getelement('#chucvu').value;
    const ma = getelement("#tknv").value;
    const hoten = getelement("#name").value;
    const email = getelement("#email").value;
    const diachi = getelement("#diachi").value;
    const ngaylam = getelement("#datepicker").value;
    const luongcb = getelement("#luongCB").value;
    const diemtoan = +getelement("#diemtoan").value;
    const diemly = +getelement("#diemly").value;
    const diemhoa = +getelement("#diemhoa").value;
    const tenct = getelement("#tenct").value;
    const trigiahd = getelement("#hoadon").value;
    const danhgia = getelement("#danhgia").value;

    const student = new Student (ma, hoten, email,diachi, loai, diemtoan, diemly, diemhoa);

    const employee = new Employee (ma, hoten , email, diachi, loai, ngaylam, luongcb);

    const customer = new Customer (ma, hoten , email, diachi, loai, tenct, trigiahd, danhgia);

    const isValid =
         // Kiem tra chuc vu
        kiemtraCV(loai, "Chọn chức vụ", "#tbChucVu", "Chưa chọn chức vụ") &&
        // Kiem tra tai khoan
        kiemTraChuoi(
            ma,
            1,
            undefined,
            "#tbTKNV",
            "Mã không được bỏ trống"
        ) &&
        kiemTraChuoi(
            ma,
            4,
            6,
            "#tbTKNV",
            "Mã phải từ 4 đến 6 ký số"
        ) &&
        kiemTraTK(ma, "#tbTKNV", "Mã đã tồn tại", isEdit) &&
        kiemTraPattern(
            ma,
            /^[0-9]+$/,
            "#tbTKNV",
            "Mã chỉ bao gồm số"
        ) &&
        // Kiem tra ten
        kiemTraChuoi(
            hoten,
            1,
            undefined,
            "#tbTen",
            "Họ tên không được bỏ trống"
        ) &&
        kiemTraPattern(
            hoten,
            /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
            "#tbTen",
            "Họ tên phải là chữ"
        ) &&
        // Kiem tra email
        kiemTraChuoi(
            email,
            1,
            undefined,
            "#tbEmail",
            "Email không được bỏ trống"
        ) &&
        kiemTraPattern(
            email,
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "#tbEmail",
            "Email không đúng định dạng (vd: ...@gmail.com)"
        ) &&
        // Kiem tra dia chi
        kiemTraChuoi(
            diachi,
            1,
            undefined,
            "#tbdiachi",
            "Địa chỉ không được bỏ trống"
        );

        const isValidNV =
        // Kiem tra ngay lam
        kiemTraChuoi(
            ngaylam,
            1,
            undefined,
            "#tbNgay",
            "Ngày làm không được bỏ trống"
        ) &&
        kiemTraPattern(
            ngaylam,
            /^[0-9]+$/,
            "#tbNgay",
            "Ngày làm chỉ bao gồm số"
        ) &&
        // Kiem tra luong co ban
        kiemtraSo(
            luongcb,
            100000,
            20000000,
            "#tbLuongCB",
            "Lương theo ngày không được bỏ trống",
            "Lương theo ngày phải từ 100 000 - 20 000 000"
        ) &&
        kiemTraPattern(
            luongcb,
            /^[0-9]+$/,
            "#tbLuongCB",
            "Lương theo ngày phải là số"
        ); 

        const isValidHV =
        // Kiem tra diem toan
        kiemtraSo(
            diemtoan,
            0,
            10,
            "#tbdiemtoan",
            "Điểm toán không được bỏ trống",
            "Điểm toán phải từ 0 - 10"
        ) &&
        kiemTraPattern(diemtoan, /^[0-9]+$/, "#tbdiemtoan", "Điểm toán phải là số") &&
        // Kiem tra diem ly
        kiemtraSo(
            diemly,
            0,
            10,
            "#tbdiemly",
            "Điểm lý không được bỏ trống",
            "Điểm lý phải từ 0 - 10"
        ) &&
        kiemTraPattern(diemly, /^[0-9]+$/, "#tbdiemly", "Điểm lý phải là số") &&
        // Kiem tra diem hoa
        kiemtraSo(
            diemhoa,
            0,
            10,
            "#tbdiemhoa",
            "Điểm hóa không được bỏ trống",
            "Điểm hóa phải từ 0 - 10"
        ) &&
        kiemTraPattern(diemhoa, /^[0-9]+$/, "#tbdiemhoa", "Điểm hóa phải là số") 

        const isValidCT =
        // Kiem tra ten cong ty
        kiemTraChuoi(
            tenct,
            1,
            undefined,
            "#tbtenct",
            "Tên công ty không được bỏ trống"
        ) &&
        // Kiem tra tri gia hoa don
        kiemTraChuoi(
            trigiahd,
            1,
            undefined,
            "#tbhoadon",
            "Trị giá hóa đơn không được bỏ trống"
        ) &&
        kiemTraPattern(trigiahd, /^[0-9]+$/, "#tbhoadon", "Trị giá hóa đơn phải là số") &&
        // Kiem tra danh gia
        kiemTraChuoi(
            danhgia,
            1,
            undefined,
            "#tbdanhgia",
            "Đánh giá không được bỏ trống"
        );

    if (loai === 'Nhân viên' && isValid === true && isValidNV === true) {
        return employee;
    } else if (loai === 'Học viên' && isValid === true && isValidHV === true) {
        return student;
    } else if (loai === 'Khách hàng' && isValid === true && isValidCT === true) {
        return customer;
    } else {
        return undefined;
    }
}

getelement("#btnThemNV").onclick = () => {
    var person = laythongtin(false);

    if (person) {
        dsnv.themNV(person);
        hienthi();
        setLocalStorage();
        getelement("#formNV").reset();
        formChange()
    }
};

const hienthi = (arrNV = dsnv.arrNV) => {
    var content = "";

    for (var i = 0; i < arrNV.length; i++) {
        var ps = arrNV[i];

        if (ps.loai === 'Nhân viên') {
            content += `
            <tr>
                <td>${ps.ma}</td>
                <td>${ps.hoten}</td>
                <td>${ps.email}</td>
                <td>${ps.diachi}</td>
                <td>${''}</td>
                <td>${ps.tinhluong()}</td>
                <td>${ps.loai}</td>
                <td>
                    <button class = 'btn btn-danger mb-1' onclick = "removeNV('${
                        ps.ma
                    }')">Delete</button>
                    <button data-toggle="modal" data-target="#myModal" class = 'btn btn-success' onclick = "updateNV('${
                        ps.ma
                    }')">Edit</button>
                </td>
            </tr>`;
        } else if (ps.loai === 'Học viên') {
            content += `
            <tr>
                <td>${ps.ma}</td>
                <td>${ps.hoten}</td>
                <td>${ps.email}</td>
                <td>${ps.diachi}</td>
                <td>${ps.tinhdiem()}</td>
                <td>${''}</td>
                <td>${ps.loai}</td>
                <td>
                    <button class = 'btn btn-danger mb-1' onclick = "removeNV('${
                        ps.ma
                    }')">Delete</button>
                    <button data-toggle="modal" data-target="#myModal" class = 'btn btn-success' onclick = "updateNV('${
                        ps.ma
                    }')">Edit</button>
                </td>
            </tr>`;
        } else if (ps.loai === 'Khách hàng') {
            content += `
            <tr>
                <td>${ps.ma}</td>
                <td>${ps.hoten}</td>
                <td>${ps.email}</td>
                <td>${ps.diachi}</td>
                <td>${''}</td>
                <td>${''}</td>
                <td>${ps.loai}</td>
                <td>
                    <button class = 'btn btn-danger mb-1' onclick = "removeNV('${
                        ps.ma
                    }')">Delete</button>
                    <button data-toggle="modal" data-target="#myModal" class = 'btn btn-success' onclick = "updateNV('${
                        ps.ma
                    }')">Edit</button>
                </td>
            </tr>`;
        }
    }

    getelement("#tableDanhSach").innerHTML = content;
}

const setLocalStorage = () => {
    const data = JSON.stringify(dsnv.arrNV);
    localStorage.setItem("DSNV", data);
}
const getLocalStorage = () => {
    const data = localStorage.getItem("DSNV");
    const parsedata = JSON.parse(data);
    if (parsedata) {
        let arr = [];
        for (let i = 0; i < parsedata.length; i++) {
            let person = parsedata[i];
            if (person.loai === 'Nhân viên'){
                const ps = new Employee(
                    person.ma,
                    person.hoten,
                    person.email,
                    person.diachi,
                    person.loai,
                    person.ngaylam,
                    person.mucluong
                );
                arr.push(ps);
            } else if (person.loai === 'Học viên') {
                const ps = new Student(
                    person.ma,
                    person.hoten,
                    person.email,
                    person.diachi,
                    person.loai,
                    person.diemtoan,
                    person.diemly,
                    person.diemhoa
                );
                arr.push(ps);
            } else if (person.loai === 'Khách hàng') {
                const ps = new Customer(
                    person.ma,
                    person.hoten,
                    person.email,
                    person.diachi,
                    person.loai,
                    person.tenct,
                    person.trigiahd,
                    person.danhgia
                );
                arr.push(ps);
            }
        }

        dsnv.arrNV = arr;
        hienthi();
    }
}

getLocalStorage();

const removeNV = (ma) => {
    dsnv.xoaNV(ma);
    hienthi();
    setLocalStorage();

}

const updateNV = (ma) => {
    const index = dsnv.timNV(ma);
    const ps = dsnv.arrNV[index];


    getelement("#chucvu").value = ps.loai;
    getelement("#tknv").value = ps.ma;
    getelement("#name").value = ps.hoten;
    getelement("#email").value = ps.email;
    getelement("#diachi").value = ps.diachi;
    getelement("#datepicker").value = ps.ngaylam;
    getelement("#luongCB").value = ps.luongcb;
    getelement("#diemtoan").value = ps.diemtoan;
    getelement("#diemly").value = ps.diemly;
    getelement("#diemhoa").value = ps.diemhoa;
    getelement("#tenct").value = ps.tenct;
    getelement("#hoadon").value = ps.trigiahd;
    getelement("#danhgia").value = ps.danhgia;

    formChange()
}

getelement("#btnCapNhat").onclick = () => {
    const person = laythongtin(true);
    dsnv.capnhatNV(person);
    hienthi();
    setLocalStorage();
    getelement("#formNV").reset();
};

const searching = () => {
    let arrSearch = [];
    const searchValue = getelement("#searchName").value.toLowerCase();
    for (let i = 0; i < dsnv.arrNV.length; i++) {
        const loaiNV = dsnv.arrNV[i].loai.toLowerCase();
        if (loaiNV.indexOf(searchValue) !== -1) {
            arrSearch.push(dsnv.arrNV[i]);
        }
    }
    hienthi(arrSearch);
}

getelement("#searchName").addEventListener("keyup", searching);

const formChange = getelement('#chucvu').onchange = () =>{

    if (getelement('#chucvu').value === 'Nhân viên') {
        getelement('#workingDay').style.display = 'block'
        getelement('#salary').style.display = 'block'
    }
    else {
        getelement('#workingDay').style.display = 'none'
        getelement('#salary').style.display = 'none'
    }

    if (getelement('#chucvu').value === 'Học viên') {
        getelement('#mathGrade').style.display = 'block'
        getelement('#chemGrade').style.display = 'block'
        getelement('#physicGrade').style.display = 'block'
    } else {
        getelement('#mathGrade').style.display = 'none'
        getelement('#physicGrade').style.display = 'none'
        getelement('#chemGrade').style.display = 'none'
    }

    if (getelement('#chucvu').value === 'Khách hàng') {
        getelement('#comName').style.display = 'block'
        getelement('#invoice').style.display = 'block'
        getelement('#evaluate').style.display = 'block'
    } else {
        getelement('#comName').style.display = 'none'
        getelement('#invoice').style.display = 'none'
        getelement('#evaluate').style.display = 'none'
    }

}