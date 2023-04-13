const DEFAULT_BANKS = [
    {
      "name": "Ngân hàng TMCP Công thương Việt Nam",
      "code": "ICB",
      "bin": "970415",
      "short_name": "VietinBank"
    },
    {
      "name": "Ngân hàng TMCP Ngoại Thương Việt Nam",
      "code": "VCB",
      "bin": "970436",
      "short_name": "Vietcombank"
    },
    {
      "name": "Ngân hàng TMCP Quân đội",
      "code": "MB",
      "bin": "970422",
      "short_name": "MBBank"
    },
    {
      "name": "Ngân hàng TMCP Á Châu",
      "code": "ACB",
      "bin": "970416",
      "short_name": "ACB"
    },
    {
      "name": "Ngân hàng TMCP Việt Nam Thịnh Vượng",
      "code": "VPB",
      "bin": "970432",
      "short_name": "VPBank"
    },
    {
      "name": "Ngân hàng TMCP Tiên Phong",
      "code": "TPB",
      "bin": "970423",
      "short_name": "TPBank"
    },
    {
      "name": "Ngân hàng TMCP Hàng Hải",
      "code": "MSB",
      "bin": "970426",
      "short_name": "MSB"
    },
    {
      "name": "Ngân hàng TMCP Nam Á",
      "code": "NAB",
      "bin": "970428",
      "short_name": "NamABank"
    },
    {
      "name": "Ngân hàng TMCP Bưu Điện Liên Việt",
      "code": "LPB",
      "bin": "970449",
      "short_name": "LienVietPostBank"
    },
    {
      "name": "Ngân hàng TMCP Bản Việt",
      "code": "VCCB",
      "bin": "970454",
      "short_name": "VietCapitalBank"
    },
    {
      "name": "Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
      "code": "BIDV",
      "bin": "970418",
      "short_name": "BIDV"
    },
    {
      "name": "Ngân hàng TMCP Sài Gòn Thương Tín",
      "code": "STB",
      "bin": "970403",
      "short_name": "Sacombank"
    },
    {
      "name": "Ngân hàng TMCP Quốc tế Việt Nam",
      "code": "VIB",
      "bin": "970441",
      "short_name": "VIB"
    },
    {
      "name": "Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh",
      "code": "HDB",
      "bin": "970437",
      "short_name": "HDBank"
    },
    {
      "name": "Ngân hàng TMCP Đông Nam Á",
      "code": "SEAB",
      "bin": "970440",
      "short_name": "SeABank"
    },
    {
      "name": "Ngân hàng Thương mại TNHH MTV Dầu Khí Toàn Cầu",
      "code": "GPB",
      "bin": "970408",
      "short_name": "GPBank"
    },
    {
      "name": "Ngân hàng TMCP Đại Chúng Việt Nam",
      "code": "PVCB",
      "bin": "970412",
      "short_name": "PVcomBank"
    },
    {
      "name": "Ngân hàng TMCP Quốc Dân",
      "code": "NCB",
      "bin": "970419",
      "short_name": "NCB"
    },
    {
      "name": "Ngân hàng TNHH MTV Shinhan Việt Nam",
      "code": "SHBVN",
      "bin": "970424",
      "short_name": "ShinhanBank"
    },
    {
      "name": "Ngân hàng TMCP Sài Gòn",
      "code": "SCB",
      "bin": "970429",
      "short_name": "SCB"
    },
    {
      "name": "Ngân hàng TMCP Xăng dầu Petrolimex",
      "code": "PGB",
      "bin": "970430",
      "short_name": "PGBank"
    },
    {
      "name": "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam",
      "code": "VBA",
      "bin": "970405",
      "short_name": "Agribank"
    },
    {
      "name": "Ngân hàng TMCP Kỹ thương Việt Nam",
      "code": "TCB",
      "bin": "970407",
      "short_name": "Techcombank"
    },
    {
      "name": "Ngân hàng TMCP Sài Gòn Công Thương",
      "code": "SGICB",
      "bin": "970400",
      "short_name": "SaigonBank"
    },
    {
      "name": "Ngân hàng TMCP Đông Á",
      "code": "DOB",
      "bin": "970406",
      "short_name": "DongABank"
    },
    {
      "name": "Ngân hàng TMCP Bắc Á",
      "code": "BAB",
      "bin": "970409",
      "short_name": "BacABank"
    },
    {
      "name": "Ngân hàng TNHH MTV Standard Chartered Bank Việt Nam",
      "code": "SCVN",
      "bin": "970410",
      "short_name": "StandardChartered"
    },
    {
      "name": "Ngân hàng Thương mại TNHH MTV Đại Dương",
      "code": "Oceanbank",
      "bin": "970414",
      "short_name": "Oceanbank"
    },
    {
      "name": "Ngân hàng Liên doanh Việt - Nga",
      "code": "VRB",
      "bin": "970421",
      "short_name": "VRB"
    },
    {
      "name": "Ngân hàng TMCP An Bình",
      "code": "ABB",
      "bin": "970425",
      "short_name": "ABBANK"
    },
    {
      "name": "Ngân hàng TMCP Việt Á",
      "code": "VAB",
      "bin": "970427",
      "short_name": "VietABank"
    },
    {
      "name": "Ngân hàng TMCP Xuất Nhập khẩu Việt Nam",
      "code": "EIB",
      "bin": "970431",
      "short_name": "Eximbank"
    },
    {
      "name": "Ngân hàng TMCP Việt Nam Thương Tín",
      "code": "VIETBANK",
      "bin": "970433",
      "short_name": "VietBank"
    },
    {
      "name": "Ngân hàng TNHH Indovina",
      "code": "IVB",
      "bin": "970434",
      "short_name": "IndovinaBank"
    },
    {
      "name": "Ngân hàng TMCP Bảo Việt",
      "code": "BVB",
      "bin": "970438",
      "short_name": "BaoVietBank"
    },
    {
      "name": "Ngân hàng TNHH MTV Public Việt Nam",
      "code": "PBVN",
      "bin": "970439",
      "short_name": "PublicBank"
    },
    {
      "name": "Ngân hàng TMCP Sài Gòn - Hà Nội",
      "code": "SHB",
      "bin": "970443",
      "short_name": "SHB"
    },
    {
      "name": "Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam",
      "code": "CBB",
      "bin": "970444",
      "short_name": "CBBank"
    },
    {
      "name": "Ngân hàng TMCP Phương Đông",
      "code": "OCB",
      "bin": "970448",
      "short_name": "OCB"
    },
    {
      "name": "Ngân hàng TMCP Kiên Long",
      "code": "KLB",
      "bin": "970452",
      "short_name": "KienLongBank"
    },
    {
      "name": "Ngân hàng TNHH MTV CIMB Việt Nam",
      "code": "CIMB",
      "bin": "422589",
      "short_name": "CIMB"
    },
    {
      "name": "Ngân hàng TNHH MTV HSBC (Việt Nam)",
      "code": "HSBC",
      "bin": "458761",
      "short_name": "HSBC"
    },
    {
      "name": "DBS Bank Ltd - Chi nhánh Thành phố Hồ Chí Minh",
      "code": "DBS",
      "bin": "796500",
      "short_name": "DBSBank"
    },
    {
      "name": "Ngân hàng Nonghyup - Chi nhánh Hà Nội",
      "code": "NHB HN",
      "bin": "801011",
      "short_name": "Nonghyup"
    },
    {
      "id": 13,
      "name": "Ngân hàng TNHH MTV Hong Leong Việt Nam",
      "code": "HLBVN",
      "bin": "970442",
      "short_name": "HongLeong"
    },
    {
      "name": "Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội",
      "code": "IBK - HN",
      "bin": "970455",
      "short_name": "IBK Bank"
    },
    {
      "name": "Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh TP. Hồ Chí Minh",
      "code": "IBK - HCM",
      "bin": "970456",
      "short_name": "IBK Bank"
    },
    {
      "name": "Ngân hàng TNHH MTV Woori Việt Nam",
      "code": "WVN",
      "bin": "970457",
      "short_name": "Woori"
    },
    {
      "name": "Ngân hàng United Overseas - Chi nhánh TP. Hồ Chí Minh",
      "code": "UOB",
      "bin": "970458",
      "short_name": "UnitedOverseas"
    },
    {
      "name": "Ngân hàng Kookmin - Chi nhánh Hà Nội",
      "code": "KBHN",
      "bin": "970462",
      "short_name": "KookminHN"
    },
    {
      "name": "Ngân hàng Kookmin - Chi nhánh Thành phố Hồ Chí Minh",
      "code": "KBHCM",
      "bin": "970463",
      "short_name": "KookminHCM"
    },
    {
      "name": "Ngân hàng Hợp tác xã Việt Nam",
      "code": "COOPBANK",
      "bin": "970446",
      "short_name": "COOPBANK"
    }
];

