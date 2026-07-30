import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "深掘りガイド｜DOYU!",
  description:
    "同友会理念の3層、同友会運動、例会の学び、人を生かす経営、組織と歴史を詳しく紹介します。",
};

const characterPoints = [
  {
    number: "01",
    title: "中小企業が担い手",
    text: "地域の暮らしや雇用を支える中小企業こそ、経済と社会を動かす主体だと考えます。",
  },
  {
    number: "02",
    title: "共に育つ関係",
    text: "企業同士を敵として見るのではなく、互いの違いから学び、地域全体の力を高めます。",
  },
  {
    number: "03",
    title: "社員はパートナー",
    text: "社員を経営の最も信頼できる仲間ととらえ、対話と信頼を会社づくりの土台にします。",
  },
  {
    number: "04",
    title: "民主的な運営",
    text: "一部の人だけで決めず、声を持ち寄り、納得できる道を一緒につくることを大切にします。",
  },
];

const learningSteps = [
  {
    label: "BEFORE",
    title: "自分の問いをもって参加する",
    text: "いま自社で何に悩んでいるのか。どんな会社をつくりたいのか。問いがあるほど、他者の経験が自分ごとになります。",
  },
  {
    label: "REPORT",
    title: "経営体験を、まるごと聴く",
    text: "成功の方法だけでなく、迷い、失敗、決断の背景まで聴きます。報告者は「正解を教える人」ではなく、問いを投げかける人です。",
  },
  {
    label: "DIALOGUE",
    title: "グループ討論で本質に迫る",
    text: "自分と他者の経験を重ね、なぜそう考えたのかを言葉にします。違いを比べることで、自社の課題がはっきりします。",
  },
  {
    label: "ACTION",
    title: "自社に持ち帰って実践する",
    text: "学びを自社に合う形へ置き換え、小さくても行動します。実践して初めて、学びが会社の変化になります。",
  },
  {
    label: "REVIEW",
    title: "結果を共有し、また学ぶ",
    text: "うまくいったことも、いかなかったことも持ち寄って検証します。この往復が、経営者と会社の成長を支えます。",
  },
];

const organizationPoints = [
  {
    number: "1",
    title: "良識ある経営者集団",
    text: "地域から信頼され、よりよい地域と社会をつくる経営者の集まりを目指す。",
  },
  {
    number: "2",
    title: "質の高い学びあい",
    text: "時代の変化と向き合い、経営者がどう自己変革するかを実践的に確かめる。",
  },
  {
    number: "3",
    title: "温かく頼れる組織",
    text: "成果が出ないときも一人にせず、親しみやすく相談できる関係を育てる。",
  },
  {
    number: "4",
    title: "会員が主体者",
    text: "参加するだけのお客様ではなく、企画や運営にもかかわり、会を一緒につくる。",
  },
  {
    number: "5",
    title: "共に育つ運営",
    text: "役員と事務局が理念を共有し、会員の学びと実践を支える力を高める。",
  },
];

const history = [
  {
    year: "1947",
    title: "前身組織が誕生",
    text: "戦後復興の担い手として、中小企業の自主的な運動が始まります。",
  },
  {
    year: "1957",
    title: "日本中小企業家同友会を創立",
    text: "「中小企業家の、中小企業家による、中小企業家のための会」として東京で出発しました。",
  },
  {
    year: "1969",
    title: "全国協議会を設立",
    text: "各地の同友会がつながり、全国で学びと運動を深める土台が生まれます。",
  },
  {
    year: "1973",
    title: "三つの目的を確立",
    text: "よい会社、よい経営者、よい経営環境という、現在につながる方向が示されました。",
  },
  {
    year: "1990",
    title: "同友会理念を明確化",
    text: "三つの目的、自主・民主・連帯、国民や地域と共に歩む中小企業の3層が確認されました。",
  },
  {
    year: "NOW",
    title: "理念を、各地の実践へ",
    text: "理念は完成品ではありません。時代と地域の課題に向き合いながら、学びと実践の中で深め続けます。",
  },
];

