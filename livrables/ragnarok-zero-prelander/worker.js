const OFFER_URL = "https://go.gogameai.com/5B8F/2J2I9/";

const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<title>Ragnarok Zero: Global — Claim Your Reward</title>
<meta name="description" content="Ragnarok Zero: Global. Unlock your legendary reward and join the battle now.">
<meta name="robots" content="noindex, nofollow">
<meta property="og:title" content="Ragnarok Zero: Global — Reward Unlocked">
<meta property="og:description" content="Join the battle of Ragnarok Zero and claim your launch reward.">
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
    padding:2px 2px 6px; font-size:11px; color:var(--ink-dim);
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
    text-align:center; gap:clamp(5px,1.6vh,10px);
  }

  .hero-badge{
    font-size:9.5px; letter-spacing:1.5px; color:var(--gold);
    border:1px solid var(--line); padding:3px 10px; border-radius:20px;
    text-transform:uppercase; background:rgba(243,198,95,.06);
  }
  h1{
    font-family:'Georgia',serif; font-weight:900;
    font-size:clamp(21px,6.6vw,30px); line-height:1.05; letter-spacing:.5px;
    background:linear-gradient(180deg,#fff4d6 0%, var(--gold) 55%, var(--gold-2) 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  h1 small{
    display:block; font-size:clamp(9px,2.3vw,12px); letter-spacing:4px; color:var(--ink-dim);
    -webkit-text-fill-color:var(--ink-dim); margin-top:3px; font-family:'Trebuchet MS',sans-serif;
  }

  /* ---------- Video panel (canvas-animated, styled as a trailer player) ---------- */
  .video-frame{
    position:relative;
    width:100%;
    height:clamp(130px, 32vh, 230px);
    border-radius:14px;
    overflow:hidden;
    border:1px solid var(--line);
    box-shadow:0 10px 30px rgba(0,0,0,.5), 0 0 0 1px rgba(243,198,95,.08) inset;
    background:#0a0710;
  }
  .video-frame canvas{
    position:absolute; inset:0; width:100%; height:100%; display:block;
  }
  .video-chrome{
    position:absolute; inset:0; pointer-events:none;
    display:flex; flex-direction:column; justify-content:space-between;
    padding:8px 10px;
  }
  .video-tag{
    align-self:flex-start;
    display:inline-flex; align-items:center; gap:5px;
    background:rgba(7,6,10,.55); backdrop-filter:blur(2px);
    border:1px solid var(--line); color:var(--gold);
    font-size:9px; font-weight:800; letter-spacing:1px; text-transform:uppercase;
    padding:3px 8px; border-radius:6px;
  }
  .video-mute{
    position:absolute; top:8px; right:10px;
    width:22px; height:22px; border-radius:50%;
    background:rgba(7,6,10,.55); border:1px solid var(--line);
    display:flex; align-items:center; justify-content:center; font-size:10px; color:var(--ink-dim);
  }
  .video-play{
    position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
    width:46px; height:46px; border-radius:50%;
    background:rgba(243,198,95,.92); color:#1a0f06;
    display:flex; align-items:center; justify-content:center; font-size:18px;
    box-shadow:0 0 20px rgba(243,198,95,.6);
    transition:opacity .5s ease, transform .5s ease;
  }
  .video-play.hide{opacity:0; transform:translate(-50%,-50%) scale(.7);}
  .video-progress{
    height:3px; width:100%; background:rgba(255,255,255,.15); border-radius:3px; overflow:hidden;
  }
  .video-progress-fill{
    height:100%; width:0%;
    background:linear-gradient(90deg,var(--ember),var(--gold));
    animation:videoProgress 7s linear infinite;
  }
  @keyframes videoProgress{ 0%{width:0%;} 100%{width:100%;} }

  .reward-line{
    display:inline-flex; align-items:center; gap:6px;
    background:linear-gradient(180deg, rgba(62,207,110,.14), rgba(62,207,110,.04));
    border:1px solid rgba(62,207,110,.4);
    border-radius:20px; padding:6px 12px;
    font-size:clamp(10.5px,2.9vw,12.5px); color:var(--ink);
    opacity:0; transform:translateY(6px);
    animation:reveal .6s ease 1.4s forwards;
  }
  @keyframes reveal{ to{opacity:1; transform:translateY(0);} }
  .reward-line b{color:var(--green); font-weight:800;}

  /* ---------- Bottom / CTA ---------- */
  .bottom{flex:0 0 auto; display:flex; flex-direction:column; align-items:center; gap:7px; padding-top:6px;}
  .cta-btn{
    display:block; width:100%; text-decoration:none; text-align:center;
    background:linear-gradient(90deg,#ffd873,var(--gold),var(--ember));
    color:#1a0f06; font-weight:900; font-size:clamp(14px,4vw,17px); letter-spacing:.3px;
    padding:clamp(13px,3.2vh,16px) 16px; border-radius:12px; border:none; cursor:pointer;
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
    <div class="pre-txt">Loading the battle…</div>
  </div>

  <div class="vignette"></div>

  <div class="page">

    <div class="topbar">
      <span class="stars">★★★★★ <span style="color:var(--ink-dim)">4.8</span></span>
      <span class="ribbon">🔥 Global Launch</span>
    </div>

    <div class="center">
      <span class="hero-badge">Limited Edition</span>

      <h1>RAGNAROK ZERO<small>GLOBAL LAUNCH</small></h1>

      <div class="video-frame">
        <canvas id="videoCanvas"></canvas>
        <div class="video-chrome">
          <div class="video-tag">▶ Official Trailer</div>
          <div class="video-progress"><div class="video-progress-fill"></div></div>
        </div>
        <div class="video-mute">🔇</div>
        <div class="video-play" id="videoPlay">▶</div>
      </div>

      <div class="reward-line">🎁 <b>Reward Unlocked:</b> 5,000 Zeny + Legendary Skin</div>
    </div>

    <div class="bottom">
      <a href="#" id="ctaMain" class="cta-btn">⚔ CLAIM MY REWARD</a>
      <div class="cta-sub">Free install · iOS &amp; Android</div>
      <div class="timer" id="timer">⏳ Offer reserved for <b id="timerVal">09:58</b></div>
      <div class="disclaimer">Advertisement for Ragnarok Zero: Global. Clicking redirects you to the official download page. Offer subject to availability by region.</div>
    </div>

  </div>

<script>
(function(){
  // Adjust --vh to handle mobile browser UI bars (iOS Safari etc.)
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

  // Hide the play icon shortly after load to simulate autoplay
  setTimeout(function(){
    var play = document.getElementById('videoPlay');
    if(play) play.classList.add('hide');
  }, 1400);

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

  // ---- Animated "trailer" canvas: clashing runes/swords, embers, lightning flashes ----
  var canvas = document.getElementById('videoCanvas');
  var ctx = canvas.getContext('2d');
  var W, H, dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resizeCanvas(){
    var rect = canvas.parentElement.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  var particles = [];
  function spawnParticle(){
    particles.push({
      x: Math.random()*W,
      y: H + 6,
      r: 1 + Math.random()*2.4,
      vy: 0.5 + Math.random()*1.1,
      vx: (Math.random()-0.5)*0.5,
      life: 0,
      max: 90 + Math.random()*90,
      hue: Math.random() > 0.5 ? '243,198,95' : '255,90,46'
    });
  }

  var t = 0;
  var flashUntil = 0;
  var nextFlash = 90 + Math.random()*120;

  function drawBackground(){
    var g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0, '#1c1420');
    g.addColorStop(1, '#07060a');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,W,H);

    var glow = ctx.createRadialGradient(W*0.5,H*0.55,0, W*0.5,H*0.55, Math.max(W,H)*0.6);
    glow.addColorStop(0, 'rgba(243,198,95,0.18)');
    glow.addColorStop(1, 'rgba(243,198,95,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0,0,W,H);
  }

  function drawClash(){
    var cx = W/2, cy = H/2;
    var pulse = 1 + Math.sin(t*0.08)*0.06;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(pulse, pulse);
    ctx.font = (Math.min(W,H)*0.34) + 'px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowBlur = 22;
    ctx.shadowColor = 'rgba(243,198,95,0.85)';
    ctx.fillStyle = 'rgba(244,234,217,0.92)';
    ctx.fillText('⚔', 0, 2);
    ctx.restore();
  }

  function drawParticles(){
    if(particles.length < 40 && Math.random() < 0.5) spawnParticle();
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
  }

  function drawFlash(){
    if(t > nextFlash && t < nextFlash + 4){
      var a = 1 - (t - nextFlash)/4;
      ctx.fillStyle = 'rgba(255,255,255,'+(a*0.35)+')';
      ctx.fillRect(0,0,W,H);
    }
    if(t > nextFlash + 40){
      nextFlash = t + 90 + Math.random()*140;
    }
  }

  function render(){
    t++;
    drawBackground();
    drawParticles();
    drawClash();
    drawFlash();
    requestAnimationFrame(render);
  }
  render();
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
