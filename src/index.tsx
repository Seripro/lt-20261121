import { Center, deck, slide } from "suraido.js";
import type { JSX } from "suraido.js/jsx-runtime";
import "suraido.js/deck.css";
import "suraido.js/themes/olivia.css";
import "./slides.css";

type ContentSlideProps = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const SectionSlide = ({ title }: { title: string }) => (
  <Center>
    <h1 class="center-text">{title}</h1>
  </Center>
);

const ContentSlide = ({ title, children }: ContentSlideProps) => (
  <Center>
    <h2>{title}</h2>
    {children}
  </Center>
);

const Title = slide({ path: "title" }, () => (
  <Center>
    <h1 class="center-text">AIに任せる処理、任せなくていい処理</h1>
  </Center>
));

const Intro = slide(() => <SectionSlide title="はじめに" />);

const Intro1 = slide(() => (
  <ContentSlide title="はじめに">
    <p>
      AIを活用したアプリを開発しようとして、途中でAIを使わない設計に変更した
      <br />
      「AIを使えば自動化できそう」
      <br />
      ↓
      <br />
      「これ、普通にロジックを書けばできるのでは？」
      <br />
      AIに任せるべき処理と、任せなくてもよい処理には、どんな違いがあるのか？
    </p>
  </ContentSlide>
));

const AutomationTool = slide(() => (
  <SectionSlide title="経験①：バイト先の業務効率化システム" />
));

const AutomationTool1 = slide(() => (
  <ContentSlide title="経験①：バイト先の業務効率化システム">
    <h3>従来の業務フロー</h3>
    <img src="/assets/2026-11-14-16-05-26.png" />
  </ContentSlide>
));

const AutomationTool2 = slide(() => (
  <ContentSlide title="経験①：バイト先の業務効率化システム">
    <h3>最初に考えた実装</h3>
    <p>
      PDFをAmazon
      Rekognitionなどの画像認識AIで読んで、テスト作成依頼のデータを取得する
    </p>
  </ContentSlide>
));

const AutomationTool3 = slide(() => (
  <ContentSlide title="経験①：バイト先の業務効率化システム">
    <h3>開発中の気づき</h3>
    <p>
      「PDFのフォーマットが決まっているなら、AIで解析する必要はないのでは？」
      <br />
      →表のルールからテスト作成依頼の文章を特定 + 文章を分解して数字を抜き出す
      <br />
      テスト作成依頼の文章の例 「56-60番からランダムで2問作成してください」
    </p>
  </ContentSlide>
));

const CrumSchoolSystem = slide(() => (
  <SectionSlide title="経験②：塾の学習管理システム" />
));

const CrumSchoolSystem1 = slide(() => (
  <ContentSlide title="経験②：塾の学習管理システム">
    <h3>依頼された機能</h3>
    <p>
      生徒が毎週の学習状況を振り返り、次の宿題を決めるためのカウンセリング機能
    </p>
    <img src="/assets/2026-11-14-17-09-12.png" />
  </ContentSlide>
));

const CrumSchoolSystem2 = slide(() => (
  <ContentSlide title="経験②：塾の学習管理システム">
    <h3>開発中の気づき</h3>
    <p>
      AIの自由度が高すぎる。
      <br />
      AIが必要のない質問をしたり、会話が別の方向へ進んだりした。
      <br />
      →プロンプトやプログラム側の制御によって、AIの会話を制限したい
      <br />
      ここで疑問
      <br />
      「質問内容も、質問する順番も、条件分岐も決まっているなら、そもそもAIである必要があるのか？」
    </p>
  </ContentSlide>
));

const CrumSchoolSystem3 = slide(() => (
  <ContentSlide title="経験②：塾の学習管理システム">
    <h3>最終的な機能</h3>
    <p>
      AIチャットをやめ、Googleフォームのような入力形式に変更
      <br />
      今回の要件は定型的な質問による情報収集だったため、フォームでよかった
    </p>
  </ContentSlide>
));

const Similarity = slide(() => <SectionSlide title="二つの経験の共通点" />);

const Similarity1 = slide(() => (
  <ContentSlide title="二つの経験の共通点">
    <p>
      処理のルールを事前に定義できるなら、AIを使わなくても実現できる
      <br />
      →条件分岐の数を見ればいい
    </p>
  </ContentSlide>
));

const ShouldUseAI = slide(() => (
  <SectionSlide title="逆にAIを使うべきだと感じた経験" />
));

const ShouldUseAI1 = slide(() => (
  <ContentSlide title="逆にAIを使うべきだと感じた経験">
    <h3>過去に作ったアプリ「AIクローゼット」</h3>
    <p>
      機能
      <br />
      ・クローゼットに服を登録（半袖、黒などメタデータをAIで取得）
      <br />
      ・その日の自撮りを撮ると、来ている服をクローゼットの中から特定
    </p>
  </ContentSlide>
));

const ShouldUseAI2 = slide(() => (
  <ContentSlide title="逆にAIを使うべきだと感じた経験">
    <p>
      これをAIを使わずに実装しようとすると、次のような処理が必要になる
      <br />
      ・画像内のどの部分が服なのか判定する
      <br />
      ・服の色を判定する
      <br />
      ・袖の長さや形状を判定する
      <br />
      ・服の種類を判定する
      <br />
      無限に条件がある
      <br />
      →AIを使う価値がある
    </p>
  </ContentSlide>
));

const JudgmentCriteria = slide(() => (
  <SectionSlide title="AIに任せる・任せないの判断基準" />
));

const JudgmentCriteria1 = slide(() => (
  <ContentSlide title="AIに任せる・任せないの判断基準">
    <img src="/assets/2026-11-14-17-23-04.png" />
  </ContentSlide>
));

const Summary = slide(() => <SectionSlide title="まとめ" />);

const Summary1 = slide(() => (
  <ContentSlide title="まとめ">
    <p>
      入力から出力までのルールを明確に定義できる
      <br />
      →AIなし
      <br />
      定義できない、現実的でない
      <br />
      →AI使うかも
    </p>
  </ContentSlide>
));

// The order here is the order they are shown in.
deck([
  Title,
  Intro,
  Intro1,
  AutomationTool,
  AutomationTool1,
  AutomationTool2,
  AutomationTool3,
  CrumSchoolSystem,
  CrumSchoolSystem1,
  CrumSchoolSystem2,
  CrumSchoolSystem3,
  Similarity,
  Similarity1,
  ShouldUseAI,
  ShouldUseAI1,
  ShouldUseAI2,
  JudgmentCriteria,
  JudgmentCriteria1,
  Summary,
  Summary1,
]);
