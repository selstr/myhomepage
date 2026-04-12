# GitHub에 프로젝트 업로드하는 방법

## 1단계: GitHub에서 저장소 생성
1. https://github.com 에 로그인
2. 우측 상단의 "+" 버튼 클릭 → "New repository" 선택
3. 저장소 이름 입력 (예: `myhomepage`)
4. Public 또는 Private 선택
5. "Create repository" 클릭

## 2단계: 로컬 저장소와 연결
GitHub에서 제공하는 명령어를 사용하거나, 아래 명령어를 실행:

```bash
# 원격 저장소 추가 (YOUR_USERNAME과 YOUR_REPO_NAME을 실제 값으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 브랜치 이름을 main으로 변경 (GitHub 기본값)
git branch -M main

# 코드 푸시
git push -u origin main
```

## 3단계: 다른 PC에서 클론
다른 PC에서 다음 명령어로 프로젝트를 가져올 수 있습니다:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
npm run dev
```

## 방법 2: 파일 직접 복사
GitHub를 사용하지 않으려면:
1. 전체 프로젝트 폴더를 USB나 클라우드 드라이브에 복사
2. 다른 PC로 복사
3. 해당 폴더에서 `npm install` 실행 후 `npm run dev` 실행

