# webpack 구성 (Babel + SASS + source-map)

## Version

```
Node.js : v14.17.3
npm : v7.20.1
husky : v.7.0.2
```

```
Babel
- @babel/cli : v7.15.4
- @babel/core : v7.15.5
- @babel/node : v7.15.4
- @babel/plugin-proposal-class-properties : v7.14.5
- @babel/preset-env : v7.15.4
- @babel/polyfill: v7.12.1
```

```
Webpack
- webpack : v5.52.0
- webpack-cli : v4.8.0
```

```
Webpack Plugin
- node-sass : v6.0.1
- babel-loader : v8.2.2
- html-webpack-plugin : v5.3.2
- css-loader : v6.2.0
- sass-loader : v12.1.0
- style-loader : v3.2.1
- mini-css-extract-plugin : v2.2.2
- file-loader : v6.2.0
- clean-webpack-plugin : v4.0.0

```

## Usage

```
npm install     # 의존성 설치
eslint --init   # eslint 설정
npm run build   # webpack을 통한 bundle 파일 생성
```

## 실행화면

<img src="https://user-images.githubusercontent.com/55246584/132294993-1a967aac-de83-44e8-9cbf-c4dbb94cdf8e.png" width = "600" height="600" />

## 참고사항

- src 디렉토리의 js 파일 뿐 아니라 sass 파일, img 파일, 또한 webpack으로 처리하였습니다.
- HtmlWebpackPlugin을 통해 index.html 파일을 처리하였습니다.
- husky의 pre-commit을 사용하여 commit 전 eslint를 검사하도록 처리하였습니다.