export default function GuidePage() {
  return (
    <main className="guide-page">
      <header className="site-header guide-header">
        <Link className="logo" href="/" aria-label="DOYU! 入門ページへ戻る">
          DOYU<span>!</span>
        </Link>
        <nav className="desktop-nav" aria-label="深掘りガイド内ナビゲーション">
          <a href="#idea">理念</a>
          <a href="#movement">運動</a>
          <a href="#meeting">例会</a>
          <a href="#management">経営</a>
          <a href="#history">歴史</a>
        </nav>
        <Link className="header-button" href="/">
          入門へ戻る <span aria-hidden="true">↖</span>
        </Link>
      </header>

      <section className="guide-hero">
        <div className="guide-hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true">●</span> DEEP DIVE / もう少し詳しく
          </p>
          <h1>
            なぜ学ぶ？
            <br />
            <span>どう変わる？</span>
          </h1>
          <p>
            同友会は、何かを「してもらう」会ではありません。
            <br />
            理念を学び、経営に重ね、仲間と実践する会です。
            <br />
            その考え方を、5つのテーマから掘り下げます。
          </p>
        </div>
        <div className="layer-stack" aria-label="理念、活動、経営の3つの層">
          <div className="layer-card layer-card-one">
            <small>LAYER 01</small>
            <strong>理念</strong>
            <span>何を目指す？</span>
          </div>
          <div className="layer-card layer-card-two">
            <small>LAYER 02</small>
            <strong>活動</strong>
            <span>どう学ぶ？</span>
          </div>
          <div className="layer-card layer-card-three">
            <small>LAYER 03</small>
            <strong>経営</strong>
            <span>どう実践する？</span>
          </div>
          <div className="layer-sticker">WHY?</div>
        </div>
      </section>

      <nav className="guide-jump" aria-label="詳説テーマへ移動">
        <a href="#idea">
          <span>01</span> 理念の3層
        </a>
        <a href="#movement">
          <span>02</span> 同友会運動
        </a>
        <a href="#meeting">
          <span>03</span> 例会の学び
        </a>
        <a href="#management">
          <span>04</span> 人を生かす経営
        </a>
        <a href="#history">
          <span>05</span> 組織と歴史
        </a>
      </nav>

      <section className="guide-section section-shell" id="idea">
        <div className="guide-section-head">
          <div>
            <p className="section-number">01 / 理念の3層</p>
            <h2 className="guide-heading">
              <span className="guide-heading-line">理念は、</span>
              <span className="guide-heading-line guide-heading-accent">
                3つの問いで
              </span>
              <span className="guide-heading-line">できている。</span>
            </h2>
          </div>
          <p>
            同友会理念は、単なるスローガンではありません。「何を目指すのか」「どう進めるのか」「誰と歩むのか」が一つにつながった、判断のよりどころです。
          </p>
        </div>

        <div className="idea-layers">
          <article className="idea-layer idea-layer-blue">
            <span>WHAT</span>
            <small>何を目指す？</small>
            <h3>三つの目的</h3>
            <ul>
              <li>よい会社をつくろう</li>
              <li>よい経営者になろう</li>
              <li>よい経営環境をつくろう</li>
            </ul>
          </article>
          <article className="idea-layer idea-layer-yellow">
            <span>HOW</span>
            <small>どう進める？</small>
            <h3>自主・民主・連帯</h3>
            <ul>
              <li>自分から参加する</li>
              <li>みんなの声で深める</li>
              <li>信頼を土台に力を合わせる</li>
            </ul>
          </article>
          <article className="idea-layer idea-layer-green">
            <span>WITH WHOM</span>
            <small>誰と歩む？</small>
            <h3>国民や地域と共に</h3>
            <ul>
              <li>地域の暮らしと雇用を支える</li>
              <li>社会からの信頼に応える</li>
              <li>地域の未来を一緒につくる</li>
            </ul>
          </article>
        </div>

        <div className="guide-insight">
          <strong>POINT</strong>
          <p>
            「よい会社」だけでも、「よい経営者」だけでも足りません。
            経営者と会社が成長し、その努力が報われる地域や社会をつくる。
            3つを同時に進めるところに、同友会の特徴があります。
          </p>
        </div>
      </section>

      <section className="movement-guide" id="movement">
        <div className="section-shell">
          <div className="guide-section-head light-head">
            <div>
              <p className="section-number">02 / 同友会運動とは</p>
              <h2 className="guide-heading guide-heading--wide">
                <span className="guide-heading-line">
                  今日の行事だけでなく、
                </span>
                <span className="guide-heading-line guide-heading-accent">
                  長い目で未来を変える。
                </span>
              </h2>
            </div>
            <p>
              「運動」は、理念を実現するために長期的・戦略的な課題へ取り組むこと。「活動」は、例会や委員会など、その時々の具体的な取り組みです。
            </p>
          </div>

          <div className="movement-vs">
            <article>
              <small>ACTIVITY / 活動</small>
              <h3>今日、何をする？</h3>
              <p>
                例会を開く。経営体験を報告する。グループで話す。学びを会社へ持ち帰る。
              </p>
            </article>
            <div aria-hidden="true">→</div>
            <article>
              <small>MOVEMENT / 運動</small>
              <h3>どんな未来をつくる？</h3>
              <p>
                よい会社・よい経営者・よい経営環境を、地域とともに実現していく。
              </p>
            </article>
          </div>

          <div className="character-heading">
            <p>活動や経営に表れる</p>
            <h3>4つの「同友会らしさ」</h3>
          </div>
          <div className="character-grid">
            {characterPoints.map((point) => (
              <article key={point.number}>
                <span>{point.number}</span>
                <h4>{point.title}</h4>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-section meeting-guide section-shell" id="meeting">
        <div className="guide-section-head">
          <div>
            <p className="section-number">03 / 例会の学び</p>
            <h2 className="guide-heading">
              <span className="guide-heading-line">話を聴く。</span>
              <span className="guide-heading-line guide-heading-accent">
                自分に重ねる。
              </span>
            </h2>
          </div>
          <p>
            例会の主役は、報告者だけではありません。参加した一人ひとりが、自分の経験を言葉にし、他者の経験から学び、自社で試してこそ学びが完成します。
          </p>
        </div>

        <div className="learning-steps">
          {learningSteps.map((step, index) => (
            <article key={step.label}>
              <div className="learning-index">0{index + 1}</div>
              <div className="learning-label">{step.label}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="learning-quote">
          <span>LEARN HOW TO LEARN</span>
          <p>
            学ぶのは、相手のやり方を
            <br />
            そのまま真似することではない。
          </p>
          <strong>
            その人が何を見て、どう考え、
            <br />
            なぜ決めたのかをつかむこと。
          </strong>
        </blockquote>
      </section>

      <section className="management-guide" id="management">
        <div className="section-shell">
          <div className="guide-section-head light-head">
            <div>
              <p className="section-number">04 / 人を生かす経営</p>
              <h2 className="guide-heading">
                <span className="guide-heading-line">人を大切にする。</span>
                <span className="guide-heading-line guide-heading-accent">
                  だから、経営を磨く。
                </span>
              </h2>
            </div>
            <p>
              人間尊重の経営は、優しさだけでは成り立ちません。社員の力が発揮され、会社が継続して社会に役立つために、経営者自身が姿勢と経営のしくみを整えます。
            </p>
          </div>

          <div className="management-triad">
            <div className="triad-center">経営理念</div>
            <article>
              <small>01</small>
              <h3>人間性</h3>
              <p>一人ひとりの人格と可能性を尊重する。</p>
            </article>
            <article>
              <small>02</small>
              <h3>社会性</h3>
              <p>会社の使命と、地域・社会への責任を考える。</p>
            </article>
            <article>
              <small>03</small>
              <h3>科学性</h3>
              <p>利益と事実に向き合い、計画して実践する。</p>
            </article>
          </div>

          <div className="management-flow">
            <div>
              <span>1</span>
              <strong>姿勢を正す</strong>
              <p>経営者としての責任を自覚する</p>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>2</span>
              <strong>指針をつくる</strong>
              <p>理念・方針・計画を言葉にする</p>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>3</span>
              <strong>社員と実践する</strong>
              <p>共有し、働く環境と組織を整える</p>
            </div>
            <b aria-hidden="true">→</b>
            <div>
              <span>4</span>
              <strong>検証する</strong>
              <p>結果を確かめ、また学び直す</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guide-section organization-guide section-shell">
        <div className="guide-section-head">
          <div>
            <p className="section-number">05 / 組織づくり</p>
            <h2 className="guide-heading">
              <span className="guide-heading-line">学びの場は、</span>
              <span className="guide-heading-line guide-heading-accent">
                みんなでつくる。
              </span>
            </h2>
          </div>
          <p>
            同友会では、会員は「お客様」ではなく、会をつくる主体です。温かな関係と、質の高い学びを両立するための5つの視点があります。
          </p>
        </div>

        <div className="organization-grid">
          {organizationPoints.map((point) => (
            <article key={point.number}>
              <span>{point.number}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="history-guide" id="history">
        <div className="section-shell">
          <div className="guide-section-head light-head">
            <div>
              <p className="section-number">06 / 理念の歩み</p>
              <h2 className="guide-heading">
                <span className="guide-heading-line">
                  理念は、歴史の中で
                </span>
                <span className="guide-heading-line guide-heading-accent">
                  磨かれてきた。
                </span>
              </h2>
            </div>
            <p>
              同友会理念は、最初から完成していたわけではありません。時代の困難と経営者たちの実践から、少しずつ言葉になりました。
            </p>
          </div>

          <div className="history-timeline">
            {history.map((item) => (
              <article key={item.year}>
                <div className="history-year">{item.year}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-final section-shell">
        <div>
          <p className="section-number">READ, THINK, TRY.</p>
          <h2 className="guide-heading">
            <span className="guide-heading-line">わかった、</span>
            <span className="guide-heading-line">で終わらせない。</span>
            <span className="guide-heading-line guide-heading-accent">
              自社ならどうする？
            </span>
          </h2>
          <p>
            同友会の学びは、自分の会社に問いを持ち帰るところから始まります。
          </p>
        </div>
        <div className="guide-final-actions">
          <Link className="primary-button" href="/">
            3分の入門へ戻る <span aria-hidden="true">↖</span>
          </Link>
          <a
            className="text-link"
            href="https://www.doyu.jp/lib/douyuukairinen"
            target="_blank"
            rel="noreferrer"
          >
            公式の理念を読む <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <Link className="logo footer-logo" href="/">
          DOYU<span>!</span>
        </Link>
        <p className="footer-message">
          学びを、経営へ。
          <br />
          経営を、地域の未来へ。
        </p>
        <div className="footer-meta">
          <p>
            このページは、同友会を初めて知る方のための非公式な入門ページです。
            <br />
            内容は『同友会運動の発展のために 第4次改訂版』および
            <a href="https://www.doyu.jp/" target="_blank" rel="noreferrer">
              中同協公式サイト
            </a>
            を参考に、要点をわかりやすく再構成しています。
          </p>
          <a href="#top">ページの先頭へ ↑</a>
        </div>
      </footer>
    </main>
  );
}
