// ============================================================
//  SİTE AYARLARI – sadece bu iki satırı değiştirmen yeterli.
// ============================================================
// Uygulama Play'de yayınlanınca mağaza adresini yaz; "Google Play" düğmeleri o zaman çalışır.
// Örnek: "https://play.google.com/store/apps/details?id=com.enginertug.sumrushlive"
const PLAY_URL = "";
// İletişim e-postası (alt bilgideki "İletişim" bağlantısı).
const CONTACT_EMAIL = "engin.ertug.ee@gmail.com";
// ============================================================

document.querySelectorAll(".js-play").forEach((a) => {
  if (!PLAY_URL) return;
  a.href = PLAY_URL;
  a.removeAttribute("aria-disabled");
  a.rel = "noopener";
  const small = a.querySelector(".js-play-small");
  if (small) small.textContent = "HEMEN İNDİR";
});

document.querySelectorAll(".js-mail").forEach((a) => {
  if (CONTACT_EMAIL) a.href = "mailto:" + CONTACT_EMAIL;
  else a.remove();
});

// Keep disabled store buttons from jumping to the top of the page.
document.querySelectorAll('.js-play[aria-disabled="true"]').forEach((a) =>
  a.addEventListener("click", (e) => { if (!PLAY_URL) { e.preventDefault(); document.getElementById("indir").scrollIntoView(); } })
);
