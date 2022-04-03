<h1 style="text-align: center;">UI practice</h1>

## SCSSフォルダ・ファイル構成
- setting/ 変数の定義
  - _color.scss 色の定義
  - _size.scss 大きさの定義（幅やz-indexなど）
  - _typography.scss フォントの定義
- function/ 関数やmixinの定義
- foundation/ リセットCSSの役割 
- layout/ レイアウトBlockの定義（インナー幅など）
- component/ コンポーネントBlockの定義（ボタンや見出しなど） 
- project/ プロジェクトBlockの定義（その他Blockすべて） 
- external/ 外部クラスを上書き（定義）する用（WordPressのクラスとかライブラリのクラスのベースの上書き） 
- utility/ 汎用クラスの定義 
- style.scss 1つにまとめるSassファイル