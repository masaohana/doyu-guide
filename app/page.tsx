import Link from "next/link";

const purposes = [
  {
    number: "01",
    title: "よい会社を\nつくろう",
    color: "blue",
    text: "理念をもち、社員が生きがいを感じ、どんな変化にも負けない会社へ。",
    tag: "会社を磨く",
  },
  {
    number: "02",
    title: "よい経営者に\nなろう",
    color: "coral",
    text: "互いの経験に学び、経営者としての人間性・社会性・科学性を高める。",
    tag: "自分を磨く",
  },
  {
    number: "03",
    title: "よい経営環境を\nつくろう",
    color: "green",
    text: "仲間や他団体と力を合わせ、中小企業の努力が報われる環境をつくる。",
    tag: "地域を磨く",
  },
];

const values = [
  {
    title: "自主",
    reading: "じしゅ",
    mark: "自分から",
    text: "誰かに言われて動くのではなく、一人ひとりの意思と参加を大切にする。",
  },
  {
    title: "民主",
    reading: "みんしゅ",
    mark: "みんなで",
    text: "会員の声をもとに運営し、違う意見にも耳を傾け、対話で深めていく。",
  },
  {
    title: "連帯",
    reading: "れんたい",
    mark: "力を合わせて",
    text: "信頼を土台に、会の内外で手を取り合い、共通の課題に向き合う。",
  },
];

const steps = [
  {
    number: "1",
    title: "聴く",
    text: "一人の経営者が、成功も失敗も含めて自分の経営体験を話す。",
  },
  {
    number: "2",
    title: "深める",
    text: "グループ討論で、自分の経験や悩みと重ねながら本質を考える。",
  },
  {
    number: "3",
    title: "やってみる",
    text: "学びを自社に持ち帰り、経営や組織づくりの実践につなげる。",
  },
  {
    number: "4",
    title: "確かめる",
    text: "実践をまた仲間と共有し、次の学びと会社の変化へつなげる。",
  },
];

