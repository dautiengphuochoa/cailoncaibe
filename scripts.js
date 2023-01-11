/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts

//Auto Reload Page
setTimeout(() => {
  document.location.reload();
}, 900000); // 900,000 Milliseconds = 15 Minutes

// Script Table Run
var $el = $(".table-responsive");
function anim() {
  var st = $el.scrollTop();
  var sb = $el.prop("scrollHeight")-$el.innerHeight();
  $el.animate({scrollTop: st<sb/1 ? sb : 0}, 18000, anim);
}
function stop(){
  $el.stop();
}
anim();
$el.hover(stop, anim);

//Gio hien tai
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('giohientai').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
 
//Ngay hien tai
var today = new Date();
var date = today.getDate()+' / '+(today.getMonth()+1)+' / '+today.getFullYear();
document.getElementById("ngayhientai").innerHTML = date;

//Ngay hien tại format yyyy/mm/dd
var thisday = new Date();
var thisdate = today.getFullYear() +'/'+(today.getMonth()+1)+'/'+ today.getDate();

// Script Độ Mặn GSMT - TL Cái Lớn
var DoManThuongLuuCaiLon_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16810&date=2023-01-01');
DoManThuongLuuCaiLon_Href.searchParams.set('date', thisdate);
var New_DoManThuongLuuCaiLon_Href = DoManThuongLuuCaiLon_Href.toString()

let DoManThuongLuuCaiLon = {
  fetchDoManThuongLuuCaiLon: function () {
    fetch(New_DoManThuongLuuCaiLon_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManThuongLuuCaiLon(data));
  },
  displayDoManThuongLuuCaiLon: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManThuongLuuCaiLon").innerHTML = n;
  }

  

}
$(document).ready(function () {
  DoManThuongLuuCaiLon.fetchDoManThuongLuuCaiLon();
});

// Script Mực Nước GSMT - TL Cái Lớn
var MucNuocThuongLuuCaiLon_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16812&date=2023-01-01');
MucNuocThuongLuuCaiLon_Href.searchParams.set('date', thisdate);
var New_MucNuocThuongLuuCaiLon_Href = MucNuocThuongLuuCaiLon_Href.toString()

let MucNuocThuongLuuCaiLon = {
  fetchMucNuocThuongLuuCaiLon: function () {
    fetch(New_MucNuocThuongLuuCaiLon_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocThuongLuuCaiLon(data));
  },
  displayMucNuocThuongLuuCaiLon: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocThuongLuuCaiLon").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocThuongLuuCaiLon.fetchMucNuocThuongLuuCaiLon();
});

// Script Độ mặn KCVH - HL Cái Lớn

var DoManHaLuuCaiLon_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16832&date=2023-01-01');
DoManHaLuuCaiLon_Href.searchParams.set('date', thisdate);
var New_DoManHaLuuCaiLon_Href = DoManHaLuuCaiLon_Href.toString()

let DoManHaLuuCaiLon = {
  fetchDoManHaLuuCaiLon: function () {
    fetch(New_DoManHaLuuCaiLon_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManHaLuuCaiLon(data));
  },
  displayDoManHaLuuCaiLon: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManHaLuuCaiLon").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManHaLuuCaiLon.fetchDoManHaLuuCaiLon();
});

// Script Mực nước KCVH - HL Cái Lớn

var MucNuocHaLuuCaiLon_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16834&date=2023-01-01');
MucNuocHaLuuCaiLon_Href.searchParams.set('date', thisdate);
var New_MucNuocHaLuuCaiLon_Href = MucNuocHaLuuCaiLon_Href.toString()

let MucNuocHaLuuCaiLon = {
  fetchMucNuocHaLuuCaiLon: function () {
    fetch(New_MucNuocHaLuuCaiLon_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocHaLuuCaiLon(data));
  },
  displayMucNuocHaLuuCaiLon: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocHaLuuCaiLon").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocHaLuuCaiLon.fetchMucNuocHaLuuCaiLon();
});

