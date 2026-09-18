const OFFER_URL = "https://go.gogameai.com/5B8F/2J2I9/";

const HTML = `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>Ragnarok Zero: Global — Réclame ta récompense</title>
<meta name="description" content="Ragnarok Zero: Global. Débloque ta récompense légendaire et rejoins la bataille dès maintenant.">
<meta name="robots" content="noindex, nofollow">
<meta property="og:title" content="Ragnarok Zero: Global — Récompense débloquée">
<meta property="og:description" content="Rejoins la bataille de Ragnarok Zero et réclame ta récompense de lancement.">
<meta property="og:type" content="website">
<style>
  :root{
    --gold:#f3c65f;
    --gold-2:#d89b34;
    --ember:#ff5a2e;
    --bg-0:#07060a;
    --bg-1:#120e17;
    --ink:#f4ead9;
    --ink-dim:#b9ada0;
    --line:rgba(243,198,95,0.25);
    --green:#3ecf6e;
    --vh:1vh;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html,body{
    background:var(--bg-0);
    color:var(--ink);
    font-family:'Trebuchet MS','Segoe UI',Verdana,sans-serif;
    -webkit-font-smoothing:antialiased;
    overflow:hidden;
    width:100%;
    height:100%;
  }
  body{
    height:calc(var(--vh, 1vh) * 100);
    position:relative;
    display:flex;
    flex-direction:column;
  }

  /* ---------- Preloader ---------- */
  #preloader{
    position:fixed; inset:0; z-index:999;
    background:radial-gradient(circle at 50% 40%, #201526 0%, #07060a 70%);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    transition:opacity .5s ease, visibility .5s ease;
    gap:18px;
  }
  #preloader.hidden{opacity:0; visibility:hidden; pointer-events:none;}
  .pre-logo{
    font-family:'Georgia',serif; font-weight:900; letter-spacing:3px;
    font-size:20px; color:var(--gold);
    text-shadow:0 0 18px rgba(243,198,95,.6);
  }
  .pre-bar{width:180px; height:6px; background:#2a2030; border-radius:6px; overflow:hidden; border:1px solid var(--line);}
  .pre-fill{height:100%; width:0%; background:linear-gradient(90deg,var(--ember),var(--gold)); animation:preload 1s ease forwards;}
  @keyframes preload{ to{width:100%;} }
  .pre-txt{font-size:11px; color:var(--ink-dim); letter-spacing:1px;}

  /* ---------- Background FX ---------- */
  #embers{position:fixed; inset:0; z-index:0; pointer-events:none;}
  .vignette{position:fixed; inset:0; z-index:1; pointer-events:none;
    background:radial-gradient(ellipse at 50% 0%, transparent 35%, rgba(0,0,0,.6) 100%);
  }

  .page{
    position:relative; z-index:2;
    flex:1; min-height:0;
    width:100%; max-width:460px; margin:0 auto;
    display:flex; flex-direction:column;
    padding:calc(8px + env(safe-area-inset-top)) 18px calc(10px + env(safe-area-inset-bottom));
  }

  /* ---------- Top trust bar ---------- */
  .topbar{
    flex:0 0 auto;
    display:flex; align-items:center; justify-content:space-between;
    padding:4px 2px 8px; font-size:11px; color:var(--ink-dim);
  }
  .topbar .stars{color:var(--gold); font-weight:700;}
  .ribbon{
    display:inline-flex; align-items:center; gap:5px;
    background:linear-gradient(90deg,var(--ember),var(--gold-2));
    color:#1a0f06; font-weight:800; font-size:9.5px; letter-spacing:.4px;
    padding:3px 8px; border-radius:20px; text-transform:uppercase;
  }

  /* ---------- Center content ---------- */
  .center{
    flex:1 1 auto; min-height:0;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    text-align:center; gap:clamp(6px,2vh,14px);
  }

  .hero-badge{
    font-size:10px; letter-spacing:1.5px; color:var(--gold);
    border:1px solid var(--line); padding:3px 10px; border-radius:20px;
    text-transform:uppercase; background:rgba(243,198,95,.06);
  }
  h1{
    font-family:'Georgia',serif; font-weight:900;
    font-size:clamp(24px,7.5vw,34px); line-height:1.05; letter-spacing:.5px;
    background:linear-gradient(180deg,#fff4d6 0%, var(--gold) 55%, var(--gold-2) 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  h1 small{
    display:block; font-size:clamp(10px,2.6vw,13px); letter-spacing:5px; color:var(--ink-dim);
    -webkit-text-fill-color:var(--ink-dim); margin-top:4px; font-family:'Trebuchet MS',sans-serif;
  }

  .chest{
    width:clamp(80px,22vw,110px); height:clamp(68px,19vw,94px); position:relative;
    filter:drop-shadow(0 0 24px rgba(243,198,95,.35));
  }
  .chest-glow{
    position:absolute; inset:-24px; border-radius:50%;
    background:radial-gradient(circle, rgba(243,198,95,.35) 0%, transparent 70%);
    animation:pulse 2.2s ease-in-out infinite;
  }
  @keyframes pulse{0%,100%{opacity:.5; transform:scale(.9);} 50%{opacity:1; transform:scale(1.05);}}
  .chest-body{
    position:absolute; left:8px; right:8px; bottom:4px; top:42px;
    background:linear-gradient(180deg,#8a5a24,#5c3813);
    border:3px solid var(--gold-2); border-radius:0 0 12px 12px;
    box-shadow:inset 0 4px 10px rgba(0,0,0,.4);
  }
  .chest-lid{
    position:absolute; left:5px; right:5px; top:10px; height:38px;
    background:linear-gradient(180deg,#c9902f,#8a5a24);
    border:3px solid var(--gold-2); border-radius:12px 12px 5px 5px;
    transform-origin:bottom center;
    animation:lid-pop 1.6s ease-in-out .8s infinite;
  }
  @keyframes lid-pop{
    0%,60%,100%{transform:rotateX(0deg);}
    70%,90%{transform:rotateX(-38deg);}
  }
  .chest-lock{
    position:absolute; left:50%; top:28px; transform:translateX(-50%);
    width:18px; height:18px; border-radius:50%;
    background:var(--gold); box-shadow:0 0 12px var(--gold);
    display:flex; align-items:center; justify-content:center; font-size:10px; color:#1a0f06; z-index:2;
  }
  .chest-burst{
    position:absolute; left:50%; top:4px; transform:translateX(-50%);
    font-size:26px; opacity:0; animation:burst 1.6s ease-in-out .8s infinite;
  }
  @keyframes burst{
    0%,60%{opacity:0; transform:translate(-50%,8px) scale(.6);}
    75%{opacity:1; transform:translate(-50%,-18px) scale(1.15);}
    95%,100%{opacity:0; transform:translate(-50%,-30px) scale(1.3);}
  }

  .reward-card{
    background:linear-gradient(180deg, rgba(62,207,110,.12), rgba(62,207,110,.03));
    border:1px solid rgba(62,207,110,.4);
    border-radius:12px; padding:10px 14px;
    opacity:0; transform:translateY(8px);
    animation:reveal .6s ease 1.6s forwards;
    width:100%;
  }
  @keyframes reveal{ to{opacity:1; transform:translateY(0);} }
  .reward-card .tag{
    display:inline-flex; align-items:center; gap:5px; font-size:10px; font-weight:800;
    color:var(--green); text-transform:uppercase; letter-spacing:.8px; margin-bottom:6px;
  }
  .reward-card .tag::before{content:'✓'; background:var(--green); color:#06210f; width:14px; height:14px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:9px;}
  .reward-list{display:flex; justify-content:center; gap:10px; flex-wrap:wrap; font-size:clamp(10.5px,3vw,12.5px);}
  .reward-list div{display:flex; align-items:center; gap:5px; color:var(--ink); white-space:nowrap;}

  /* ---------- Bottom / CTA ---------- */
  .bottom{flex:0 0 auto; display:flex; flex-direction:column; align-items:center; gap:8px; padding-top:6px;}
  .cta-btn{
    display:block; width:100%; text-decoration:none; text-align:center;
    background:linear-gradient(90deg,#ffd873,var(--gold),var(--ember));
    color:#1a0f06; font-weight:900; font-size:clamp(14px,4vw,17px); letter-spacing:.3px;
    padding:clamp(13px,3.4vh,16px) 16px; border-radius:12px; border:none; cursor:pointer;
    box-shadow:0 10px 24px rgba(255,90,46,.35), inset 0 1px 0 rgba(255,255,255,.5);
    position:relative; overflow:hidden;
    animation:cta-pulse 1.8s ease-in-out infinite;
  }
  @keyframes cta-pulse{0%,100%{transform:scale(1);} 50%{transform:scale(1.02);}}
  .cta-btn::after{
    content:''; position:absolute; top:0; left:-60%; width:40%; height:100%;
    background:linear-gradient(120deg, transparent, rgba(255,255,255,.65), transparent);
    animation:shine 2.4s ease-in-out infinite;
  }
  @keyframes shine{ 0%{left:-60%;} 60%,100%{left:130%;} }

  .cta-sub{font-size:10.5px; color:var(--ink-dim);}

  .timer{
    display:flex; align-items:center; justify-content:center; gap:6px;
    font-size:11px; color:var(--ink-dim);
    border:1px dashed var(--line); border-radius:10px; padding:6px 10px; width:100%;
  }
  .timer b{color:var(--gold); font-variant-numeric:tabular-nums; letter-spacing:.5px;}
  .timer.urgent b{color:var(--ember);}

  .disclaimer{
    font-size:9px; color:#6d6459; text-align:center; line-height:1.4;
    max-width:400px;
  }
</style>
</head>
<body>

  <div id="preloader">
    <div class="pre-logo">RAGNAROK ZERO</div>
    <div class="pre-bar"><div class="pre-fill"></div></div>
    <div class="pre-txt">Chargement de la bataille…</div>
  </div>

  <canvas id="embers"></canvas>
  <div class="vignette"></div>

  <div class="page">

    <div class="topbar">
      <span class="stars">★★★★★ <span style="color:var(--ink-dim)">4.8</span></span>
      <span class="ribbon">🔥 Lancement Global</span>
    </div>

    <div class="center">
      <span class="hero-badge">Édition Limitée</span>

      <h1>RAGNAROK ZERO<small>GLOBAL LAUNCH</small></h1>

      <div class="chest">
        <div class="chest-glow"></div>
        <div class="chest-burst">✨</div>
        <div class="chest-body"></div>
        <div class="chest-lid"></div>
        <div class="chest-lock">🔒</div>
      </div>

      <div class="reward-card">
        <span class="tag">Récompense débloquée</span>
        <div class="reward-list">
          <div>💎 5 000 Zeny</div>
          <div>⚔️ Skin « Freyja »</div>
          <div>🛡️ Accès guilde</div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <a href="#" id="ctaMain" class="cta-btn">⚔ RÉCLAMER MA RÉCOMPENSE</a>
      <div class="cta-sub">Installation gratuite · iOS &amp; Android</div>
      <div class="timer" id="timer">⏳ Offre réservée encore <b id="timerVal">09:58</b></div>
      <div class="disclaimer">Communication publicitaire pour Ragnarok Zero: Global. En cliquant, tu es redirigé vers la page officielle de téléchargement. Offre soumise à disponibilité selon la région.</div>
    </div>

  </div>

<script>
(function(){
  // Ajuste --vh pour gérer les barres d'UI mobiles (iOS Safari etc.)
  function setVh(){
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
  }
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', setVh);

  window.addEventListener('load', function(){
    setTimeout(function(){
      document.getElementById('preloader').classList.add('hidden');
    }, 800);
  });

  var OFFER_URL = "${OFFER_URL}";

  function buildOfferUrl(){
    var qs = window.location.search;
    if(!qs) return OFFER_URL;
    var sep = OFFER_URL.indexOf('?') > -1 ? '&' : '?';
    return OFFER_URL + sep + qs.substring(1);
  }

  var finalUrl = buildOfferUrl();
  var cta = document.getElementById('ctaMain');
  if(cta){
    cta.href = finalUrl;
    cta.addEventListener('click', function(){
      cta.style.transform = 'scale(0.97)';
    });
  }

  // Countdown timer
  var totalSeconds = 9*60 + 58;
  var timerVal = document.getElementById('timerVal');
  var timerBox = document.getElementById('timer');
  function tick(){
    if(totalSeconds <= 0){ totalSeconds = 9*60 + 58; }
    var m = Math.floor(totalSeconds/60);
    var s = totalSeconds%60;
    timerVal.textContent = (m<10?'0':'')+m+':'+(s<10?'0':'')+s;
    if(totalSeconds <= 60){ timerBox.classList.add('urgent'); }
    totalSeconds--;
  }
  tick();
  setInterval(tick, 1000);

  // Embers particle background
  var canvas = document.getElementById('embers');
  var ctx = canvas.getContext('2d');
  var W,H,particles=[];
  function resize(){
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function spawn(){
    particles.push({
      x: Math.random()*W,
      y: H + 10,
      r: 1 + Math.random()*2.2,
      vy: 0.4 + Math.random()*0.9,
      vx: (Math.random()-0.5)*0.4,
      life: 0,
      max: 200 + Math.random()*160,
      hue: Math.random() > 0.5 ? '243,198,95' : '255,90,46'
    });
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    if(particles.length < 50 && Math.random() < 0.55) spawn();
    for(var i=particles.length-1;i>=0;i--){
      var p = particles[i];
      p.y -= p.vy; p.x += p.vx; p.life++;
      var alpha = 1 - p.life/p.max;
      if(alpha <= 0 || p.y < -10){ particles.splice(i,1); continue; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba('+p.hue+','+Math.max(alpha,0)+')';
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba('+p.hue+',0.8)';
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
</script>
</body>
</html>

`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname !== "/" && url.pathname !== "/index.html") {
      return new Response("Not found", { status: 404 });
    }
    return new Response(HTML, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=60",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  },
};
