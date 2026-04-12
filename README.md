# 건축 포트폴리오 홈페이지

건축가를 위한 포트폴리오 홈페이지입니다. 자기 소개, 작품 소개, 건축가 소개 섹션을 포함합니다.

## 기능

- 🏠 **홈**: 메인 랜딩 페이지
- 👤 **소개**: 자기 소개 및 경력
- 🏗️ **작품**: 프로젝트 및 작품 포트폴리오
- 🏛️ **건축가**: 세계적인 건축가 소개

## 기술 스택

- React 18
- React Router
- Vite
- CSS3

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
  ├── components/
  │   └── Layout.jsx       # 레이아웃 및 네비게이션
  ├── pages/
  │   ├── Home.jsx         # 홈 페이지
  │   ├── About.jsx        # 자기 소개 페이지
  │   ├── Works.jsx        # 작품 소개 페이지
  │   └── Architects.jsx   # 건축가 소개 페이지
  ├── App.jsx              # 메인 앱 컴포넌트
  ├── main.jsx             # 진입점
  └── index.css            # 전역 스타일
```

## 커스터마이징

각 페이지의 내용은 해당 컴포넌트 파일에서 수정할 수 있습니다:
- `src/pages/About.jsx`: 자기 소개 내용 수정
- `src/pages/Works.jsx`: 작품 목록 수정
- `src/pages/Architects.jsx`: 건축가 정보 수정

