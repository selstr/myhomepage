import { useState, useEffect } from 'react'
import './Amorepacific.css'

const Amorepacific = () => {
  const [modalData, setModalData] = useState({ list: null, index: -1 })



  const streetPhotos = [
    { src: 'amorepacific_street_1.jpg', alt: '거리에서 본 아모레퍼시픽 1' },
    { src: 'amorepacific_street_2.jpg', alt: '거리에서 본 아모레퍼시픽 2' },
    { src: 'amorepacific_street_3.jpg', alt: '거리에서 본 아모레퍼시픽 3' },
    { src: 'amorepacific_street_4.jpg', alt: '거리에서 본 아모레퍼시픽 4' },
    { src: 'amorepacific_street_5.jpg', alt: '거리에서 본 아모레퍼시픽 5' },
  ]

  const entrancePhotos = [
    { src: 'amorepacific_entrance_1.jpg', alt: '아모레퍼시픽 입구 1' },
    { src: 'amorepacific_entrance_2.jpg', alt: '아모레퍼시픽 입구 2' },
    { src: 'amorepacific_entrance_3.jpg', alt: '아모레퍼시픽 입구 3' },
    { src: 'amorepacific_entrance_4.jpg', alt: '아모레퍼시픽 입구 4' },
  ]

  const firstFloorPhotos = [
    { src: 'amorepacific_1f_1.jpg', alt: '아모레퍼시픽 1층 1' },
    { src: 'amorepacific_1f_2.jpg', alt: '아모레퍼시픽 1층 2' },
    { src: 'amorepacific_1f_3.jpg', alt: '아모레퍼시픽 1층 3' },
    { src: 'amorepacific_1f_4.jpg', alt: '아모레퍼시픽 1층 4' },
    { src: 'amorepacific_1f_5.jpg', alt: '아모레퍼시픽 1층 5' },
  ]

  const links = [
    {
      title: '아모레퍼시픽 공식 소개',
      url: 'https://www.apgroup.com/int/ko/our-culture/amorepacific-architecture/amorepacific-headquarters/amorepacific-headquarters.html'
    },
    {
      title: 'VMSPACE 프로젝트 정보',
      url: 'https://vmspace.com/project/project_view.html?base_seq=MjM0'
    }
  ]

  const openModal = (list, index) => {
    setModalData({ list, index })
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalData({ list: null, index: -1 })
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalData.list) return

      if (e.key === 'ArrowLeft') {
        handlePrev(e)
      } else if (e.key === 'ArrowRight') {
        handleNext(e)
      } else if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [modalData])

  const handlePrev = (e) => {
    e.stopPropagation()
    setModalData(prev => ({
      ...prev,
      index: prev.index === 0 ? prev.list.length - 1 : prev.index - 1
    }))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setModalData(prev => ({
      ...prev,
      index: prev.index === prev.list.length - 1 ? 0 : prev.index + 1
    }))
  }

  const currentImage = modalData.list ? modalData.list[modalData.index] : null

  return (
    <div className="building-detail amorepacific">
      <header className="building-header">
        <div className="header-content">
          <h1>아모레퍼시픽 본사</h1>
          <p className="architect">데이비드 치퍼필드 (David Chipperfield)</p>
        </div>
      </header>

      <div className="container">
        <section className="detail-section description">
          <h2>건물 소개</h2>
          <div className="content-box">
            <p>
              용산의 중심에 위치한 아모레퍼시픽 본사는 세계적인 건축가 데이비드 치퍼필드(David Chipperfield)에 의해 설계되었습니다. 
              단순하면서도 강렬한 정육면체의 형태는 도시의 번잡함 속에서 절제된 미학을 보여줍니다.
            </p>
            <p>
              이 건물의 가장 큰 특징 중 하나는 '도시의 정원(Urban Garden)'이라 불리는 거대한 개방형 공간입니다. 
              건물 중간중간 배치된 세 개의 커다란 개구부를 통해 외부의 빛과 공기가 들어오며, 임직원뿐만 아니라 
              방문객들에게도 도심 속 휴식처를 제공합니다.
            </p>
            <p>
              외관은 가느다란 알루미늄 핀들로 덮여 있어, 보는 각도와 빛에 따라 변화하는 섬세한 그림자를 만들어냅니다. 
              이는 한국 전통 백자(Moon Jar)의 단아한 곡선과 여백의 미에서 영감을 받은 것으로 알려져 있습니다.
            </p>
          </div>
        </section>

        <section className="detail-section street-gallery">
          <h2>거리에서</h2>
          <div className="street-row">
            {streetPhotos.map((photo, index) => (
              <div key={index} className="street-item" onClick={() => openModal(streetPhotos, index)}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section street-gallery">
          <h2>입구</h2>
          <div className="street-row">
            {entrancePhotos.map((photo, index) => (
              <div key={index} className="street-item" onClick={() => openModal(entrancePhotos, index)}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section street-gallery">
          <h2>1층</h2>
          <div className="street-row">
            {firstFloorPhotos.map((photo, index) => (
              <div key={index} className="street-item" onClick={() => openModal(firstFloorPhotos, index)}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </section>



        <section className="detail-section links">
          <h2>추천 링크</h2>
          <div className="link-list">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="building-link"
              >
                <span>{link.title}</span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {currentImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <button className="nav-button prev" onClick={handlePrev}>‹</button>
            <button className="nav-button next" onClick={handleNext}>›</button>
            <img src={currentImage.src} alt={currentImage.alt} />
            <div className="modal-footer">
              <p className="image-caption">{currentImage.alt}</p>
              <p className="image-counter">{modalData.index + 1} / {modalData.list.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Amorepacific
