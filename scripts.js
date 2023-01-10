/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts

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
window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// Script Độ Mặn GSMT - TL Cái Lớn
let DoManThuongLuuCaiLon = {
  fetchDoManThuongLuuCaiLon: function () {
    fetch('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16810&date=2023-01-10')
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
let MucNuocThuongLuuCaiLon = {
  fetchMucNuocThuongLuuCaiLon: function () {
    fetch('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16812&date=2023-01-10')
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
let DoManHaLuuCaiLon = {
  fetchDoManHaLuuCaiLon: function () {
    fetch('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16832&date=2023-01-10')
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
let MucNuocHaLuuCaiLon = {
  fetchMucNuocHaLuuCaiLon: function () {
    fetch('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16834&date=2023-01-10')
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
let DoManDongYen = {
  fetchDoManDongYen: function () {
    fetch('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16845&date=2023-01-10')
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
let MucNuocDongYen = {
  fetchMucNuocDongYen: function () {
    fetch('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16847&date=2023-01-10')
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
let DoManGoQuao = {
  fetchDoManGoQuao: function () {
    fetch('http://cailoncaibe.thuyloivietnam.vn/dulieuquantrac/getDataByCommand?command=16906&date=2023-01-10')
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