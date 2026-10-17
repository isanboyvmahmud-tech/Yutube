# 🎬 YouTube Clone (O'zbek Tilida)

Zamonaviy dizayn, to'liq funksionallik va qulay interfeysga ega bo'lgan **YouTube** veb-sayti kloni.

---

## 🌟 Asosiy Xususiyatlar va Imkoniyatlar

1. **🎨 Haqiqiy YouTube Dizayni (Pixel-Perfect UI)**:
   - **Qorong'u (Dark) va Yorug' (Light)** rejimlar mavjud.
   - O'zbek tili uchun to'liq moslashtirilgan lokalizatsiya.
   - Moslashuvchan yon panel (Sidebar - to'liq va ixcham ko'rinish).
   - Mobil qurilmalar uchun to'liq adaptiv (Responsive) interfeys.

2. **▶️ Video Tomosha Qilish Sahifasi (Watch Page)**:
   - Haqiqiy YouTube video pleyeri (HD formatda ovoz va to'liq boshqaruv bilan).
   - Kanal ma'lumotlari va dinamik **"Obuna bo'lish"** tugmasi.
   - **Like** va **Dislike** reyting tizimi.
   - Videoni ijtimoiy tarmoqlarga ulashish (Telegram, WhatsApp, X, Facebook) va havolani nusxalash.
   - Videoni saqlash (Keyinroq ko'rish).
   - Tavsiyalar paneli (O'ng tarafdagi o'xshash videolar).

3. **💬 Sharhlar Tizimi (Comments Section)**:
   - Real vaqtda izoh qoldirish.
   - Sharhlarga "Like" bosish imkoniyati.
   - Barcha izohlar `localStorage` da avtomatik saqlanib qoladi.

4. **⚡ YouTube Shorts**:
   - Vertikal videolarni tomosha qilish bo'limi.
   - Keyingi va oldingi Shorts videolariga o'tish tugmasi.
   - Shorts uchun alohida like, sharh va ulashish boshqaruvi.

5. **🔍 Qidiruv va Filtrlash**:
   - Jonli qidiruv tizimi (videolar, kanallar va teglar bo'yicha).
   - Ovozli qidiruv (Web Speech API).
   - Kategoriya teglari (Barchasi, Dasturlash, Sun'iy Intellekt, Musiqa, O'yinlar, Yangiliklar, Kino, Sayohat, Podkastlar).

6. **📁 Shaxsiy Kolleksiyalar**:
   - **Tarix (History)**: Ko'rilgan videolar tarixi va tarixni tozalash.
   - **Yoqqan videolar (Liked)**: Siz yoqtirgan videolar to'plami.
   - **Keyinroq ko'rish (Watch Later)**: Saqlangan videolar.
   - **Obunalar (Subscriptions)**: Obuna bo'lingan kanallarning videolari.

7. **➕ Yangi Video Yuklash (Upload Modal)**:
   - O'zingiz xohlagan YouTube video havola yoki ID raqamini kiritib, saytga yangi video qo'shishingiz mumkin!
   - Kiritilgan video darhol asosiy lentada aks etadi va saqlanadi.

---

## 🚀 Qanday Ishga Tushiriladi?

Hech qanday qo'shimcha dastur (Node.js yoki Python) o'rnatish shart emas!

1. Loyiha papkasidagi **`start.bat`** faylini sichqoncha bilan ikki marta bosing.
   *Yoki*
2. To'g'ridan-to'g'ri **`index.html`** faylini istalgan brauzerda (Google Chrome, Microsoft Edge, Mozilla Firefox) oching.

---

## 🛠 Texnologiyalar
- **HTML5** - Semantik va toza struktura.
- **Tailwind CSS & Maxsus CSS3** - Zamonaviy YouTube dizayni va animatsiyalar.
- **Vanilla JavaScript (ES6+)** - Tezkor, xotirani tejovchi va qaramliqsiz (zero-dependency) dasturlash.
- **FontAwesome 6** - Yuqori aniqlikdagi piktogrammalar.
- **LocalStorage API** - Foydalanuvchi ma'lumotlarini brauzerda saqlash.
