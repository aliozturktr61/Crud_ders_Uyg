***Bu proje React vite projesi için örnek hazırlanmıştır.***
## React_vite Proje Oluşturma Adımları
1- npm create vite klasör_adı
2- npm create vite . terminalin bulunduğu klasöre vite projesi kurar
3- cd klasör ismi
4- npm install
5- npm run dev

## react ile React vite farklılıkları
1- app.js ve index.js yerine app.jsx ve main.jsx geldi
2- proje çalıştırılırken "npm start" yerine "npm run dev" geldi.
3- gereks# Vite Projesi için adımlariz dosyalar yoktur.
4- proje oluşturma ve çalıştırma daha hızlıdır.

# Lokal APİ(Json_server)
- sadece bizim bilg.çalışır
- Back end ihtiyacını geçici olarak karşılar
- API bütü http methotlarını çalıştırır

# kurulum
1- npm install -g json-server kurulum yap
2- ana dizinde db.json adında bir dosya oluştur.
3- çalıştırmak için json-server --watch db.json --port 4000(Bu Proje İçin Kendimiz belirledik) yazılır.


## Axios
--Kurulum
"npm install axios"

-HTTP isteklerine modern çözüm
-Yerleşik deiğil paket indirilir
-fetch isteklerine göre daha az kod gerekli
-Hata ve istek detaylarını ayrıntılı gösterebilir
-Veri göderirken js verisini json verisinine otomatik çevirir.


## UID için kurulum
- npm install uuid
- import {v4 as uuidv4} from "uuid"

## tostifay eklemek için
- npm install --save react-toastify
- Main.jsx import yap

import { ToastContainer} from "react-toastify";
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer/>
  </>,
);# Crud_ders_Uyg

