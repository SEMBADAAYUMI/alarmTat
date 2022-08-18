const display = document.getElementById("clock");
const audio = new Audio('./files/belKlakson.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  display.innerText = `${hour} : ${minutes} : ${seconds}`;
}
setInterval(updateTime, 1000);

function setAlarmTime(value) {
  alarmTime = value;
}
function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);
    

    if (timeToAlarm > current) {
      const timeOut = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeOut);
      alert("alarm set");
    }
  }
}

function clearAlarm() {
  audio.pause();
  if(alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert('alarm cleared');
  }
}

// let tanggalTujuan = new Date("Aug 18, 2022 14:26:00").getTime();


// const hitungMundur = setInterval(function () {
//   const sekarang = new Date().getTime();
//   const selisih = tanggalTujuan - sekarang;
//   const hari = ~~(selisih / (1000 * 60 * 60 * 24));
//   const jam = ~~((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const menit = ~~((selisih % (1000 * 60 * 60)) / (1000 * 60));
//   const detik = ~~((selisih % (1000 * 60)) / 1000);
//   const tex = document.getElementById("teks");
//   tex.innerHTML = "waktu anda tinggal : " + hari + " hari " + jam + " jam " + menit + " menit " + detik + " detik lagi";
//   if (selisih < 0) {
//     clearInterval(hitungMundur);
//     alert("waktu habis");
//     tex.innerHTML = "waktu habis";
//   }
// }, 1000);