const questions = [
  {
    question: "異業種交流会なの？",
    answer:
      "交流だけが目的ではありません。業種や規模を越えて経営体験を持ち寄り、自分の会社をよくするために学び合う場です。仲間とのつながりは、その真剣な学びの中から生まれます。",
  },
  {
    question: "講師から正解を教わるセミナー？",
    answer:
      "専門家から学ぶ機会もありますが、活動の中心は会員自身の経営体験と対話です。「会員一人ひとりが先生であり、生徒である」という姿勢で、お互いから学びます。",
  },
  {
    question: "どんなことを学ぶの？",
    answer:
      "経営の手法だけではありません。その人がなぜ決断し、どう社員と向き合い、何を大切に会社をつくってきたのか。経営者としての生き方や姿勢まで掘り下げます。",
  },
  {
    question: "参加するだけで会社は変わる？",
    answer:
      "学んだだけでは変わりません。会社に持ち帰って実践し、その結果をまた仲間と確かめる。学びと実践を行き来することで、少しずつ変化をつくります。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="DOYU! ページの先頭へ">
          DOYU<span>!</span>
        </a>
        <nav className="desktop-nav" aria-label="ページ内ナビゲーション">
          <a href="#about">同友会とは</a>
          <a href="#purpose">3つの目的</a>
          <a href="#activity">活動</a>
          <Link href="/guide">深掘りガイド</Link>
          <a href="#faq">よくある疑問</a>
        </nav>
        <a className="header-button" href="#next">
          もっと知る <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true">●</span> 3分でつかむ、同友会入門
          </p>
          <h1>
            経営者が、
            <br />
            <span>ひとりで悩まない</span>
            <br />
            場所。
          </h1>
          <p className="hero-lead">
            正解を教わるのではなく、経験を持ち寄り、
            <br className="desktop-break" />
            ともに考え、会社と地域をよくしていく。
            <br />
            それが、中小企業家同友会です。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#about">
              まず、30秒で知る <span aria-hidden="true">↓</span>
            </a>
            <p>
              <strong>Scroll</strong>
              <span aria-hidden="true">くるっと見てみよう ↘</span>
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="話す、聴く、考える、やってみる">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="talk-card talk-card-one">
            <span>01</span>
            <strong>話す</strong>
            <small>経営のリアルを</small>
          </div>
          <div className="talk-card talk-card-two">
            <span>02</span>
            <strong>聴く</strong>
            <small>経験を自分に重ねて</small>
          </div>
          <div className="talk-card talk-card-three">
            <span>03</span>
            <strong>考える</strong>
            <small>仲間と本音で</small>
          </div>
          <div className="talk-card talk-card-four">
            <span>04</span>
            <strong>やってみる</strong>
            <small>自分の会社で</small>
          </div>
          <div className="center-badge">
            <span>経営者の</span>
            <strong>リアル</strong>
          </div>
          <div className="spark spark-one" aria-hidden="true">
            ✦
          </div>
          <div className="spark spark-two" aria-hidden="true">
            ✦
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="同友会の活動の循環">
        <div>
          <span>学ぶ</span>
          <b aria-hidden="true">→</b>
          <span>実践する</span>
          <b aria-hidden="true">→</b>
          <span>確かめる</span>
          <b aria-hidden="true">→</b>
          <span>また学ぶ</span>
          <b aria-hidden="true">→</b>
        </div>
        <div aria-hidden="true">
          <span>学ぶ</span>
          <b>→</b>
          <span>実践する</span>
          <b>→</b>
          <span>確かめる</span>
          <b>→</b>
          <span>また学ぶ</span>
          <b>→</b>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p className="section-number">01 / 同友会とは</p>
          <h2>
            教わる会、ではなく。
            <br />
            <span>学びあう会。</span>
          </h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            中小企業の経営者が、互いの
            <em>経験と知恵</em>
            を持ち寄る場所です。
          </p>
          <p>
            経営には、ひとつの正解がありません。だから同友会では、成功談だけでなく、迷いや失敗も含めた「経営のリアル」を語ります。他の人の経験を自分の会社に重ね、仲間と対話し、自分なりの答えを見つけていきます。
          </p>
          <div className="plain-note">
            <span aria-hidden="true">!</span>
            <p>
              名刺交換で終わらない。
              <br />
              <strong>会社を変える実践</strong>までが、学びです。
            </p>
          </div>
          <Link className="detail-banner" href="/guide">
            <span>
              <small>DEEP DIVE</small>
              理念や活動を、もう少し詳しく
            </span>
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>

      <section className="purpose" id="purpose">
        <div className="section-shell purpose-intro">
          <div className="section-heading">
            <p className="section-number">02 / 3つの目的</p>
            <h2>
              目指すのは、
              <br />
              <span>この3つ。</span>
            </h2>
          </div>
          <p className="section-lead">
            同友会の活動には、ぶれない3つの目的があります。
            <br />
            どれかひとつではなく、すべてがつながっています。
          </p>
        </div>

        <div className="purpose-grid section-shell">
          {purposes.map((purpose) => (
            <article
              className={`purpose-card purpose-card-${purpose.color}`}
              key={purpose.number}
            >
              <div className="purpose-top">
                <span>{purpose.number}</span>
                <small>{purpose.tag}</small>
              </div>
              <h3>
                {purpose.title.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <p>{purpose.text}</p>
              <div className="purpose-arrow" aria-hidden="true">
                ↗
              </div>
            </article>
          ))}
        </div>

        <div className="connection-line section-shell">
          <div className="connection-words">
            <span>会社</span>
            <b aria-hidden="true">×</b>
            <span>経営者</span>
            <b aria-hidden="true">×</b>
            <span>地域</span>
          </div>
          <p>
            よい会社には、学び続ける経営者がいる。
            <br />
            そして会社が育つには、よい経営環境がいる。
          </p>
        </div>
      </section>

      <section className="values section-shell">
        <div className="values-title">
          <p className="section-number">03 / 大切にする精神</p>
          <h2>
            自分から。
            <br />
            みんなで。
            <br />
            力を合わせて。
          </h2>
          <p>
            「自主・民主・連帯」は、会の運営だけでなく、人間を尊重する会社づくりにも通じる考え方です。
          </p>
        </div>
        <div className="values-list">
          {values.map((value, index) => (
            <article className="value-row" key={value.title}>
              <span className="value-index">0{index + 1}</span>
              <div className="value-name">
                <h3>{value.title}</h3>
                <small>{value.reading}</small>
              </div>
              <strong>{value.mark}</strong>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="activity" id="activity">
        <div className="section-shell activity-heading">
          <div className="section-heading">
            <p className="section-number">04 / 例会での学び</p>
            <h2>
              聴いて終わらない。
              <br />
              <span>会社で、やってみる。</span>
            </h2>
          </div>
          <p className="section-lead">
            活動の中心は、地域ごとに開かれる「例会」。
            <br />
            学びと実践を、ぐるぐる回していきます。
          </p>
        </div>

        <div className="steps section-shell">
          {steps.map((step, index) => (
            <article className="step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <span className="step-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="teacher-quote section-shell">
          <p>同友会の学びを、ひとことで言うなら。</p>
          <blockquote>
            <span>“</span>
            会員一人ひとりが、
            <br />
            <strong>先生であり、生徒である。</strong>
          </blockquote>
          <p className="quote-note">
            自分の経験を惜しまず話し、
            <br />
            相手の経験から謙虚に学ぶ。
          </p>
        </div>
      </section>

      <section className="region section-shell">
        <div className="region-mark" aria-hidden="true">
          <span>地</span>
          <span>域</span>
        </div>
        <div>
          <p className="section-number">05 / 目指す未来</p>
          <h2>
            会社がよくなる。
            <br />
            地域もよくなる。
          </h2>
          <p>
            中小企業は、地域の雇用や暮らしを支える存在です。だから自社だけでなく、地域や社会とともに歩む。経営者同士の学びを、よりよい会社と地域の未来につなげていきます。
          </p>
          <div className="region-tag">国民や地域と共に歩む中小企業へ</div>
        </div>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="faq-heading">
          <p className="section-number">06 / よくある疑問</p>
          <h2>
            つまり、どんな会？
          </h2>
          <p>気になるところを、タップしてみてください。</p>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => (
            <details key={item.question}>
              <summary>
                <span>Q{index + 1}</span>
                <strong>{item.question}</strong>
                <i aria-hidden="true">＋</i>
              </summary>
              <div className="answer">
                <span>A</span>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="deep-dive-teaser section-shell">
        <div className="deep-dive-label">もう一歩、深く。</div>
        <div className="deep-dive-copy">
          <p className="section-number">DEEP DIVE GUIDE</p>
          <h2>
            「何をする会？」から、
            <br />
            <span>「なぜ、そうする？」へ。</span>
          </h2>
          <p>
            理念の成り立ち、例会での学び方、人を生かす経営、組織づくり。
            <br />
            同友会の考え方を、5つのテーマで掘り下げます。
          </p>
          <Link className="primary-button" href="/guide">
            深掘りガイドを読む <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="deep-dive-topics" aria-label="深掘りガイドのテーマ">
          <span>理念</span>
          <span>運動</span>
          <span>例会</span>
          <span>経営</span>
          <span>歴史</span>
        </div>
      </section>

      <section className="next section-shell" id="next">
        <div className="next-sticker">NEXT!</div>
        <p className="section-number">ここまで読んだあなたへ</p>
        <h2>
          いちど、例会を
          <br />
          <span>のぞいてみませんか？</span>
        </h2>
        <p>
          まずは誰かの経営体験を聴いてみる。
          <br />
          同友会の空気は、そこから見えてきます。
        </p>
        <div className="next-actions">
          <a
            className="primary-button dark-button"
            href="https://www.doyu.jp/org/links"
            target="_blank"
            rel="noreferrer"
          >
            近くの同友会を探す <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href="https://www.doyu.jp/eventlists"
            target="_blank"
            rel="noreferrer"
          >
            公開行事を見てみる <span aria-hidden="true">→</span>
          </a>
          <Link className="text-link" href="/guide">
            もっと詳しく学ぶ <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer>
        <a className="logo footer-logo" href="#top">
          DOYU<span>!</span>
        </a>
        <p className="footer-message">
          学びあいから、
          <br />
          よい会社と地域の未来へ。
        </p>
        <div className="footer-meta">
          <p>
            このページは、同友会を初めて知る方のための非公式な入門ページです。
            <br />
            内容は『同友会運動の発展のために 第4次改訂版』および
            <a href="https://www.doyu.jp/" target="_blank" rel="noreferrer">
              中同協公式サイト
            </a>
            を参考に、わかりやすく再構成しています。
          </p>
          <a href="#top">ページの先頭へ ↑</a>
        </div>
      </footer>
    </main>
  );
}
