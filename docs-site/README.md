# StuBara

바라가 정리하는 공부 아카이브.

Astro + Starlight 기반의 모바일 친화 문서 사이트.

## 로컬 실행

```bash
cd docs-site
npm install
npm run dev
```

## GitHub Pages 배포

이 프로젝트는 GitHub Actions로 GitHub Pages에 배포되도록 설정돼 있음.

### 추천 레포 이름

- 레포 이름: `stubara`
- 주소: `https://miumi44.github.io/stubara/`

사용자 사이트로 운영하고 싶으면 `miumi44.github.io` 레포를 써도 되지만,
현재 용도에는 `stubara` 프로젝트 사이트 구성이 더 잘 어울림.

### GitHub에서 필요한 설정

1. 이 폴더 내용을 GitHub 레포에 push
2. GitHub 레포에서 **Settings → Pages** 이동
3. **Source** 를 **GitHub Actions** 로 선택
4. `main` 또는 `master` 브랜치에 push 하면 자동 배포

### 참고

- `astro.config.mjs` 는 GitHub Pages의 레포 이름에 맞춰 base path를 자동 계산함
- `SITE_URL` 은 GitHub Actions에서 자동 주입됨

## 현재 문서

- 바이오사이언스 산업동향

원하면 이후에 뉴스 브리핑 아카이브, 태그 구조, 커스텀 도메인까지 확장 가능.