// Script Độ Mặn Đông Yên
var DoManDongYen_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16845&date=2023-01-01');
DoManDongYen_Href.searchParams.set('date', thisdate);
var New_DoManDongYen_Href = DoManDongYen_Href.toString()

let DoManDongYen = {
  fetchDoManDongYen: function () {
    fetch(New_DoManDongYen_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManDongYen(data));
  },
  displayDoManDongYen: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManDongYen").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManDongYen.fetchDoManDongYen();
});

// Script Mực Nước Đông Yên

var MucNuocDongYen_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16847&date=2023-01-01');
MucNuocDongYen_Href.searchParams.set('date', thisdate);
var New_MucNuocDongYen_Href = MucNuocDongYen_Href.toString()

let MucNuocDongYen = {
  fetchMucNuocDongYen: function () {
    fetch(New_MucNuocDongYen_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocDongYen(data));
  },
  displayMucNuocDongYen: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocDongYen").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocDongYen.fetchMucNuocDongYen();
});

// Script Độ Mặn GSMT - Gò Quao
var DoManGoQuao_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16906&date=2023-01-01');
DoManGoQuao_Href.searchParams.set('date', thisdate);
var New_DoManGoQuao_Href = DoManGoQuao_Href.toString()

let DoManGoQuao = {
  fetchDoManGoQuao: function () {
    fetch(New_DoManGoQuao_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManGoQuao(data));
  },
  displayDoManGoQuao: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManGoQuao").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManGoQuao.fetchDoManGoQuao();
});

// Script Mực Nước GSMT - Gò Quao
var MucNuocGoQuao_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16908&date=2023-01-01');
MucNuocGoQuao_Href.searchParams.set('date', thisdate);
var New_MucNuocGoQuao_Href = MucNuocGoQuao_Href.toString()

let MucNuocGoQuao = {
  fetchMucNuocGoQuao: function () {
    fetch(New_MucNuocGoQuao_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocGoQuao(data));
  },
  displayMucNuocGoQuao: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocGoQuao").innerHTML = n;
  }

}
$(document).ready(function () {
    MucNuocGoQuao.fetchMucNuocGoQuao();
});

// Script Độ Mặn KCVH - Cầu Cái Tư
var DoManCauCaiTu_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16922&date=2023-01-01');
DoManCauCaiTu_Href.searchParams.set('date', thisdate);
var New_DoManCauCaiTu_Href = DoManCauCaiTu_Href.toString()

let DoManCauCaiTu = {
  fetchDoManCauCaiTu: function () {
    fetch(New_DoManCauCaiTu_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManCauCaiTu(data));
  },
  displayDoManCauCaiTu: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManCauCaiTu").innerHTML = n;
  }
}
$(document).ready(function () {
  DoManCauCaiTu.fetchDoManCauCaiTu();
});

// Script Mực Nước KCVH - Cầu Cái Tư
var MucNuocCauCaiTu_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16924&date=2023-01-01');
MucNuocCauCaiTu_Href.searchParams.set('date', thisdate);
var New_MucNuocCauCaiTu_Href = MucNuocCauCaiTu_Href.toString()

let MucNuocCauCaiTu = {
  fetchMucNuocCauCaiTu: function () {
    fetch(New_MucNuocCauCaiTu_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocCauCaiTu(data));
  },
  displayMucNuocCauCaiTu: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocCauCaiTu").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocCauCaiTu.fetchMucNuocCauCaiTu();
});

// Script Độ Mặn GSMT - TL Cái Bé
var DoManThuongLuuCaiBe_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16823&date=2023-01-01');
DoManThuongLuuCaiBe_Href.searchParams.set('date', thisdate);
var New_DoManThuongLuuCaiBe_Href = DoManThuongLuuCaiBe_Href.toString()

let DoManThuongLuuCaiBe = {
  fetchDoManThuongLuuCaiBe: function () {
    fetch(New_DoManThuongLuuCaiBe_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManThuongLuuCaiBe(data));
  },
  displayDoManThuongLuuCaiBe: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManThuongLuuCaiBe").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManThuongLuuCaiBe.fetchDoManThuongLuuCaiBe();
});

