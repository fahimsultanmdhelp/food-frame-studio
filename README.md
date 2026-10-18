
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#17120e">
<meta name="description" content="FOoD FRaMe sTudIo - Restaurant food advertisements, social media designs and menu design.">
<title>FOoD FRaMe sTudIo | Food Design Studio</title>
<style>
:root{--bg:#17120e;--card:#241c16;--orange:#ff9b45;--white:#fff8f0;--muted:#c6b7a9}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--white);font-family:Arial,sans-serif;line-height:1.6}
header{padding:20px 6%;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;border-bottom:1px solid #493326}
.logo{font-size:20px;font-weight:800;color:var(--orange)}
nav a{color:var(--white);text-decoration:none;margin:0 7px;font-size:14px}
.hero{padding:65px 7% 55px;text-align:center;background:radial-gradient(ellipse at top,#50301b 0%,var(--bg) 68%)}
.tag{color:var(--orange);font-weight:bold;letter-spacing:2px;font-size:12px}
h1{font-size:clamp(36px,8vw,65px);line-height:1.1;margin:18px 0}
h1 span,h2 span{color:var(--orange)}
p{color:var(--muted)}
.hero p{max-width:540px;margin:18px auto 25px}
.btn{display:inline-block;padding:12px 20px;border-radius:8px;background:var(--orange);color:#20140b;text-decoration:none;font-weight:bold;margin:5px}
.btn2{background:transparent;border:1px solid var(--orange);color:var(--white)}
section{padding:48px 7%}
h2{font-size:30px;margin-top:0}
.intro{max-width:620px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:17px}
.card{background:var(--card);border:1px solid #493326;border-radius:14px;overflow:hidden}
.card img{display:block;width:100%;height:190px;object-fit:cover}
.card .content{padding:17px}
.card h3{margin:0 0 8px}
.label{color:var(--orange);font-size:12px;font-weight:bold}
.sample{height:190px;display:flex;align-items:center;justify-content:center;text-align:center;padding:18px;background:linear-gradient(135deg,#653a20,#24140d)}
.sample strong{font-size:27px;line-height:1.2}
.sample span{display:block;color:#ffb66e;font-size:12px;margin-top:10px}
.service{padding:20px;background:var(--card);border-radius:12px;border:1px solid #493326}
.service b{color:var(--orange);font-size:23px}
.contact{text-align:center;background:#241a13}
footer{text-align:center;padding:22px;color:var(--muted);font-size:13px}
a:focus{outline:2px solid var(--orange)}
</style>
</head>
<body>
<header>
  <div class="logo">FOoD FRaMe sTudIo</div>
  <nav>
    <a href="#work">Work</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
<section class="hero">
  <div class="tag">FOOD • DESIGN • CREATIVITY</div>
  <h1>Make Your Food<br><span>Look Delicious.</span></h1>
  <p>Creative food advertisements and social media designs for restaurants, cafes and food businesses.</p>
  <a class="btn" href="#work">Explore My Work</a>
  <a class="btn btn2" href="#contact">Contact Me</a>
</section>

<section id="work">
  <div class="intro">
    <div class="tag">MY PORTFOLIO</div>
    <h2>Featured <span>Designs</span></h2>
    <p>Sample concepts created to showcase my design style. I am building my portfolio and adding new work.</p>
  </div>
  <div class="grid">
    <article class="card">
      <div class="sample"><div><strong>BURGER<br><span>PERFECTION</span></strong><span>FRESH • TASTY • DELICIOUS</span></div></div>
      <div class="content"><div class="label">FOOD AD</div><h3>Burger Advertisement</h3><p>A bold promotional concept for a restaurant.</p></div>
    </article>
    <article class="card">
      <div class="sample" style="background:linear-gradient(135deg,#65471b,#21170d)"><div><strong>ROYAL<br><span>BIRYANI</span></strong><span>AROMATIC & DELICIOUS</span></div></div>
      <div class="content"><div class="label">SOCIAL MEDIA</div><h3>Biryani Promotion</h3><p>A sample concept for food posts and promotions.</p></div>
    </article>
    <article class="card">
      <div class="sample" style="background:linear-gradient(135deg,#31513b,#17251b)"><div><strong>OUR<br><span>MENU</span></strong><span>MADE WITH LOVE</span></div></div>
      <div class="content"><div class="label">MENU DESIGN</div><h3>Restaurant Menu</h3><p>A clean menu design concept for food businesses.</p></div>
    </article>
  </div>
</section>

<section id="services">
  <div class="tag">WHAT I OFFER</div>
  <h2>My <span>Services</span></h2>
  <div class="grid">
    <div class="service"><b>01</b><h3>Food Advertisement</h3><p>Promotional graphics for food products and restaurants.</p></div>
    <div class="service"><b>02</b><h3>Social Media Posts</h3><p>Creative post designs for Instagram and Facebook.</p></div>
    <div class="service"><b>03</b><h3>Restaurant Menu</h3><p>Simple, attractive menu layouts for cafes and restaurants.</p></div>
    <div class="service"><b>04</b><h3>Food Video Ads</h3><p>Short promotional video concepts for social media.</p></div>
    <div class="service"><b>05</b><h3>Background Removal</h3><p>Clean product images for online promotion.</p></div>
  </div>
</section>

<section id="about">
  <div class="tag">ABOUT THE STUDIO</div>
  <h2>Hello, I'm <span>MD FAHIM SULTAN</span></h2>
  <p>Welcome to FOoD FRaMe sTudIo. I am developing my skills in food advertisement and graphic design. My goal is to help food businesses present their products with attractive visuals.</p>
</section>

<section id="contact" class="contact">
  <div class="tag">LET'S WORK TOGETHER</div>
  <h2>Have a project <span>in mind?</span></h2>
  <p>Contact me to discuss your food design project.</p>
  <a class="btn" href="mailto:fahimsultanmd.help@gmail.com?subject=Food%20Design%20Project">Email Me</a>
  <p>Email: fahimsultanmd.help@gmail.com</p>
</section>
</main>

<footer>© 2026 FOoD FRaMe sTudIo. All rights reserved.</footer>
</body>
</html>
