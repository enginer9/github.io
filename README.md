# Sum Rush Live – web sitesi

Statik site (derleme gerekmez). İçindekiler:

| Dosya | Ne |
|---|---|
| `index.html` | Tanıtım sayfası |
| `gizlilik-politikasi.html` | Gizlilik politikası (TR + EN) → Play Console ve AdMob'a bu adres verilir |
| `hesap-silme.html` | Hesap silme talimatı → Play Console'daki "hesap silme bağlantısı" |
| `app-ads.txt` | AdMob doğrulaması (sitenin **kök dizininde** olmalı) |
| `assets/site.js` | Play Store adresi ve iletişim e-postası ayarı |

## 1. Yayınlamadan önce doldur

1. `gizlilik-politikasi.html` ve `hesap-silme.html` içinde `[GELİŞTİRİCİ ADI]` ve `[İLETİŞİM E-POSTASI]` yazan her yeri değiştir
   (Not Defteri → Düzen → Değiştir → Tümünü Değiştir).
2. `app-ads.txt` → `pub-XXXXXXXXXXXXXXXX` yerine AdMob **yayıncı kimliğini** yaz
   (AdMob → Ayarlar → Hesap bilgileri → Yayıncı kimliği, `pub-` ile başlar).
3. `assets/site.js` → `CONTACT_EMAIL` satırına e-postanı yaz. `PLAY_URL`'i uygulama yayınlanınca doldurursun.

## 2. GitHub Pages ile ücretsiz yayınla

> ⚠️ `app-ads.txt`'nin sitenin kökünde olması için depo adı **tam olarak** `KULLANICIADIN.github.io` olmalı
> (ör. kullanıcı adın `enginertug` ise depo adı `enginertug.github.io`).

1. github.com'da ücretsiz hesap aç (yoksa).
2. Sağ üst **+** → **New repository** → Repository name: `KULLANICIADIN.github.io` → **Public** → **Create repository**.
3. Açılan sayfada **uploading an existing file** bağlantısına tıkla → bu klasördeki **tüm dosya ve klasörleri**
   (`index.html`, `gizlilik-politikasi.html`, `hesap-silme.html`, `app-ads.txt`, `.nojekyll`, `assets` klasörü) sürükle bırak → **Commit changes**.
4. Depoda **Settings → Pages** → Source: **Deploy from a branch**, Branch: **main / (root)** → **Save**.
5. 1-2 dakika sonra site açılır: `https://KULLANICIADIN.github.io`

Kontrol et:
- `https://KULLANICIADIN.github.io/app-ads.txt` → tek satırlık metin görünmeli
- `https://KULLANICIADIN.github.io/gizlilik-politikasi.html`
- `https://KULLANICIADIN.github.io/hesap-silme.html`

## 3. Adresleri nereye gireceksin

| Yer | Alan | Adres |
|---|---|---|
| Play Console → Mağaza ayarları → İletişim bilgileri | Web sitesi | `https://KULLANICIADIN.github.io` |
| Play Console → Uygulama içeriği → Gizlilik politikası | URL | `…/gizlilik-politikasi.html` |
| Play Console → Uygulama içeriği → Veri güvenliği → Hesap silme | URL | `…/hesap-silme.html` |
| AdMob → Gizlilik ve mesajlaşma → GDPR mesajı | Gizlilik politikası | `…/gizlilik-politikasi.html` |

AdMob, `app-ads.txt`'yi Play'deki "Web sitesi" alanından bulur. Uygulama yayınlandıktan sonra 1-2 gün içinde
AdMob → Uygulamalar → app-ads.txt sekmesinde "Doğrulandı" görünür.

## Değişiklik yapınca

Dosyayı GitHub'da açıp kalem simgesiyle düzenleyebilir ya da yeni halini tekrar yükleyebilirsin; site 1-2 dakikada güncellenir.
Yerelde önizleme: klasörde `npx http-server -p 5173` → tarayıcıda `http://localhost:5173`.
