import { Center, deck, Pad, slide, Step } from "suraido.js";
import "suraido.js/deck.css";
import "suraido.js/themes/olivia.css";
import "./slides.css";

const Title = slide({ path: "title" }, () => (
  <Center>
    <h1 class="center-text">AIに任せる処理、任せなくていい処理</h1>
  </Center>
));

const Intro = slide(() => (
  <Center>
    <h1 class="center-text">はじめに</h1>
  </Center>
));

const Intro1 = slide(() => (
  <Center>
    <h2>はじめに</h2>
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
  </Center>
));

const AutomationTool = slide(() => (
  <Center>
    <h1 class="center-text">経験①：バイト先の業務効率化システム</h1>
  </Center>
));

const AutomationTool1 = slide(() => (
  <Center>
    <h2>経験①：バイト先の業務効率化システム</h2>
    <h3>従来の業務フロー</h3>
    <img src="/assets/2026-11-14-16-05-26.png" />
  </Center>
));

const AutomationTool2 = slide(() => (
  <Center>
    <h2>経験①：バイト先の業務効率化システム</h2>
    <h3>最初に考えた実装</h3>
    <p>
      PDFをAmazon
      Rekognitionなどの画像認識AIで読んで、テスト作成依頼のデータを取得する
    </p>
  </Center>
));

const AutomationTool3 = slide(() => (
  <Center>
    <h2>経験①：バイト先の業務効率化システム</h2>
    <h3>開発中の気づき</h3>
    <p>
      「PDFのフォーマットが決まっているなら、AIで解析する必要はないのでは？」
      <br />
      →表のルールからテスト作成依頼の文章を特定 + 文章を分解して数字を抜き出す
      <br />
      テスト作成依頼の文章の例 「56-60番からランダムで2問作成してください」
    </p>
  </Center>
));

const CrumSchoolSystem = slide(() => (
  <Center>
    <h1 class="center-text">経験②：塾の学習管理システム</h1>
  </Center>
));

const CrumSchoolSystem1 = slide(() => (
  <Center>
    <h2>経験②：塾の学習管理システム</h2>
    <h3>依頼された機能</h3>
    <p>
      生徒が毎週の学習状況を振り返り、次の宿題を決めるためのカウンセリング機能
    </p>
    <img src="/assets/2026-11-14-17-09-12.png" />
  </Center>
));

const CrumSchoolSystem2 = slide(() => (
  <Center>
    <h2>経験②：塾の学習管理システム</h2>
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
  </Center>
));

const CrumSchoolSystem3 = slide(() => (
  <Center>
    <h2>経験②：塾の学習管理システム</h2>
    <h3>最終的な機能</h3>
    <p>
      AIチャットをやめ、Googleフォームのような入力形式に変更
      <br />
      今回の要件は定型的な質問による情報収集だったため、フォームでよかった
    </p>
  </Center>
));

const Similarity = slide(() => (
  <Center>
    <h1 class="center-text">二つの経験の共通点</h1>
  </Center>
));

const Similarity1 = slide(() => (
  <Center>
    <h2>二つの経験の共通点</h2>
    <p>
      処理のルールを事前に定義できるなら、AIを使わなくても実現できる
      <br />
      →条件分岐の数を見ればいい
    </p>
  </Center>
));

const ShouldUseAI = slide(() => (
  <Center>
    <h1 class="center-text">逆にAIを使うべきだと感じた経験</h1>
  </Center>
));

const ShouldUseAI1 = slide(() => (
  <Center>
    <h2>逆にAIを使うべきだと感じた経験</h2>
    <h3>過去に作ったアプリ「AIクローゼット」</h3>
    <p>
      機能
      <br />
      ・クローゼットに服を登録（半袖、黒などメタデータをAIで取得）
      <br />
      ・その日の自撮りを撮ると、来ている服をクローゼットの中から特定
    </p>
  </Center>
));

const ShouldUseAI2 = slide(() => (
  <Center>
    <h2>逆にAIを使うべきだと感じた経験</h2>
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
  </Center>
));

const JudgmentCriteria = slide(() => (
  <Center>
    <h1 class="center-text">AIに任せる・任せないの判断基準</h1>
  </Center>
));

const JudgmentCriteria1 = slide(() => (
  <Center>
    <h2>AIに任せる・任せないの判断基準</h2>
    <img src="/assets/2026-11-14-17-23-04.png" />
  </Center>
));

const Summary = slide(() => (
  <Center>
    <h1 class="center-text">まとめ</h1>
  </Center>
));

const Summary1 = slide(() => (
  <Center>
    <h2>まとめ</h2>
    <p>
      入力から出力までのルールを明確に定義できる
      <br />
      →AIなし
      <br />
      定義できない、現実的でない
      <br />
      →AI使うかも
    </p>
  </Center>
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
