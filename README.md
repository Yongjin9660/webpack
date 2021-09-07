# webpack

## Usage

```
npm install     # 의존성 설치
eslint --init   # eslint 설정
npm run build   # webpack을 통한 bundle 파일 생성
```

## 참고사항

- src 디렉토리의 js 파일 뿐 아니라 sass 파일, img 파일, 또한 webpack으로 처리하였습니다.
- HtmlWebpackPlugin을 통해 index.html 파일을 처리하였습니다.
- husky의 pre-commit을 사용하여 commit 전 eslint를 검사하도록 처리하였습니다.
