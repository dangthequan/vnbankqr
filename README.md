# vnbankqr
> Dùng để tạo ra dữ liệu QR dựa trên TCCS 03-2018/NHNNVN nhằm phục vụ cho phương thức thanh toán bằng mã QR tại Việt Nam.

## Cài đặt
Để cài đặt thư viện, chạy command sau:
```
npm i vnbankqr --save
```

Import vào dự án 

```
import {VNBankQR, Currency, Provider, AdditionData, Transaction, Consumer} from 'vnbankqr'; 
```

## Sử dụng
### Bước 1: Khởi tạo đối tượng Consumer
Consumer lưu trữ các thông tin liên quan đến ngân hàng, tài khoản ngân hàng, số tiền và nội dung chuyển khoản.
```
const bankCodeOrShortName = "TPBank"; // Mã hoặc tên (ngắn) ngân hàng
const bankAccountNumber = "51281989216"; // Số tài khoản ngân hàng
const transferAmount = 5000; // Số tiền
const content = "Ck toi dangthequan"; // Nội dung chuyển khoản

const consumer = new Consumer(bankCodeOrShortName, bankAccountNumber, transferAmount, Currency.VND, content);
```

### Bước 2: Khởi tạo đối tượng Provider
Provider lưu trữ thông tin của một ĐVCNTT (Đơn vị chấp nhận thanh toán).
Đoạn code bên dưới sử dụng các thông tin của ĐVCNTT VietQR.

```
const providerId = "38"; // ID ĐVCNTT
const providerName = "VIETQR"; // Tên ĐVCNTT
const providerGuid = "A000000727"; // Định danh duy nhất toàn cầu của ĐVCNTT
const providerCategory = "5411"; // Mã danh mục ĐVCNTT
const providerService = "QRIBFTTA"; // Dịch vụ chuyển khoản Naspas theo tài khoản
const providerCity = "HANOI"; // Thành phố 
const providerCountry = "VN"; // Mã quốc gia

const qrProvider = new Provider(providerId, providerName, providerGuid, providerCategory, providerService, providerCity, providerCountry);

```

### Bước 3 (Không bắt buộc): Tạo đối tượng AdditionData
Đối tượng additionData dùng để gửi lên thêm các thông tin về mã hoá đơn, số điện thoại của khách hàng, cơ sở kinh doanh...

```
const additionData = new AdditionData({
    // billNumber: "096266", // Bill number
    // mobileNumber: "0988866686",
    // customerLabel: "CH: 01 Ba Dinh, HN",
    // ...
});
```

### Bước 4: Khởi tạo đối tượng Transaction từ các đối tượng Consumer, Provider và AdditionData

```
const transaction = new Transaction(consumer, qrProvider, additionData);
```

### Bước 5: Tạo dữ liệu QR (qrData) từ đối tượng Transaction
```
const vnBankQR = new VNBankQR();
const qrData = vnBankQR.generate(transaction)
```
Nếu sử dụng console.log, ta sẽ thu được giá trị tương tự như sau: 

```
00020101021138550010A000000727012500069704230111512819892160208QRIBFTTA520454115303704540450005802VN5906VIETQR6005HANOI62220818Ck toi dangthequan6304403F
```

Sau khi đã tạo được qrData, hãy dùng các thư viện chuyên dùng để tạo ảnh QR để xuất ảnh QR từ dữ liệu QR.
Bạn có thể thử paste giá trị của qrData vào trang web sau để trải nghiệm thanh toán mã QR mà mình tự build.
https://www.qr-code-generator.com/ 




## Tham khảo
Tiêu chuẩn cơ sở “Đặc tả kỹ thuật QR Code hiển thị từ phía Đơn vị chấp nhận thanh toán tại Việt Nam”, ký hiệu TCCS 03:2018/NHNNVN


## Donate
Nếu bạn cảm thấy hữu ích hãy ủng hộ bằng cách donate theo mã QR bên dưới.

![Mã QR của tôi](myqr.png)