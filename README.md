# タイトル
未定


# 目的
もくもく会で出会ったエンジニア達でコーヒー豆のDBサイトを作成するチームに参加させてもらったですが、デプロイなど基本の骨組みはできていたのですがそこから動きが止まっている状態でした。
もう少し具体的に提案できるようにミニアプリを作成しようと考えました。
前回のオリジナルアプリケーションでは本の内容という抽象的なモノをアプリケーションに起こすのがテーマでした。
そこで今回は既に存在(可視化できている)しているモノをアプリケーションに起こすことでリメイクしてみようと思います。
情報は多岐に渡るのですが、ライトアップコーヒーの川野氏が先日Twitterにアップしていた内容をリメイクしました。

# 実際の川野氏の画像
![ccb](https://user-images.githubusercontent.com/88849254/143201851-b9014b0f-d3f0-475b-a1c4-f6af4327ba4a.jpeg)

# ペルソナ
・20代半ば、女性、メガベンチャーのオフィスワーカー(総合職3年目)
・大学生時代から使っているInstagramが最も使うアプリ
・コロナ禍に入ってTwitter徘徊もするようになった
・テレワークになって生活にメリハリがなくなってきている。
・コロナ禍に入って外出の頻度が減ってあまりInstagramの更新をしていない。
・テレワーク疲れもあって緊急辞退宣言が解けた今、休日はカフェ巡りを楽しんでいる。
・元々は紅茶派だったがテレワーク時代にコーヒーを飲む様になった。
・スタバに行くなら断然フラペチーノ派
・コーヒーを飲むようになったけど「違いがわからない」とスグに言ってしまう。
・カフェに行って少し淡いような写真を取りたい
・カフェに行くとガチャガチャ話したい時もあるが、今はテレワーク疲れを癒やす為にゆっくり小説を読みたい

# エンティティ
条件分岐による画面遷移/診断された結果をSNSに共有する機能

# アプリケーション概要
上記の川野氏の画面を遷移して自分におすすめのコーヒーを診断できるようにする
どんなコーヒーを飲みたいかわからない時はランダムボタンがあり押すとランダムで注文するコーヒーを決めてくれる

# 目指した解決
少しコーヒーに興味があるが横文字が多くわかりにくいので注文を決めてくれる。
もしその内容がわからなくても結果を見ればバリスタにその商品があるのか相談しやすくなる。またない時も近い商品をバリスタもあアテンドしやすくなるので会話数を減らして(感染予防)スムーズに注文できるようになる。

# テーブル
recommendテーブル
| Column     | Type        |              |
|:-----------|------------:|:------------:|
| coffee_type| string      |              |
