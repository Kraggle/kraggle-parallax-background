const a=jQuery;a((()=>{if(!a("parallax-me").length)return;const s=a("<div />",{id:"kpb-scene","data-hover-only":!0});a("#main-content").append(s);[{depth:.1,images:[{name:"background.svg",class:"background"},{name:"mountains.svg",class:"full"}]},{depth:.1,images:[{name:"clouds1.svg",class:"full"}]},{depth:.2,images:[{name:"layer1.svg",class:"full"}]},{depth:.3,images:[{name:"layer2.svg",class:"full"}]},{depth:.4,images:[{name:"clouds2.svg",class:"full"}]},{depth:.5,images:[{name:"layer3.svg",class:"full"}]},{depth:.6,images:[{name:"layer4.svg",class:"full"}]},{depth:.7,images:[{name:"layer5.svg",class:"full"}]},{depth:.8,images:[{name:"layer6.svg",class:"full"}]},{depth:.9,images:[{name:"layer7.svg",class:"full"}]},{depth:1,images:[{name:"layer8.svg",class:"full"}]}].forEach((e=>{const l=a("<div />",{class:"kpb-layer","data-depth":e.depth}).appendTo(s);e.images.forEach((s=>{a("<div />",{class:s.class}).css({backgroundImage:`url(${kpb.url}images/${s.name}?${kpb.version})`}).appendTo(l)}))}));new Parallax(s.get(0))}));