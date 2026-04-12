import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>자기 소개</h1>
        <p className="subtitle">건축가로서의 여정과 철학</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="profile-image">
            <img src="/profile.jpg" alt="건축가 프로필" className="profile-photo" />
          </div>
          <div className="about-text">
            <h2>안녕하세요</h2>
            <p>
              저는 공간과 형태의 아름다움을 추구하는 건축가입니다. 
              건축은 단순히 건물을 짓는 것이 아니라, 사람들의 삶의 질을 향상시키고 
              새로운 경험을 만들어내는 예술이라고 생각합니다.
            </p>
            <p>
              제 작품들은 기능성과 미학의 조화를 중시하며, 환경과의 조화를 통해 
              지속가능한 건축을 지향합니다. 각 프로젝트마다 고유한 이야기와 
              의미를 담아내려 노력하고 있습니다.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>교육 및 경력</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020 - 현재</div>
              <div className="timeline-content">
                <h3>독립건축가, 건축감리</h3>
                <p>다양한 주거 및 상업 프로젝트 진행</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015 - 2020</div>
              <div className="timeline-content">
                <h3>건축 설계사무소 근무</h3>
                <p>대형 프로젝트 설계 및 관리 경험</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2000</div>
              <div className="timeline-content">
                <h3>건축학 석사 졸업</h3>
                <p>독일 슈투트가르트 대학교, 건축학과</p>
                <p>디플롬엔지니어(Dipl. -Ing)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>건축 철학</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>평면</h3>
              <p>효율적인 공간 배치와 동선을 고려한 평면 설계</p>
            </div>
            <div className="philosophy-item">
              <h3>단면</h3>
              <p>구조와 공간의 수직적 관계를 고려한 단면 설계</p>
            </div>
            <div className="philosophy-item">
              <h3>공간</h3>
              <p>사용자의 활동과 경험을 고려한 공간 구성</p>
            </div>
            <div className="philosophy-item">
              <h3>건물에너지</h3>
              <p>친환경 기술과 에너지 효율을 고려한 지속가능한 설계</p>
            </div>
            <div className="philosophy-item">
              <h3>친환경재료</h3>
              <p>재활용 및 친환경 재료를 활용한 지속가능한 건축</p>
            </div>
            <div className="philosophy-item">
              <h3>종합예술</h3>
              <p>재활용 및 친환경 재료를 활용한 지속가능한 건축</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>연락처</h2>
          <div className="contact-info">
            <p><strong>전화:</strong> 010-7272-7821</p>
            <p><strong>이메일:</strong> selstr@naver.com</p>
            <p><strong>주소:</strong> 경기도 용인시</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About

