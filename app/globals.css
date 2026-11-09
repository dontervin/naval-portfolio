@tailwind base;@tailwind components;@tailwind utilities;
html{scroll-behavior:smooth;scroll-padding-top:64px}
body{background:#fff;color:#0B1726}
:focus-visible{outline:2px solid #16A69A;outline-offset:2px}
.rise{animation:rise .7s ease-out both}
@keyframes rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.rise{animation:none}html{scroll-behavior:auto}}
/* scroll reveals (content stays visible if JS is off) */
.js .rv{opacity:0;transition:opacity .8s ease,transform .9s cubic-bezier(.2,.7,.2,1)}
.js .rv-up{transform:translateY(32px)}.js .rv-left{transform:translateX(-36px)}.js .rv-right{transform:translateX(36px)}.js .rv-zoom{transform:scale(.94)}
.js .rv.in{opacity:1;transform:none}
.js .rv .bar{width:0;transition:width .9s .35s cubic-bezier(.2,.7,.2,1)}.js .rv.in .bar{width:4rem}
.bar{width:4rem}
/* hero */
.word{display:inline-block;animation:wordup .8s cubic-bezier(.2,.7,.2,1) both}
@keyframes wordup{from{transform:translateY(110%);opacity:0}}
.draw{stroke-dasharray:1;stroke-dashoffset:1;animation:draw 2.4s ease-out forwards}
@keyframes draw{to{stroke-dashoffset:0}}
.fadein{opacity:0;animation:fi 1s 1.8s forwards}@keyframes fi{to{opacity:1}}
.bob{transform-box:fill-box;transform-origin:center;animation:bob 6s 2.4s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-5px) rotate(-.6deg)}}
.wave1{animation:wv 7s linear infinite}.wave2{animation:wv 11s linear infinite reverse}
@keyframes wv{to{transform:translateX(-100px)}}
.marquee{animation:mq 38s linear infinite}.marquee:hover{animation-play-state:paused}
@keyframes mq{to{transform:translateX(-50%)}}
@media (prefers-reduced-motion:reduce){
 .js .rv,.js .rv .bar{opacity:1!important;transform:none!important;transition:none!important;width:4rem}
 .word,.draw,.fadein,.bob,.wave1,.wave2,.marquee{animation:none!important;opacity:1;stroke-dashoffset:0;transform:none}}
