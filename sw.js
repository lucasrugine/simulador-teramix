/* Service worker do Simulador Tera Mix.
   Ao publicar uma versão nova, troque o número em VERSAO. Os celulares
   da equipe baixam a atualização sozinhos na próxima vez que pegarem sinal. */
var VERSAO = "teramix-v2";

var ESSENCIAIS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./favicon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSAO)
      .then(function (c) { return c.addAll(ESSENCIAIS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (chaves) {
      return Promise.all(chaves.map(function (k) {
        if (k !== VERSAO) { return caches.delete(k); }
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") { return; }
  e.respondWith(
    caches.match(e.request).then(function (achou) {
      if (achou) { return achou; }
      return fetch(e.request).then(function (resp) {
        var copia = resp.clone();
        caches.open(VERSAO).then(function (c) {
          try { c.put(e.request, copia); } catch (err) {}
        });
        return resp;
      }).catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
