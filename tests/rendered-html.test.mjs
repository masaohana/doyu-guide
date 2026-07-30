import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Doyukai introduction page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ja">/);
  assert.match(html, /DOYU!｜3分でわかる中小企業家同友会/);
  assert.match(html, /経営者が、/);
  assert.match(html, /ひとりで悩まない/);
  assert.match(html, /よい会社を/);
  assert.match(html, /よい経営者に/);
  assert.match(html, /よい経営環境を/);
  assert.match(html, /自主/);
  assert.match(html, /民主/);
  assert.match(html, /連帯/);
  assert.match(html, /会員一人ひとりが、/);
  assert.match(html, /中同協公式サイト/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("keeps official external links safe and explicit", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /https:\/\/www\.doyu\.jp\/org\/links/);
  assert.match(html, /https:\/\/www\.doyu\.jp\/eventlists/);
  assert.match(html, /target="_blank"/);
  assert.match(html, /rel="noreferrer"/);
  assert.match(html, /非公式な入門ページ/);
});
