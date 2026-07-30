# DOYU! - 3分でわかる中小企業家同友会

中小企業家同友会を初めて知る方に向けて、「三つの目的」「自主・民主・連帯」「例会での学び」をPOPに紹介する非公式の入門サイトです。

- 入門編: まず3分で同友会の全体像をつかむ
- 深掘りガイド: 理念、同友会運動、例会、人を生かす経営、組織と歴史を詳しく読む
- スマートフォン・パソコン対応

公開URL: <https://masaohana.github.io/doyu-guide/>

## 参考資料

- 『同友会運動の発展のために 第4次改訂版』
- [中小企業家同友会全国協議会 公式サイト](https://www.doyu.jp/)

本サイトは非公式な入門ページです。正式な理念・活動内容は中同協および各地同友会の公式情報をご確認ください。

## 開発

Node.js 22以降が必要です。

```bash
npm install
npm run dev
```

検証:

```bash
npm test
npm run lint
npm run build:pages
```

`npm run build:pages` はGitHub Pages用の静的ファイルを `out/` に生成します。`main` ブランチへの更新時はGitHub Actionsが自動でPagesへ反映します。
