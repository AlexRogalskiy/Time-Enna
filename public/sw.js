if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,t,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/WL0QeCyTO6tG-S0u8LMLq/_buildManifest.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/WL0QeCyTO6tG-S0u8LMLq/_ssgManifest.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/0c428ae2.c7ffa01e090e8eb33b95.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/1a48c3c1.65fdc95a5915078f28c8.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/1bfc9850.e01c56b41856a3e7b905.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/252f366e.bc8c10d6b64dce84c72e.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.476a332d0c7001954b1b.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/78e521c3.0894b5e55d9b0e729d83.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/d7eeaac4.e8bad0dc3a88a3f72b93.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.0cf2580a5d204f43b0a9.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/framework.efe182f2d62be1d8151a.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/main-17b9bf81bb05ef39e5ee.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/pages/_app-75c62a947334688e3607.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/pages/_error-d46e83c71a695a3d2fa8.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/pages/index-8e5635ffe869985fae49.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/polyfills-4f4acd756cef4fe6da1b.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/css/6c9cf3c796bcba063939.css",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/_next/static/css/ba8fd4731de3619c082c.css",revision:"WL0QeCyTO6tG-S0u8LMLq"},{url:"/favicon.ico",revision:"382eb960e8fb62ede5327f7a7d9e6852"},{url:"/icons/icon-16x16.png",revision:"b58524dab36ecaee5cf40093fb73c4c5"},{url:"/icons/icon-192x192.png",revision:"aa74f64d9bbf5558a84cca0c0f7527be"},{url:"/icons/icon-256x256.png",revision:"83a4b3bf9aaeb409ba6b4fc3e11f2f2b"},{url:"/icons/icon-32x32.png",revision:"1c253729e1e53babec38cfebfdee5269"},{url:"/icons/icon-384x384.png",revision:"dd9ab8915e253d12fe44f28d8d865ab5"},{url:"/icons/icon-512x512.png",revision:"a10fc69e88f62a223a63dac8fde43c86"},{url:"/icons/logo-256x256.png",revision:"511949f713b9d5ac16f6aa71654339a1"},{url:"/images/logo.svg",revision:"e8297cda084b21ae524da36e313f2c67"},{url:"/manifest.webmanifest",revision:"5f21321c9c42a393a43b9cf6b98daccf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
