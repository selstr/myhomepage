import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

const Layout = ({ children }) => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  /** 최근 콘텐츠가 갱신된 메뉴 — 네비에서 반짝임 표시 */
  const navClass = (path, { sparkle = false } = {}) => {
    const parts = ['nav-link']
    if (isActive(path)) parts.push('active')
    if (sparkle) parts.push('nav-link--sparkle')
    return parts.join(' ')
  }

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-row nav-row-brand">
            <Link to="/" className="logo">
              조윤범, 독일건축사(Dipl. -Ing. Architekt)
            </Link>
          </div>
          <div className="nav-row nav-row-menu">
            <ul className="nav-menu">
              <li>
                <Link
                  to="/"
                  className={isActive('/') ? 'nav-link active' : 'nav-link'}
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={isActive('/about') ? 'nav-link active' : 'nav-link'}
                >
                  소개
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className={isActive('/works') ? 'nav-link active' : 'nav-link'}
                >
                  작품
                </Link>
              </li>
              <li>
                <Link
                  to="/good-architecture"
                  className={navClass('/good-architecture', { sparkle: true })}
                  title="최근 업데이트"
                >
                  좋은 건축물 보기
                </Link>
              </li>
              <li>
                <Link
                  to="/architects"
                  className={navClass('/architects', { sparkle: true })}
                  title="최근 업데이트"
                >
                  세계의 건축가
                </Link>
              </li>
              <li>
                <Link
                  to="/architecture-news"
                  className={navClass('/architecture-news', { sparkle: true })}
                  title="최근 업데이트"
                >
                  건축뉴스
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2024 건축 포트폴리오. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
