// 설치(홈 화면 추가)를 위한 최소 서비스 워커. 캐시를 쓰지 않아 업데이트가 바로 반영돼요.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(() => new Response("<meta charset=utf-8><body style='font-family:sans-serif;padding:24px'>인터넷에 연결되어 있지 않아요. 연결 후 다시 열어 주세요.", { headers: { "Content-Type": "text/html; charset=utf-8" } })));
  }
});
