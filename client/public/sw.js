if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>a(e,n),r={module:{uri:n},exports:t,require:o};s[n]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(i(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"7a07a6cb0d8c5d26c0660eba50a3dbfb"},{url:"/_next/static/chunks/69-1efb2dab10ef1a63.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/792-402798ecfbf8a3d5.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/922-e99638ac80f7b049.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(auth)/signin/page-f9adc382b94257d0.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(auth)/signup/page-7ee9a230db3588ca.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(dashboard)/add-transaction/page-67729a65351817b3.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(dashboard)/budget/page-a07d67175cb6e2ab.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(dashboard)/layout-3c39b4422605fba1.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(dashboard)/page-686b4428349e1560.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(dashboard)/profile/page-b982b2ceda178feb.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/(dashboard)/transactions/page-00966d0f8b9ab5ae.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/_not-found-3710f5d36338f001.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/app/layout-5fc48a5db8ae669a.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/fd9d1056-236283d5b1d59cf5.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/main-73bbfeae1185059b.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/main-app-f2940e6d8c0f5ce0.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fa286321ffeda8bb.js",revision:"o5m59-vge4SM9b9BuXkct"},{url:"/_next/static/css/3cbd70ff48da2307.css",revision:"3cbd70ff48da2307"},{url:"/_next/static/css/8658e8465af4e060.css",revision:"8658e8465af4e060"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/o5m59-vge4SM9b9BuXkct/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/o5m59-vge4SM9b9BuXkct/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/add.tsx",revision:"749b5848a8a8e7b571d3a4b873c0388f"},{url:"/back-arrow.tsx",revision:"46c46d5a9696bb26d0da6f36b72d0252"},{url:"/budget.tsx",revision:"1bc9a7413ffda6ec551c6de6ace307d4"},{url:"/home.tsx",revision:"8aa1150d861ae9ae56ec6df07e8e0087"},{url:"/images/icons/icon-128x128.png",revision:"432afe9a0f05b8da753a67aeca3feb50"},{url:"/images/icons/icon-144x144.png",revision:"4a8dd7f749d33cb11c2d41f3c640ca64"},{url:"/images/icons/icon-152x152.png",revision:"7a19f95cabc8f69cf36fa92174e5425c"},{url:"/images/icons/icon-192x192.png",revision:"a18873e4f7446c29c5626ad54a4906ef"},{url:"/images/icons/icon-384x384.png",revision:"b421eeb7dfb0c9e971f951e48fb89a66"},{url:"/images/icons/icon-512x512.png",revision:"ccb661275e9706ebdd4cb7d2d193e404"},{url:"/images/icons/icon-72x72.png",revision:"b986b34a5a1c6806d9cb0d6ebd0c6e56"},{url:"/images/icons/icon-96x96.png",revision:"05bb214bc100be932f30b69797f3e021"},{url:"/logout.tsx",revision:"d1b95e33669c9f541381814365dbd508"},{url:"/manifest.json",revision:"4376908278e7f73ed79623529ba2b087"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/profile.tsx",revision:"8e58fad2280d2eeb09146ab142c375be"},{url:"/settings.tsx",revision:"2271437f8e9b8d8f938037c63911c207"},{url:"/shopping.tsx",revision:"c73439dcd3b4ca84fe7602b04fc3618c"},{url:"/three-dots.tsx",revision:"26b63a99a25ae924bf4edc6945e77c33"},{url:"/transaction.tsx",revision:"9946844b45fd396da39e11bf51a74a3f"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));