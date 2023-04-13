const FieldID = {
    VERSION: "00",
    // Phiên bản đặc tả QR Code (ID 00)
    // Bắt buộc, 2 ký tự
    // Giá trị: "01". Các giá trị khác được đăng ký dự phòng dành cho các phiên bản trong tương lai
    
    INIT_METHOD: "01",
    // Phương thức khởi tạo (ID 01)
    // Không bắt buộc, 2 ký tự
    // Giá trị:
    // + "11" - QR tĩnh, áp dụng khi nhiều giao dịch dùng một mã QR.
    // + "12" - QR động, áp dụng khi mỗi giao dịch sử dụng một mã QR mới.
    
    // PROVIDER_INFO: "38",
    // Thông tin số hiệu ĐVCNTT (ID 02-51)
    // Bắt buộc, tối đa 99 ký tự
    // Giá trị:
    // + 02-25 được đăng ký bở các tổ chức quốc tế: Visa (02-03), Mastercard (04-05), EMVCo (06-08, dành riêng cho EMVCo), Discover (09-10), Amex (11-12), JCB (13-14), UnionPay (15-16), EMVCo (17-25, dành riêng bởi EMVCo)
    // + 26-51 được sử dụng cho các tổ chức cung ứng dịch vụ khác.
    
    // Mã danh mục ĐVCNTT (ID 52)
    // Bắt buộc, 4 ký tự
    // Tuân theo tiêu chuẩn ISO 18245 và được ấn định bởi tổ chức cung ứng dịch vụ.
    PROVIDER_CATEGORY_CODE: "52",
    
    // Mã tiền tệ (ID 53)
    // Bắt buộc, 3 ký tự
    // Tuân theo tiêu chuẩn ISO 4217, chỉ định mã tiền tệ của giao dịch được hiển thị trên màn hình ứng dụng di động để khách hàng có thể nhận biết mỗi khi số tiền giao dịch được hiển thị hoặc khi khách hàng nhập số tiền vào ứng dụng.
    // Đồng tiền sử dụng trong thanh toán, quyết toán giao dịch tuân thủ theo quy định pháp luật hiện hành.
    // VNĐ được thể hiện bằng giá trị 704
    CURRENCY: "53",
    
    // Số tiền giao dịch (ID 54)
    // Bắt buộc, tối đa 13 ký tự
    TRANSACTION_AMOUNT: "54",
    
    // Chỉ báo về cách thức xác định tiền Tip và Phí giao dịch (ID 55)
    // Không bắt buộc, 2 ký tự
    // Đối tượng dữ liệu cho biết cách thức xác định tiền tip và cách thức thu phí giao dịch (nếu có).
    // Trong trường hợp có hiện diện, chỉ báo về cách thức xác định tiền Tip và Phí giao dịch sẽ bao gồm 1 trong các giá trị "01", "02" hoặc "03".
    // Các giá trị khác được đăng ký dự phòng. Trong đó:
    // + "01" : Khách hàng tự nhập tiền tip.
    // + "02" : ĐVCNTT thu phí cố định (ID "56").
    // + "03" : ĐVCNTT thu phí theo tỷ lệ phần trăm (ID "57")
    TRANSACTION_FEE_TYPE: "55", // Optional
    
    // Giá trị phí cố định (ID 56)
    // Cần phải có trong một số trường hợp, tối đa 13 ký tự
    // Đối tượng dữ liệu xác định việc khách hàng phải trả khoản phí cố định cho mỗi giao dịch (nếu có).
    // Trong trường hợp Chỉ báo về cách thức xác định tiền Tip và Phí giao dịch (ID "55") có giá trị = 02, Giá trị phí cố định (ID "56") sẽ xuất hiện và có giá trị khác 0.
    // Trường hợp ID "55" có giá trị khác 02, ID "56" sẽ không xuất hiện.
    TRANSACTION_FEE: "56",
    
    // Giá trị phí theo tỷ lệ phần trăm (ID 57)
    // Cần phải có trong một số trường hợp, tối đa 5 ký tự
    // Đối tượng dữ liệu xác định việc khách hàng phải trả phí theo tỷ lệ phần trăm trên giá trị giao dịch (nếu có). Trong trường hợp Chỉ báo về cách thức xác định tiền Tip và Phí giao dịch (ID "55") có giá trị = 03, Giá trị phí theo tỷ lệ phần trăm (ID "57") sẽ xuất hiện và có giá trị từ "00.01" đến "99.99. 
    // Giá trị phí theo tỷ lệ phần trăm chỉ bao gồm các ký tự từ số "0" đến "9" và có thể bao gồm 1 ký tự "." để ngăn cách phần thập phân.
    // Trong trường hợp không có số thập phân, ký tự "." vẫn có thể xuất hiện và Giá trị phí tỷ lệ phần trăm không được bao gồm bất kỳ ký tự nào khác.
    // Trong trường hợp ID "55" có giá trị khác 03, ID "57" sẽ không xuất hiện.
    TRANSACTION_FEE_IN_PERCENTAGE: "57", // Need some case
    
    // Mã quốc gia (ID 58)
    // Bắt buộc, 2 ký tự
    COUNTRY_CODE: "58",
    
    // Tên ĐVCNTT (ID 59)
    // Bắt buộc,, tối đa 25 ký tự
    // Thể hiện tên giao dịch của ĐVCNTT, có thể hiển thị cho khách hàng thông qua ứng dụng di động trong quá trình sử dụng.
    PROVIDER_NAME: "59",
    
    // Thành phố (ID 60)
    // Bắt buộc, tối đa 15 ký tự
    // Thành phố của ĐVCNTT chỉ định địa điểm vật lý mà ĐVCNTT hoạt động.
    PROVIDER_CITY: "60",
    
    // Mã bưu điện (ID 61)
    // Không bắt buộc, tối đa 10 ký tự
    POSTAL_CODE: "61", // Optional
    
    // Thông tin bổ sung (ID 62)
    // Không bắt buộc, tối đa 99 ký tự
    // Cung cấp các dữ liệu bổ sung hỗ trợ trong các trường hợp khác nhau và phải bao gồm ít nhất một đối tượng dữ liệu.
    ADDITION_DATA: "62", // Optional
    
    // Mã kiểm thử giá trị (ID 63)
    // Bắt buộc, tối đa 4 ký tự
    // Mã kiểm chứng giá trị checksum được tính theo tiêu chuẩn ISO/IEC13239 bằng cách sử dụng đã thức '1021' (hex) và giá trị ban đầu 'FFFF' (hex). 
    // Checksum được tính cho tất cả các đối tượng dữ liệu bao gồm ID, độ dài, giá trị nằm trong QR Code theo đúng thứ tự xuất hiện và bao gồm cả ID, độ dài (không bao gồm giá trị) của mã kiểm chứng giá trị.
    // ID 63 nên là thành phần cuối cùng trong chuỗi dữ liệu QR Code.
    CRC: "63",
    
    // PROVIDER_INFO_IN_OTHER_LANGS: "64", // Optional
    // RFU: "65", // Optional: 65 - 79
    // UNRESERVED: "80" // Optional: 80 - 99
}

const ProviderFieldID = {    
    GUID: '00',
    DATA: '01',
    SERVICE: '02'
}

const ConsumerFieldID = {
    BANK_BIN: '00',
    BANK_NUMBER: '01'
}

const AdditionDataFieldID = {
    // Số hoá đơn/biên lai cung cấp bở ĐVCNTT hoặc do khách hàng nhập vào ứng dụng. (ID 01)
    // Tối đa 25 ký tự
    BILL_NUMBER: '01', 
    
    // Số điện thoại di động có thể do ĐVCNT cung cấp hoặc do khách hàng tự nhập. (ID 02)
    // Tối đa 25 ký tự
    MOBILE_NUMBER: '02',
    
    // Giá trị đặc biệt gắn với một cửa hàng, có thể do ĐVCNTT cung cấp hoặc do khách hàng tự nhập. (ID 03)
    // Tối đa 25 ký tự
    STORE_LABEL: '03',
    
    // Số thẻ khách hàng thân thiết do ĐVCNTT cung cấp hoặc khách hàng tự nhập. (ID 04)
    // Tối đa 25 ký tự
    LOYALTY_NUMBER: '04',
    
    // Giá trị theo quy định của ĐVCNTT/Tổ chức cung ứng dịch vụ để xác định giao dịch. (ID 05)
    // Tối đa 25 ký tự
    REFERENCE_LABEL: '05',
    
    // Mã khách hàng, số điện thoại của khách hàng, số hoá đơn... (ID 06)
    // Tối đa 25 ký tự
    CUSTOMER_LABEL: '06',
    
    // Mã số riêng biệt liên quan đến thiết bị đầu cuối của ĐVCNTT. (ID 07)
    // Tối đa 25 ký tự
    TERMINAL_LABEL: '07',
    
    // Mục đích của giao dịch (ID 08)
    // Giá trị để xác định mục đích của giao dịch như: nạp tiền điện thoại, mua hàng hoá...
    // Tối đa 25 ký tự
    TRANSACTION_PURPOSE: '08',
    
    // Yêu cầu dữ liệu khách hàng bổ sung. (ID 09)
    // Một hoặc nhiều ký tự dưới đây có thể xuất hiện để cho biết dữ liệu tương ứng cần được cung cấp trong quá trình khởi tạo giao dịch:
    // + "A" = Địa chỉ khách hàng
    // + "M" = Số điện thoại khách hàng
    // + "E" = Địa chỉ email của khách hàng
    // Tối đa 03 ký tự
    ADDITION_CONSUMER_DATA_REQUEST: '09'
}

export {FieldID, ProviderFieldID, ConsumerFieldID, AdditionDataFieldID};