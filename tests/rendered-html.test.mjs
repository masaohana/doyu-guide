import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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
  assert.match(html, /hero-title-line hero-title-emphasis/);
  assert.match(html, /title-line">教わる会、/);
  assert.match(html, /title-line">ではなく。/);
  assert.match(html, /title-line title-accent">学び合う会。/);
  assert.match(html, /よい会社を/);
  assert.match(html, /よい経営者に/);
  assert.match(html, /よい経営環境を/);
  assert.match(html, /自主/);
  assert.match(html, /民主/);
  assert.match(html, /連帯/);
  assert.match(html, /title-line">力を合わせて。/);
  assert.match(html, /会員一人ひとりが、/);
  assert.match(html, /class="phrase">先生であり、/);
  assert.match(html, /class="phrase">生徒である。/);
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

test("renders the detailed guide with progressive learning sections", async () => {
  const response = await render("/guide");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /深掘りガイド｜DOYU!/);
  assert.match(html, /理念の3層/);
  assert.match(html, /同友会運動とは/);
  assert.match(html, /例会の学び/);
  assert.match(html, /人を生かす経営/);
  assert.match(html, /組織づくり/);
  assert.match(html, /理念の歩み/);
  assert.match(html, /1957/);
  assert.match(html, /1990/);
});

test("includes a site-specific social preview image", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /property="og:image"/);
  assert.match(
    html,
    /https:\/\/masaohana\.github\.io\/doyu-guide\/og\.png/,
  );
  assert.match(html, /summary_large_image/);
});
