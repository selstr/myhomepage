import './ArchitectureNews.css'

const featuredNews = {
  title: '김재경 출판 기념 작품 전시 - TIMBERCRAFT',
  period: '2026.04.01 ~ 2026.04.13',
  venue: '토포하우스 제3전시실',
  gallery: 'TOPOHAUS (토포하우스)',
  galleryHome: 'https://www.topohaus.com/',
  summary:
    '김재경 님의 출판을 기념하는 개인전입니다. 전시명 TIMBERCRAFT 아래 목재·장인 정신·조형을 아우르는 작품을 선보이며, 서울 종로 일대 갤러리 토포하우스 제3전시실에서 관람할 수 있습니다. 일정·작품 정보는 아래 공식 게시글에서 확인하세요.',
  url: 'https://www.topohaus.com/post/%EA%B9%80%EC%9E%AC%EA%B2%BD-%EA%B0%9C%EC%9D%B8%EC%A0%84-timbercraft',
  relatedLinks: [
    {
      label: "'디지털 장인' 건축가 김재경, 목조건축에 깃든 법고창신의 정신 (한경 arte)",
      url: 'https://www.arte.co.kr/art/news/11794'
    },
    {
      label: '김재경 개인전 - TIMBERCRAFT (토포하우스)',
      url: 'https://www.topohaus.com/post/%EA%B9%80%EC%9E%AC%EA%B2%BD-%EA%B0%9C%EC%9D%B8%EC%A0%84-timbercraft'
    },
    {
      label: '의지적 구조 실험이 만드는 경이: 치유의 집 | 김재경+JK-AR (VMSPACE)',
      url: 'https://vmspace.com/report/report_view.html?base_seq=MzU4NQ=='
    },
    {
      label: '[DIALOGUE] 무엇을 위한 구조 실험인가? | 김재경+JK-AR (VMSPACE)',
      url: 'https://vmspace.com/report/report_view.html?base_seq=MzYwMQ=='
    },
    {
      label: '공존의 기술: 빛의 루 (VMSPACE)',
      url: 'https://vmspace.com/project/project_view.html?base_seq=MjM1MA=='
    },
    {
      label: 'JK-AR 김재경건축연구소',
      url: 'https://www.jk-ar.com/'
    },
    {
      label: 'YouTube (noanoajay1)',
      url: 'https://www.youtube.com/@noanoajay1'
    }
  ]
}

const newsSources = [
  {
    name: 'ArchDaily',
    description: '전 세계 건축 프로젝트, 뉴스, 비평.',
    url: 'https://www.archdaily.com/'
  },
  {
    name: 'Dezeen',
    description: '건축·인테리어·디자인 뉴스.',
    url: 'https://www.dezeen.com/architecture/'
  },
  {
    name: 'Architectural Record',
    description: '미국 건축 전문지.',
    url: 'https://www.architecturalrecord.com/'
  },
  {
    name: "The Architect's Newspaper",
    description: '북미 건축·도시 뉴스.',
    url: 'https://www.archpaper.com/'
  }
]

const ArchitectureNews = () => {
  return (
    <div className="architecture-news">
      <div className="architecture-news-header">
        <h1>건축뉴스</h1>
        <p className="subtitle">건축과 연관된 전시·출판 소식과 해외 매체를 모았습니다.</p>
      </div>

      <section className="architecture-news-featured" aria-labelledby="featured-news-heading">
        <h2 id="featured-news-heading" className="architecture-news-section-title">
          추천 소식
        </h2>
        <article className="featured-card">
          <p className="featured-badge">전시</p>
          <h3 className="featured-title">{featuredNews.title}</h3>
          <dl className="featured-meta">
            <div className="featured-meta-row">
              <dt>기간</dt>
              <dd>{featuredNews.period}</dd>
            </div>
            <div className="featured-meta-row">
              <dt>장소</dt>
              <dd>
                {featuredNews.venue}
                <span className="featured-meta-note"> · {featuredNews.gallery}</span>
              </dd>
            </div>
          </dl>
          <p className="featured-summary">{featuredNews.summary}</p>
          <div className="featured-actions">
            <a
              href={featuredNews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-cta"
            >
              전시 소식 (토포하우스) ↗
            </a>
            <a
              href={featuredNews.galleryHome}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-cta featured-cta-secondary"
            >
              TOPOHAUS 홈 ↗
            </a>
          </div>
          <div className="featured-related">
            <h4 className="featured-related-title">관련 링크</h4>
            <ul className="featured-related-list">
              {featuredNews.relatedLinks.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-related-link"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="architecture-news-sources" aria-labelledby="sources-heading">
        <h2 id="sources-heading" className="architecture-news-section-title">
          해외 건축 매체
        </h2>
        <p className="architecture-news-intro">
          건축 분야의 최신 프로젝트, 시상, 논의를 다루는 대표 온라인 매체입니다. 새 창에서 열립니다.
        </p>
        <ul className="architecture-news-list">
          {newsSources.map((item) => (
            <li key={item.name} className="architecture-news-item">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="architecture-news-link"
              >
                <span className="architecture-news-name">{item.name}</span>
                <span className="architecture-news-desc">{item.description}</span>
                <span className="architecture-news-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ArchitectureNews
