# ハノイのパンケーキ（ミニゲームアプリ）

画像をクリックすると、アプリ画面が表示されます

[<img src="/README.png">](https://main.d34k4jq16mw0jy.amplifyapp.com/)

[ハノイの塔](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%8E%E3%82%A4%E3%81%AE%E5%A1%94)という、

- 一つずつ動かしていく
- 上に積み重ねることができるのは小さい物のみ

のルールのパズルゲームを、画面上のボタン操作で遊べるようにしたアプリです。

使用している技術は

- React (画面開発のベースとなる技術)
- Material UI (マテリアルデザイン用のライブラリ)
- AWS Amplify (ウェブホスティングサービス)

で、パンケーキ部分は、Material UI の
[Paper コンポーネント](https://mui.com/material-ui/react-paper/)
を使っています。

## 今後の方針

本アプリは画面切替なしのため、画面切替ありの別アプリ作成を考えています。

また、AWS のデータベースも利用したいと考えています。

Next (Reactでの開発を楽にしてくれるフレームワーク) を使うと、

画面切替を楽に開発することが可能で、

- ESLint (バグとなる可能性のあるコードパターンを検知するツール)
- Prettier (コードを整形するツール)

の組み合わせも、まとめて導入できる模様。
[Next の公式ドキュメント](https://nextjs.org/docs/basic-features/eslint#usage-with-other-tools)


---

※　以下は、開発メモです　※

[イラスト素材：イチゴ](https://www.ac-illust.com/main/detail.php?id=22710558&word=%E3%82%A4%E3%83%81%E3%82%B4%E3%80%80%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84%E3%80%80%E6%98%A5)

## AWS Amplify のウェブホスティングサービスを使って React アプリをクラウドにデプロイ

- [デプロイ手順](https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/module-one/)
- [デプロイ先](https://main.d34k4jq16mw0jy.amplifyapp.com/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
