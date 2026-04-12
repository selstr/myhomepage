import { useState } from 'react'
import './Works.css'

const Works = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const works = [
    {
      id: 1,
      title: '삼례역사 - 전라선 (운송시설)',
      text: '도시 속 자연을 담은 주거 공간 설계. 친환경 재료와 자연 채광을 활용한 지속가능한 주거 환경을 구현했습니다.',
      plan: '1층: 거실, 주방, 다용도실 / 2층: 침실 3개, 화장실 2개 / 지하: 주차장, 창고',
      section: '단면 A-A: 남북 방향 절단면, 천고 2.7m, 지하 1층 높이 2.4m / 단면 B-B: 동서 방향 절단면, 2층 구조, 경사 지붕',
      image: '🏠'
    },
    {
      id: 2,
      title: '둔내 패시브하우스 (단독주택)',
      text: '도시 속 자연을 담은 주거 공간 설계. 친환경 재료와 자연 채광을 활용한 지속가능한 주거 환경을 구현했습니다.',
      plan: '1층: 거실, 주방, 다용도실 / 2층: 침실 3개, 화장실 2개 / 지하: 주차장, 창고',
      section: '단면 A-A: 남북 방향 절단면, 천고 2.7m, 지하 1층 높이 2.4m / 단면 B-B: 동서 방향 절단면, 2층 구조, 경사 지붕',
      image: '🏠'
    },
    {
      id: 3,
      title: '내촌 패시브하우스 (단독주택)',
      text: '지역 커뮤니티를 위한 문화 공간. 다양한 문화 활동이 가능한 유연한 공간 구성과 현대적인 디자인이 특징입니다.',
      plan: '1층: 로비, 전시실, 카페 / 2층: 공연장, 연습실 / 3층: 사무실, 회의실',
      section: '단면 A-A: 메인 홀 천고 8m, 2층 갤러리 연결 / 단면 B-B: 공연장 천고 12m, 음향 설비 공간 포함',
      image: '🎭'
    },
    {
      id: 4,
      title: '강화 패시브하우스 (단독주택)',
      text: '도심 속 상업 공간. 효율적인 공간 활용과 아름다운 외관을 동시에 만족시키는 설계입니다.',
      plan: '지하: 주차장 / 1-2층: 상업시설 / 3-5층: 오피스 / 옥상: 테라스',
      section: '단면 A-A: 지하 1층 높이 2.5m, 1-2층 높이 4.5m, 3-5층 높이 3.5m / 단면 B-B: 옥상 테라스 구조, 외부 마감 재료',
      image: '🏢'
    },
    {
      id: 5,
      title: '철원 패시브하우스 (야생조수류 보호사)',
      text: '기존 건물의 가치를 보존하면서 현대적인 기능을 추가한 리노베이션 프로젝트입니다.',
      plan: '기존 구조 보존, 오픈 키친 추가, 현대적 인테리어 적용',
      section: '단면 A-A: 기존 벽체 보존, 새로운 천고 2.8m / 단면 B-B: 오픈 키친 구조, 상부 조명 설치',
      image: '🔨'
    },
    {
      id: 6,
      title: '풀무원 로하스 아카데미, 패시브하우스 (수련시설)',
      text: '도시 속 휴식 공간. 자연과 도시의 경계를 허무는 혁신적인 공원 설계입니다.',
      plan: '산책로, 휴게 공간, 놀이터, 운동 시설, 화장실, 주차장 배치',
      section: '단면 A-A: 지형 고저차 활용, 계단식 조경 / 단면 B-B: 산책로 경사도, 휴게 공간 높이차',
      image: '🌳'
    },
    {
      id: 7,
      title: '시흥시 제로에너지 홍보관 (전시시설)',
      text: '미래 교육을 위한 학습 공간. 협업과 창의성을 고려한 교육 환경을 설계했습니다.',
      plan: '1층: 로비, 도서관 / 2-3층: 교실, 실험실 / 4층: 체육관, 식당',
      section: '단면 A-A: 1층 천고 4m, 2-3층 천고 3.5m, 4층 체육관 천고 8m / 단면 B-B: 계단 구조, 엘리베이터 샤프트',
      image: '📚'
    }
  ]

  return (
    <div className="works">
      <div className="works-header">
        <h1>대표작</h1>
        <p className="subtitle">다양한 프로젝트와 건축 작품을 만나보세요</p>
      </div>

      <div className="works-grid">
        {works.map(work => (
          <div key={work.id} className="work-card">
            <div className="work-image">
              <div className="work-icon">{work.image}</div>
            </div>
            <div className="work-content">
              <h2 className="work-title">
                {work.title.includes('(') ? (
                  <>
                    {work.title.split('(')[0]}
                    <span className="work-subtitle">({work.title.split('(')[1]}</span>
                  </>
                ) : (
                  work.title
                )}
              </h2>
              <p className="work-description">{work.text}</p>
              <div className="work-buttons">
                <button 
                  className="work-button work-button-plan"
                  onClick={() => setSelectedPlan(work)}
                >
                  자세히 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="works-stats">
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">완료된 프로젝트</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10+</div>
          <div className="stat-label">수상 경력</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15+</div>
          <div className="stat-label">경력 연수</div>
        </div>
      </section>

      {selectedPlan && (
        <div className="plan-modal" onClick={() => setSelectedPlan(null)}>
          <div className="plan-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="plan-modal-close" onClick={() => setSelectedPlan(null)}>
              ×
            </button>
            <h2>
              {selectedPlan.title.includes('(') ? (
                <>
                  {selectedPlan.title.split('(')[0]}
                  <span className="work-subtitle">({selectedPlan.title.split('(')[1]}</span>
                </>
              ) : (
                selectedPlan.title
              )}
            </h2>
            
            <div className="work-detail-content">
              <div className="work-detail-section">
                <h3>작품 소개</h3>
                <p className="work-detail-text">{selectedPlan.text}</p>
              </div>

              <div className="work-detail-section">
                <h3>이미지</h3>
                <div className="work-image-display">
                  <div className="work-icon-large">{selectedPlan.image}</div>
                  <p className="work-image-note">이미지를 여기에 추가할 수 있습니다</p>
                </div>
              </div>

              <div className="work-detail-section">
                <h3>평면</h3>
                <div className="plan-display">
                  <div className="plan-icon">📐</div>
                  <p className="plan-description">{selectedPlan.plan}</p>
                  <p className="plan-note">평면도 이미지를 여기에 추가할 수 있습니다</p>
                </div>
              </div>

              <div className="work-detail-section">
                <h3>단면</h3>
                <div className="section-display">
                  <div className="plan-icon">📏</div>
                  <p className="plan-description">{selectedPlan.section}</p>
                  <p className="plan-note">단면도 이미지를 여기에 추가할 수 있습니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Works