// Script Mực Nước GSMT - TL Cái Bé
var MucNuocThuongLuuCaiBe_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16825&date=2023-01-01');
MucNuocThuongLuuCaiBe_Href.searchParams.set('date', thisdate);
var New_MucNuocThuongLuuCaiBe_Href = MucNuocThuongLuuCaiBe_Href.toString()

let MucNuocThuongLuuCaiBe = {
  fetchMucNuocThuongLuuCaiBe: function () {
    fetch(New_MucNuocThuongLuuCaiBe_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocThuongLuuCaiBe(data));
  },
  displayMucNuocThuongLuuCaiBe: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocThuongLuuCaiBe").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocThuongLuuCaiBe.fetchMucNuocThuongLuuCaiBe();
});


// Script Độ Mặn KCVH - Trâm Bầu
var DoManTramBau_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16854&date=2023-01-01');
DoManTramBau_Href.searchParams.set('date', thisdate);
var New_DoManTramBau_Href = DoManTramBau_Href.toString()

let DoManTramBau = {
  fetchDoManTramBau: function () {
    fetch(New_DoManTramBau_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManTramBau(data));
  },
  displayDoManTramBau: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManTramBau").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManTramBau.fetchDoManTramBau();
});


// Script Mực Nước KCVH - Trâm Bầu
var MucNuocTramBau_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16856&date=2023-01-01');
MucNuocTramBau_Href.searchParams.set('date', thisdate);
var New_MucNuocTramBau_Href = MucNuocTramBau_Href.toString()

let MucNuocTramBau = {
  fetchMucNuocTramBau: function () {
    fetch(New_MucNuocTramBau_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocTramBau(data));
  },
  displayMucNuocTramBau: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocTramBau").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocTramBau.fetchMucNuocTramBau();
});

// Script Độ Mặn KCVH - Xẻo Quao
var DoManXeoQuao_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16874&date=2023-01-01');
DoManXeoQuao_Href.searchParams.set('date', thisdate);
var New_DoManXeoQuao_Href = DoManXeoQuao_Href.toString()

let DoManXeoQuao = {
  fetchDoManXeoQuao: function () {
    fetch(New_DoManXeoQuao_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManXeoQuao(data));
  },
  displayDoManXeoQuao: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManXeoQuao").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManXeoQuao.fetchDoManXeoQuao();
});


// Script Mực Nước KCVH - Xẻo Quao
var MucNuocXeoQuao_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16876&date=2023-01-01');
MucNuocXeoQuao_Href.searchParams.set('date', thisdate);
var New_MucNuocXeoQuao_Href = MucNuocXeoQuao_Href.toString()

let MucNuocXeoQuao = {
  fetchMucNuocXeoQuao: function () {
    fetch(New_MucNuocXeoQuao_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocXeoQuao(data));
  },
  displayMucNuocXeoQuao: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocXeoQuao").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocXeoQuao.fetchMucNuocXeoQuao();
});

// Script Độ Mặn KCVH - Kim Quy
var DoManKimQuy_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16918&date=2023-01-01');
DoManKimQuy_Href.searchParams.set('date', thisdate);
var New_DoManKimQuy_Href = DoManKimQuy_Href.toString()

let DoManKimQuy = {
  fetchDoManKimQuy: function () {
    fetch(New_DoManKimQuy_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManKimQuy(data));
  },
  displayDoManKimQuy: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManKimQuy").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManKimQuy.fetchDoManKimQuy();
});

// Script Mực Nước KCVH - Kim Quy
var MucNuocKimQuy_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16920&date=2023-01-01');
MucNuocKimQuy_Href.searchParams.set('date', thisdate);
var New_MucNuocKimQuy_Href = MucNuocKimQuy_Href.toString()

