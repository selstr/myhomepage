# 프롬프트 자동 저장 스크립트
# 사용법: .\자동-프롬프트-저장.ps1

$date = Get-Date -Format "yyyy-MM-dd-HHmmss"
$promptFolder = "프롬프트-홈페이지"
$outputFile = "$promptFolder\프롬프트-세션-$date.md"

# 프롬프트 폴더가 없으면 생성
if (-not (Test-Path $promptFolder)) {
    New-Item -ItemType Directory -Path $promptFolder | Out-Null
    Write-Host "프롬프트 폴더를 생성했습니다: $promptFolder" -ForegroundColor Green
}

# 세션 정보 작성
$content = @"
# 프롬프트 세션 저장 - $date

## 저장 시간
$(Get-Date -Format "yyyy년 MM월 dd일 HH:mm:ss")

## 참고사항
이 파일은 자동 저장 스크립트로 생성되었습니다.
실제 대화 내용은 수동으로 추가해야 합니다.

## 다음 단계
1. 현재 세션의 대화 내용을 복사
2. 이 파일에 추가하거나
3. 새로운 파일로 저장

"@

# 파일 저장
$content | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "프롬프트가 저장되었습니다: $outputFile" -ForegroundColor Green
Write-Host ""
Write-Host "현재 세션의 대화 내용을 수동으로 추가해주세요." -ForegroundColor Yellow









