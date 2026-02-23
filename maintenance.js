/* maintenance.js */

const MAINTENANCE = false;
// غيرها إلى true لتفعيل وضع الصيانة

const MAINTENANCE_MESSAGE = `
🚧 الموقع تحت الصيانة
سنعود قريباً بإذن الله
شكراً لصبركم ❤️
`;

function showMaintenance(){
  document.body.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#081426;
      color:#fff;
      font-family:system-ui;
      text-align:center;
      padding:20px;">
      
      <div style="
        max-width:520px;
        width:100%;
        background:rgba(255,255,255,.06);
        border:1px solid rgba(255,255,255,.12);
        border-radius:22px;
        padding:30px 20px;
        box-shadow:0 25px 70px rgba(0,0,0,.55);">

        <div style="font-size:38px;font-weight:1000;margin-bottom:12px;">
          سنعود قريباً
        </div>

        <div style="
          font-size:18px;
          font-weight:800;
          line-height:1.9;
          color:rgba(255,255,255,.85);
          white-space:pre-line;">
          ${MAINTENANCE_MESSAGE}
        </div>

      </div>
    </div>
  `;
}

if (MAINTENANCE) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showMaintenance);
  } else {
    showMaintenance();
  }
}