let MucNuocKimQuy = {
  fetchMucNuocKimQuy: function () {
    fetch(New_MucNuocKimQuy_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocKimQuy(data));
  },
  displayMucNuocKimQuy: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocKimQuy").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocKimQuy.fetchMucNuocKimQuy();
});


// Script Độ Mặn GSMT - Tiểu Dừa
var DoManTieuDua_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16898&date=2023-01-01');
DoManTieuDua_Href.searchParams.set('date', thisdate);
var New_DoManTieuDua_Href = DoManTieuDua_Href.toString()

let DoManTieuDua = {
  fetchDoManTieuDua: function () {
    fetch(New_DoManTieuDua_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManTieuDua(data));
  },
  displayDoManTieuDua: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManTieuDua").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManTieuDua.fetchDoManTieuDua();
});

// Script Mực Nước GSMT - Tiểu Dừa
var MucNuocTieuDua_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16900&date=2023-01-01');
MucNuocTieuDua_Href.searchParams.set('date', thisdate);
var New_MucNuocTieuDua_Href = MucNuocTieuDua_Href.toString()

let MucNuocTieuDua = {
  fetchMucNuocTieuDua: function () {
    fetch(New_MucNuocTieuDua_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocTieuDua(data));
  },
  displayMucNuocTieuDua: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocTieuDua").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocTieuDua.fetchMucNuocTieuDua();
});

// Script Độ Mặn GSMT - Làng T7 - Xẻo Cạn
var DoManLangT7_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16882&date=2023-01-01');
DoManLangT7_Href.searchParams.set('date', thisdate);
var New_DoManLangT7_Href = DoManLangT7_Href.toString()

let DoManLangT7 = {
  fetchDoManLangT7: function () {
    fetch(New_DoManLangT7_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManLangT7(data));
  },
  displayDoManLangT7: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManLangT7").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManLangT7.fetchDoManLangT7();
});

// Script Mực Nước GSMT - Làng T7 - Xẻo Cạn
var MucNuocLangT7_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16884&date=2023-01-01');
MucNuocLangT7_Href.searchParams.set('date', thisdate);
var New_MucNuocLangT7_Href = MucNuocLangT7_Href.toString()

let MucNuocLangT7 = {
  fetchMucNuocLangT7: function () {
    fetch(New_MucNuocLangT7_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocLangT7(data));
  },
  displayMucNuocLangT7: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocLangT7").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocLangT7.fetchMucNuocLangT7();
});

// Script Độ Mặn GSMT - Ngã 3 Đình
var DoManNga3Dinh_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16914&date=2023-01-01');
DoManNga3Dinh_Href.searchParams.set('date', thisdate);
var New_DoManNga3Dinh_Href = DoManNga3Dinh_Href.toString()

let DoManNga3Dinh = {
  fetchDoManNga3Dinh: function () {
    fetch(New_DoManNga3Dinh_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManNga3Dinh(data));
  },
  displayDoManNga3Dinh: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManNga3Dinh").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManNga3Dinh.fetchDoManNga3Dinh();
});

// Script Mực Nước GSMT - Ngã 3 Đình
var MucNuocNga3Dinh_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16916&date=2023-01-01');
MucNuocNga3Dinh_Href.searchParams.set('date', thisdate);
var New_MucNuocNga3Dinh_Href = MucNuocNga3Dinh_Href.toString()

let MucNuocNga3Dinh = {
  fetchMucNuocNga3Dinh: function () {
    fetch(New_MucNuocNga3Dinh_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocNga3Dinh(data));
  },
  displayMucNuocNga3Dinh: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocNga3Dinh").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocNga3Dinh.fetchMucNuocNga3Dinh();
});

// Script Độ Mặn GSMT - Bắc Hồng Dân
var DoManBacHongDan_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16870&date=2023-01-01');
DoManBacHongDan_Href.searchParams.set('date', thisdate);
var New_DoManBacHongDan_Href = DoManBacHongDan_Href.toString()

let DoManBacHongDan = {
  fetchDoManBacHongDan: function () {
    fetch(New_DoManBacHongDan_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManBacHongDan(data));
  },
  displayDoManBacHongDan: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManBacHongDan").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManBacHongDan.fetchDoManBacHongDan();
});

