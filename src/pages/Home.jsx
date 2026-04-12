import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">건축은 제2의 자연이다.</h1>
          <p className="hero-subtitle">
            공간과 형태의 조화를 통해 새로운 경험을 만들어갑니다
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              더 알아보기
            </Link>
            <Link to="/works" className="btn btn-secondary">
              작품 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>자기 소개</h3>
            <p>건축가로서의 여정과 철학을 소개합니다</p>
            <Link to="/about" className="feature-link">
              자세히 보기 →
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏗️</div>
            <h3>작품 소개</h3>
            <p>다양한 프로젝트와 건축 작품을 만나보세요</p>
            <Link to="/works" className="feature-link">
              작품 보기 →
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏛️</div>
            <h3>세계의 건축가</h3>
            <p>세계적인 건축가들의 작품과 철학을 탐구합니다</p>
            <Link to="/architects" className="feature-link">
              건축가 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