var BANKS:Array<Bank> = [];

class Bank {
    code: string
    bin: string
    name: string
    shortName: string
    
    constructor(code:string, bin:string, name:string, shortName:string) {
        this.code = code;
        this.bin = bin;
        this.name = name;
        this.shortName = shortName;
    }
}

const getBanks = () => {
    if (BANKS.length <= 0) {
        for(let i=0; i<DEFAULT_BANKS.length; i++) {
            let bankObj = DEFAULT_BANKS[i];
            let bank = new Bank(bankObj.code, bankObj.bin, bankObj.name, bankObj.short_name);
            BANKS.push(bank)
        }
    }
    return BANKS;
}

const getBankByCode = (code:string) => {
    var results = getBanks().filter((bank) => bank.code.toLowerCase() == code.toLowerCase())
    if (results && results.length > 0) return results[0];
    return null
}

const getBankByShortName = (shortName:string) => {
    var results = getBanks().filter((bank) => bank.shortName.toLowerCase() == shortName.toLowerCase())
    if (results && results.length > 0) return results[0];
    return null
}

const getBankByBin = (bin:string) => {
    var results = getBanks().filter((bank) => bank.bin.toLowerCase() == bin.toLowerCase())
    if (results && results.length > 0) return results[0];
    return null
}

const addBanks = (banks: Array<Bank>) => {
    getBanks();
    if (banks && Array.isArray(banks)) {
        BANKS.push(...banks)
    }
}

const addBank = (bank:Bank) => {
    getBanks();
    if (bank) {
        BANKS.push(bank)
    }
}

export {Bank, getBanks, getBankByCode, getBankByShortName, getBankByBin, addBanks, addBank}