// Script Mực Nước GSMT - Bắc Hồng Dân
var MucNuocBacHongDan_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16872&date=2023-01-01');
MucNuocBacHongDan_Href.searchParams.set('date', thisdate);
var New_MucNuocBacHongDan_Href = MucNuocBacHongDan_Href.toString()

let MucNuocBacHongDan = {
  fetchMucNuocBacHongDan: function () {
    fetch(New_MucNuocBacHongDan_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocBacHongDan(data));
  },
  displayMucNuocBacHongDan: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocBacHongDan").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocBacHongDan.fetchMucNuocBacHongDan();
});

// Script Độ Mặn GSMT - Vĩnh Thuận
var DoManVinhThuan_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16890&date=2023-01-01');
DoManVinhThuan_Href.searchParams.set('date', thisdate);
var New_DoManVinhThuan_Href = DoManVinhThuan_Href.toString()

let DoManVinhThuan = {
  fetchDoManVinhThuan: function () {
    fetch(New_DoManVinhThuan_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManVinhThuan(data));
  },
  displayDoManVinhThuan: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManVinhThuan").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManVinhThuan.fetchDoManVinhThuan();
});


// Script Mực Nước GSMT - Vĩnh Thuận
var MucNuocVinhThuan_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16892&date=2023-01-01');
MucNuocVinhThuan_Href.searchParams.set('date', thisdate);
var New_MucNuocVinhThuan_Href = MucNuocVinhThuan_Href.toString()

let MucNuocVinhThuan = {
  fetchMucNuocVinhThuan: function () {
    fetch(New_MucNuocVinhThuan_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocVinhThuan(data));
  },
  displayMucNuocVinhThuan: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocVinhThuan").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocVinhThuan.fetchMucNuocVinhThuan();
});

// Script Độ Mặn GSMT - Ngã 3 Chắc Băng Cán Gáo
var DoManNga3ChacBangCanGao_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16862&date=2023-01-01');
DoManNga3ChacBangCanGao_Href.searchParams.set('date', thisdate);
var New_DoManNga3ChacBangCanGao_Href = DoManNga3ChacBangCanGao_Href.toString()

let DoManNga3ChacBangCanGao = {
  fetchDoManNga3ChacBangCanGao: function () {
    fetch(New_DoManNga3ChacBangCanGao_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayDoManNga3ChacBangCanGao(data));
  },
  displayDoManNga3ChacBangCanGao: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("DoManNga3ChacBangCanGao").innerHTML = n;
  }

}
$(document).ready(function () {
  DoManNga3ChacBangCanGao.fetchDoManNga3ChacBangCanGao();
});

// Script Mực Nước GSMT - Ngã 3 Chắc Băng Cán Gáo
var MucNuocNga3ChacBangCanGao_Href = new URL('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16864&date=2023-01-01');
MucNuocNga3ChacBangCanGao_Href.searchParams.set('date', thisdate);
var New_MucNuocNga3ChacBangCanGao_Href = MucNuocNga3ChacBangCanGao_Href.toString()

let MucNuocNga3ChacBangCanGao = {
  fetchMucNuocNga3ChacBangCanGao: function () {
    fetch(New_MucNuocNga3ChacBangCanGao_Href)
      .then((response) => {
        if (!response.ok) {
          alert("API connection failed");
          throw new Error("API connection failed");
        }
        return response.json();
      })
      .then((data) => this.displayMucNuocNga3ChacBangCanGao(data));
  },
  displayMucNuocNga3ChacBangCanGao: function (data) {
    const dataLength = data.length;
    const giatri = data[dataLength - 1].giatri;
    let n = giatri.toFixed(2);
    document.getElementById("MucNuocNga3ChacBangCanGao").innerHTML = n;
  }

}
$(document).ready(function () {
  MucNuocNga3ChacBangCanGao.fetchMucNuocNga3ChacBangCanGao();
});