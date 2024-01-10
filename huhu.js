//bai2
let i = 10;
let f = 20.5;
let b = true;
let s = "Hà Nội";

console.log("Giá trị của biến i: " + i);
console.log("Giá trị của biến f: " + f);
console.log("Giá trị của biến b: " + b);
console.log("Giá trị của biến s: " + s);



//bai3
let width = 15;
let height = 19;
let area = width * height;
console.log("Diện tích của hình chữ nhật là: " + area);


//bai4
let confirmation = confirm("Trả lại tâm trí tôi đây");


//bai5
let diemVatLy = parseFloat(prompt("Nhập điểm Toán:"));
let diemHoaHoc = parseFloat(prompt("Nhập điểm Vật lý:"));
let diemSinhHoc = parseFloat(prompt("Nhập điểm Hóa học:"));
let tongDiem = diemVatLy + diemHoaHoc + diemSinhHoc;
let diemTrungBinh = tongDiem / 3;
console.log("Tổng điểm: " + tongDiem);
console.log("Điểm trung bình: " + diemTrungBinh);


//bai6
let doC = parseFloat(prompt("Nhập giá trị độ C:"));
let doF = (doC * 9/5) + 32;
console.log("Giá trị độ F tương ứng: " + doF);




//bai7
let chieuDai = parseFloat(prompt("Nhập chiều dài của hình chữ nhật:"));
let chieuRong = parseFloat(prompt("Nhập chiều rộng của hình chữ nhật:"));
let chuViCN = 2 * (chieuDai + chieuRong);
let dienTichCN = chieuDai * chieuRong;
console.log("Chu vi của hình chữ nhật là: " + chuViCN);
console.log("Diện tích của hình chữ nhật là: " + dienTichCN);



