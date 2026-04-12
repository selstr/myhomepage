import './GoodArchitecture.css'

const places = [
  {
    name: 'ArchDaily — 프로젝트 둘러보기',
    description: '전 세계 수상작·최신 프로젝트를 사진과 도면으로 감상할 수 있습니다.',
    url: 'https://www.archdaily.com/search/projects/categories/houses'
  },
  {
    name: 'UNESCO 세계유산 — 건축·도시',
    description: '인류가 보존한 뛰어난 건축·역사 도시를 주제별로 살펴볼 수 있습니다.',
    url: 'https://whc.unesco.org/en/list/'
  },
  {
    name: 'Google Arts & Culture — 건축',
    description: '박물관·랜드마크 건축을 가상 전시와 고해상도 이미지로 만나볼 수 있습니다.',
    url: 'https://artsandculture.google.com/category/architecture'
  },
  {
    name: 'Structurae — 구조·건축 데이터베이스',
    description: '다리·타워·역사 건축 등 구조물 정보와 참고 자료를 검색할 수 있습니다.',
    url: 'https://structurae.net/en/'
  },
  {
    name: 'Open Buildings',
    description: '전 세계 건물 사진과 위치 정보를 지도에서 탐색할 수 있는 커뮤니티 자료입니다.',
    url: 'https://openbuildings.com/'
  },
  {
    name: 'The Pritzker Architecture Prize',
    description: '프리츠커상 수상자와 작품을 통해 현대 건축의 흐름을 읽을 수 있습니다.',
    url: 'https://www.pritzkerprize.com/laureates'
  }
]

const GoodArchitecture = () => {
  return (
    <div className="good-architecture">
      <div className="good-architecture-header">
        <h1>좋은 건축물 보기</h1>
        <p className="subtitle">감상과 학습에 도움이 되는 건축 자료·컬렉션을 모았습니다.</p>
      </div>

      <section className="good-architecture-intro">
        <p>
          아래 링크는 사진·도면·역사적 맥락을 함께 볼 수 있는 사이트들입니다. 새 창에서 열립니다.
        </p>
      </section>

      <ul className="good-architecture-list">
        {places.map((item) => (
          <li key={item.name} className="good-architecture-item">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="good-architecture-link"
            >
              <span className="good-architecture-name">{item.name}</span>
              <span className="good-architecture-desc">{item.description}</span>
              <span className="good-architecture-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoodArchitecture
