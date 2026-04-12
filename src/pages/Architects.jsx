import { useState } from 'react'
import './Architects.css'

const Architects = () => {
  const [selectedWork, setSelectedWork] = useState(null)
  const [selectedArchitect, setSelectedArchitect] = useState(null)

  const architects = [
    {
      id: 1,
      name: 'Juergen Mayer H (유르겐 마이어 하)',
      nationality: '독일',
      period: '1965 - 현재',
      style: '디지털 건축',
      description: '디지털 기술과 파라메트릭 디자인을 활용한 혁신적인 건축가. 데이터 시각화와 공간의 새로운 가능성을 탐구합니다.',
      notableWorks: ['메트로폴 파라솔', '듀플리 카사', '판코우 법원', '스타트업 캠퍼스', '게오르그 콜베 미술관', '울름 시공사'],
      works: [
        {
          id: 1,
          title: '메트로폴 파라솔',
          description: '세비야의 랜드마크 건축물. 세계에서 가장 큰 목조 구조물로, 디지털 기술과 전통 재료의 결합을 보여줍니다. 6개의 거대한 파라솔 형태의 구조물이 도시 광장을 덮고 있습니다.',
          image: 'https://jmayerh.de/files/2020/05/huftoncrow-metropol-parasol-35-1536x1434.jpg',
          imageEmoji: '🏛️',
          location: '세비야, 스페인',
          year: '2011',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/117368/metropol-parasol-structure-in-plaza-de-la-encarnacion-j-mayer-h' },
            { name: 'Dezeen', url: 'https://www.dezeen.com/2011/04/27/metropol-parasol-by-j-mayer-h/' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/metropol-parasol/' },
            { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Metropol_Parasol' }
          ]
        },
        {
          id: 2,
          title: '듀플리 카사',
          description: '기존 주택을 복제하고 확장한 혁신적인 주거 프로젝트. 디지털 설계 기법을 통해 전통적인 주거 형태를 현대적으로 재해석했습니다.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
          imageEmoji: '🏠',
          location: '루트비히스부르크, 독일',
          year: '2008',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/10102/dupli-casa-j-mayer-h' },
            { name: 'Dezeen', url: 'https://www.dezeen.com/2008/09/15/dupli-casa-by-j-mayer-h/' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/dupli-casa/' }
          ]
        },
        {
          id: 3,
          title: '판코우 법원',
          description: '베를린 판코우 지역의 새로운 법원 건물. 유기적인 형태와 디지털 설계가 조화를 이루는 공공 건축물입니다.',
          image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop',
          imageEmoji: '⚖️',
          location: '베를린, 독일',
          year: '2015',
          pdf: '/Juergen Mayer H -03.pdf',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/778109/court-house-pankow-j-mayer-h' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/court-house-pankow/' }
          ]
        },
        {
          id: 4,
          title: '스타트업 캠퍼스',
          description: '디지털 시대의 작업 공간을 재정의한 프로젝트. 유연성과 창의성을 고려한 현대적 오피스 설계. 베를린의 혁신 허브로 자리잡았습니다.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
          imageEmoji: '🏢',
          location: '베를린, 독일',
          year: '2015',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/startup-campus' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/startup-campus/' }
          ]
        },
        {
          id: 5,
          title: '게오르그 콜베 미술관 확장',
          description: '베를린의 게오르그 콜베 미술관 확장 프로젝트. 기존 건물과의 조화를 이루면서도 현대적인 전시 공간을 제공합니다.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
          imageEmoji: '🎨',
          location: '베를린, 독일',
          year: '2012',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/georg-kolbe-museum' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/georg-kolbe-museum-extension/' }
          ]
        },
        {
          id: 6,
          title: '울름 시공사',
          description: '울름 시공사의 새로운 본사 건물. 에너지 효율성과 지속가능성을 고려한 현대적 오피스 건축입니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏗️',
          location: '울름, 독일',
          year: '2013',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/stadtwerke-ulm' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/stadtwerke-ulm/' }
          ]
        },
        {
          id: 7,
          title: '단포스 유니버스',
          description: '덴마크의 과학 테마파크. 건축과 과학 교육이 결합된 혁신적인 공간으로, 방문자들에게 상호작용적인 경험을 제공합니다.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
          imageEmoji: '🔬',
          location: '노르보르, 덴마크',
          year: '2007',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/danfoss-universe' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/danfoss-universe/' }
          ]
        },
        {
          id: 8,
          title: '오스트필더른 시청',
          description: '오스트필더른의 새로운 시청 건물. 공공 공간과 행정 기능을 통합한 현대적 시정 건축입니다.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
          imageEmoji: '🏛️',
          location: '오스트필더른, 독일',
          year: '2010',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/town-hall-ostfildern' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/town-hall-ostfildern/' }
          ]
        },
        {
          id: 9,
          title: '멘사 몰트케',
          description: '카를스루에 공과대학의 학생 식당. 유기적인 형태와 밝은 색상이 특징인 현대적 캠퍼스 건축입니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🍽️',
          location: '카를스루에, 독일',
          year: '2007',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/mensa-moltke' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/mensa-moltke/' }
          ]
        },
        {
          id: 10,
          title: '빌라 듀플리',
          description: '듀플리 카사와 함께 설계된 주거 프로젝트. 디지털 설계 기법을 통해 전통적인 주거 형태를 현대적으로 재해석했습니다.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
          imageEmoji: '🏡',
          location: '루트비히스부르크, 독일',
          year: '2008',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/villa-dupli' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/villa-dupli/' }
          ]
        },
        {
          id: 11,
          title: '샤른하우저 파크',
          description: '오스트필더른의 주거 단지 개발 프로젝트. 지속가능한 도시 계획과 현대적 주거 디자인을 결합했습니다.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
          imageEmoji: '🏘️',
          location: '오스트필더른, 독일',
          year: '2004',
          links: [
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/scharnhauser-park/' }
          ]
        },
        {
          id: 12,
          title: '쿤스트할레 만하임',
          description: '만하임의 현대 미술관. 기존 건물을 확장하고 현대화한 프로젝트로, 다양한 전시 공간을 제공합니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🖼️',
          location: '만하임, 독일',
          year: '2018',
          pdf: '/Juergen Mayer H -02.pdf',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/kunsthalle-mannheim' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/kunsthalle-mannheim/' }
          ]
        },
        {
          id: 13,
          title: '데이터 보호청',
          description: '베를린의 데이터 보호청 건물. 프라이버시와 투명성의 개념을 건축적으로 표현한 공공 건축물입니다.',
          image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop',
          imageEmoji: '🔒',
          location: '베를린, 독일',
          year: '2010',
          links: [
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/data-protection-agency/' }
          ]
        },
        {
          id: 14,
          title: 'ZKM 미디어 아트 센터',
          description: '카를스루에의 미디어 아트 센터. 디지털 기술과 예술이 만나는 공간으로, 다양한 미디어 아트 작품을 전시합니다.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
          imageEmoji: '💻',
          location: '카를스루에, 독일',
          year: '1997',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/tag/zkm' },
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/zkm-media-art-center/' }
          ]
        },
        {
          id: 15,
          title: 'SW35 변환 프로젝트',
          description: '1970년대 건물을 현대적으로 변환한 프로젝트. 기존 건물의 외피를 재해석하여 새로운 공간을 만듭니다.',
          image: 'https://jmayerh.de/files/2022/02/sw35-10-2021-0093-stw-1536x1024.jpg',
          imageEmoji: '🏗️',
          location: '베를린, 독일',
          year: '2021',
          pdf: '/Juergen Mayer H -01.pdf',
          links: [
            { name: 'J. MAYER H. 공식', url: 'https://www.jmayerh.de/projects/sw35/' }
          ]
        }
      ],
      countryCode: 'de'
    },
    {
      id: 2,
      name: 'Pezo von Ellrichshausen',
      nationality: '칠레',
      period: '2002 - 현재',
      style: '미니멀리즘',
      description: '기하학적 형태와 재료의 본질을 탐구하는 칠레의 건축가. 단순함 속에서 발견되는 공간의 깊이를 추구합니다.',
      notableWorks: ['LUNA House', 'Solo House', 'Casa Poli', 'Casa Cien', 'ARCO House', 'Meri House', 'NIDA House'],
      works: [
        {
          id: 1,
          title: 'LUNA House',
          description: '안데스 산맥 기슭에 자리 잡은 이 건물은 크기도 하고 작기도 합니다. 사실, 눈에 띄는 내진 이음매로 서로 분리된 열두 개의 다른 건물의 집합체입니다. 이 콘크리트 블록의 모음을 집이라고 부르는 것은 너무 단순할 것입니다. 박물관이라고 부르는 것은 너무 겸손할 것입니다. 세속적인 종류 외에도, 이 건물군은 오히려 수도원에 가깝습니다.',
          image: 'https://images.adsttc.com/media/images/64a5/5c8f/3e4b/3101/9a5f/5c5e/large_jpg/casa-luna-pezo-von-ellrichshausen_1.jpg?1688573073',
          imageEmoji: '🌙',
          location: 'Yungay, 칠레',
          year: '2023',
          pdf: '/Pezo von Ellichshausen.pdf',
          links: [
            { name: 'Dezeen', url: 'https://www.dezeen.com/2023/05/06/luna-house-pezo-von-ellrichshausen/' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/obras/casa-luna-en-yungay#' },
            { name: 'Hic Arquitectura', url: 'https://hicarquitectura.com/2023/06/pezo-von-ellrichshausen-luna-house/' }
          ]
        },
        {
          id: 2,
          title: 'LAMA Pavilion',
          description: '관찰과 명상을 위한 관측소 형태의 파빌리온.',
          image: 'https://images.adsttc.com/media/images/64a5/5c8f/3e4b/3101/9a5f/5c5e/large_jpg/casa-luna-pezo-von-ellrichshausen_1.jpg?1688573073',
          imageEmoji: '🔭',
          location: 'Yungay, 칠레',
          year: '2023',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/1007469/lama-pavilion-pezo-von-ellrichshausen?ad_medium=gallery' },
            { name: 'STIRworld', url: 'https://www.stirworld.com/see-features-pezo-von-ellrichshausens-lama-pavilion-an-observatory-modelled-for-contemplation' }
          ]
        },
        {
          id: 3,
          title: 'ROSA Pavilion',
          description: '발견된 오브제, 구식 해시계 형태의 파빌리온.',
          image: 'https://images.adsttc.com/media/images/64a5/5c8f/3e4b/3101/9a5f/5c5e/large_jpg/casa-luna-pezo-von-ellrichshausen_1.jpg?1688573073',
          imageEmoji: '🌹',
          location: 'Yungay, 칠레',
          year: '2022',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/1009710/lama-pavilion-pezo-von-ellrichshausen' },
            { name: 'STIRworld', url: 'https://www.stirworld.com/see-features-rosa-pavilion-by-pezo-von-ellrichshausen-is-a-found-object-an-obsolete-sundial' }
          ]
        },
        {
          id: 4,
          title: 'INES Innovation Center',
          description: '혁신을 위한 현대적 교육 시설.',
          image: 'https://images.adsttc.com/media/images/5f8a/5c0e/b357/65c6/9a00/00a3/large_jpg/ines-innovation-center-pezo-von-ellrichshausen_1.jpg?1602778126',
          imageEmoji: '🏛️',
          location: 'Concepción, 칠레',
          year: '2021',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/958300/ines-innovation-center-pezo-von-ellrichshausen?ad_medium=gallery' },
            { name: 'Afasia Archzine', url: 'https://afasiaarchzine.com/2022/04/pezo-von-ellrichshausen-ines-innovation-center-concepcion/' }
          ]
        },
        {
          id: 5,
          title: 'RAEM House',
          description: '기하학적 순수성을 추구하는 주거 건축.',
          image: 'https://images.adsttc.com/media/images/6305/32f0/dfb6/310c/870d/b498/large_jpg/raem-house-pezo-von-ellrichshausen_1.jpg?1661284080',
          imageEmoji: '🏠',
          location: 'Curacavi, 칠레',
          year: '2021',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/987781/raem-house-pezo-von-ellrichshausen/' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-raem-en-curacavi' },
            { name: 'C3 Globe', url: 'https://c3globe.com/raem-house-by-pezo-von-ellrichshausen/' }
          ]
        },
        {
          id: 6,
          title: 'LESS Pavilion',
          description: '미니멀리즘의 극치를 보여주는 파빌리온.',
          image: 'https://images.adsttc.com/media/images/62f4/0a3e/3e4b/3101/9a5f/5c5e/large_jpg/less-pavilion-pezo-von-ellrichshausen_1.jpg?1660120126',
          imageEmoji: '🎭',
          location: 'Canberra, 호주',
          year: '2021',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/986687/less-pavilion-pezo-von-ellrichshausen?ad_medium=gallery' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/pabellon-less-en-camberra' },
            { name: 'Dezeen', url: 'https://www.dezeen.com/2022/08/29/pezo-von-ellrichshausen-less-pavilion-canberra/' }
          ]
        },
        {
          id: 7,
          title: '메덩골 (Medongaule)',
          description: '한국의 과거와 현재를 중심으로 위대한 사상가의 철학적 교훈을 담은 정원 프로젝트. 인문학 키워드를 전면에 내세운 세계적으로 유례를 찾기 어려운 정원.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🌿',
          location: '한국',
          year: '2019~',
          links: [
            { name: 'Studio JT', url: 'https://studio-jt.co.kr/projects/medongaule/' },
            { name: 'Medongaule', url: 'https://medongaule.com/' }
          ]
        },
        {
          id: 8,
          title: 'UBERHAUS',
          description: '현대적 주거 프로젝트.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏘️',
          location: '칠레',
          year: '2019~',
          links: []
        },
        {
          id: 9,
          title: 'Making New History',
          description: '시카고 건축 비엔날레 참여 작품. "half tower and half plinth" 형태의 독특한 구조.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏛️',
          location: 'Chicago, 미국',
          year: '2018',
          links: [
            { name: 'Designboom', url: 'https://www.designboom.com/architecture/chicago-architecture-biennial-pezo-von-ellrichshausen-watercolors-finite-format-09-15-2017/' }
          ]
        },
        {
          id: 10,
          title: 'Loba House',
          description: '어쩌면 사물과 물건 사이의 유일한 구별은 그 크기에 있을지도 모릅니다. 모호한 크기 속에서 자연물에 더 가까운 이 작은 건물은 오두막보다는 크고 집보다는 작으니, 바로 코티지입니다. 불투명한 덩어리, 벼랑 끝에 굳건히 자리 잡은 단일체의 오브제로서, 태평양의 바다사자 보호구역을 마주보고 있습니다.',
          image: 'https://images.adsttc.com/media/images/5a8a/5c0e/b357/65c6/9a00/00a3/large_jpg/loba-house-pezo-von-ellrichshausen_1.jpg?1518960142',
          imageEmoji: '🏚️',
          location: 'Tome, 칠레',
          year: '2017',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/891760/loba-house-pezo-von-ellrichshausen' },
            { name: 'Archiweb', url: 'https://www.archiweb.cz/en/b/dum-loba' }
          ]
        },
        {
          id: 11,
          title: 'RODE House',
          description: '기하학적 형태와 본질에 대한 존중을 중심으로 디자인된 주거 건축.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏠',
          location: 'Chonchi, 칠레',
          year: '2017',
          links: [
            { name: 'Divisare', url: 'https://divisare.com/projects/375589-pezo-von-ellrichshausen-rode-house' }
          ]
        },
        {
          id: 12,
          title: 'Hull Pavilion',
          description: '영국 헐에 위치한 파빌리온.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🎪',
          location: 'Kingston upon Hull, 영국',
          year: '2017',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/883141/hall-pavilion-pezo-von-ellrichshausen?ad_medium=gallery' }
          ]
        },
        {
          id: 13,
          title: 'Bell Pavilion',
          description: '예술을 위한 후드 형태의 파빌리온.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🔔',
          location: 'Vitry-Sur-Seine, 프랑스',
          year: '2017',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/877982/bell-pavilion-pezo-von-ellrichshausen' },
            { name: 'Detail', url: 'https://www.detail.de/de_de/huelle-fuer-kunst-bell-pavilion-von-pezo-von-ellrichshausen-30731' }
          ]
        },
        {
          id: 14,
          title: 'Exterior, Solo Galerie',
          description: '파리 솔로 갤러리의 외부 공간.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🖼️',
          location: 'Paris, 프랑스',
          year: '2017',
          links: [
            { name: 'Divisare', url: 'https://divisare.com/projects/349529-pezo-von-ellrichshausen-exterior' }
          ]
        },
        {
          id: 15,
          title: 'VARA Pavilion',
          description: '베니스 비엔날레 참여 작품. 문화와 건축, 실패의 수용, 건축가의 역할에 대한 철학을 담은 파빌리온.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🎨',
          location: 'Venice, 이탈리아',
          year: '2016',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/793225/pezo-von-ellrichshausen-discuss-their-philosophy-of-human-scaled-architecture?ad_medium=gallery' },
            { name: 'Design and Architecture', url: 'https://www.designandarchitecture.com/article/vara-pavilion-by-mauricio-pezo-amp-sofia-von-ellrichshausen.html' },
            { name: 'Afasia Archzine', url: 'https://afasiaarchzine.com/pezo-von-ellrichshausen-vara-pavilion-venezia-10/' }
          ]
        },
        {
          id: 16,
          title: 'Deci Pavilion',
          description: '작은 규모에도 불구하고, 이 야심찬 탑은 바벨탑의 옹벽, 지구라트, 등대, 거대한 받침돌, 또는 더 이상 쓰이지 않는 망원경 관측소 등 다양한 상상 속 이야기를 떠올리게 합니다. 하지만 이 탑은 분명하고 묵묵히 서 있는 건축물이며, 단 한 명의 거주자가 머물 수 있는 충분한 공간을 갖추고 있습니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🗼',
          location: 'Paris, 프랑스',
          year: '2016',
          links: [
            { name: 'Divisare', url: 'https://divisare.com/projects/329860-pezo-von-ellrichshausen-deci-pavilion' }
          ]
        },
        {
          id: 17,
          title: 'Finite Format: Ceske Budejovice Gallery',
          description: '"유한한 형식(Finite Format)"과 "무한한 동기(Infinite Motive)"라는 두 부분으로 구성된 전시회. 페조 폰 엘리히스하우젠은 건축을 예술과 과학의 결합, 또 다른 예술적 표현의 형태로 여깁니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🎭',
          location: 'Ceske Budejovice, 체코',
          year: '2015',
          links: [
            { name: 'Dům umění', url: 'https://dumumenicb.cz/en/vystava/pezo-von-ellrichshausen-finite-format-konecny-format-en/' },
            { name: 'Divisare', url: 'https://divisare.com/projects/302365-pezo-von-ellrichshausen-architects-finite-format' }
          ]
        },
        {
          id: 18,
          title: 'NIDA House',
          description: '피라미드를 뒤집은 형태의 독특한 주거 건축.',
          image: 'https://images.adsttc.com/media/images/5f8a/5c0e/b357/65c6/9a00/00a3/large_jpg/nida-house-pezo-von-ellrichshausen_1.jpg?1602778126',
          imageEmoji: '🏔️',
          location: 'Navidad, 칠레',
          year: '2015',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/795020/nida-house-pezo-von-ellrichshausen' },
            { name: 'Architectural Review', url: 'https://www.architectural-review.com/buildings/upend-the-pyramid-nida-house-in-navidad-by-pezo-von-ellrichshausen' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-nida-10' }
          ]
        },
        {
          id: 19,
          title: 'Pavilion CENT',
          description: '시카고에 위치한 파빌리온.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🎪',
          location: 'Chicago, 미국',
          year: '2015',
          links: [
            { name: 'Artsy', url: 'https://www.artsy.net/artwork/pezo-von-ellrichshausen-the-cent-pavilion' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/pabellon-cent-7' }
          ]
        },
        {
          id: 20,
          title: 'Meri House',
          description: 'Pezo von Ellrichshausen이 설계한 메리 하우스는 원래 영구적인 사용을 위해 계획되었으나 가족 상황의 변화로 인해 더 작고 임시적인 용도의 주택으로 변경되었습니다. 이전 프로젝트의 가상적인 발자국 위에 그대로 흔적을 남기면서, 밝고 편안한 분위기를 유지하고자 했습니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏠',
          location: '칠레',
          year: '2014',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/555513/meri-house-pezo-von-ellrichshausen' }
          ]
        },
        {
          id: 21,
          title: 'Pabellón BLUE',
          description: '런던 왕립 예술 아카데미 센싱 스페이스 전시에서 큰 성공을 거둔 파빌리온.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🔵',
          location: 'London, 영국',
          year: '2013',
          links: [
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/pabellon-blue-9' },
            { name: 'Spacemaker Architects', url: 'https://www.spacemakerarchitects.co.uk/sensing-spaces-exhibition-royal-academy-of-arts/' },
            { name: 'ArchDaily', url: 'https://www.archdaily.com/473147/seven-architects-transform-london-s-ra-into-multi-sensory-experience/' }
          ]
        },
        {
          id: 22,
          title: 'Solo House',
          description: '미니멀리즘의 극치를 보여주는 주거 공간. 필수적인 요소만으로 구성된 순수한 건축.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏡',
          location: '스페인',
          year: '2013',
          pdf: '/Pezo von Ellichshausen.pdf',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/489980/solo-house-pezo-von-ellrichshausen?ad_medium=gallery' },
            { name: 'Architectural Record', url: 'https://www.architecturalrecord.com/articles/8541-solo-house' },
            { name: 'The Sibarist', url: 'https://thesibarist.com/en/properties/solo-pezo-%C2%B7-solo-house/' },
            { name: 'Plans Matter', url: 'https://plansmatter.com/view-rentals/solo-house-pezo-von-ellrichshausen-cretas-aragon-spain' }
          ]
        },
        {
          id: 23,
          title: 'Gago House',
          description: '기하학적 형태와 본질에 대한 존중을 중심으로 디자인된 주거 건축.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏠',
          location: '칠레',
          year: '2013',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/492577/gago-house-pezo-von-ellrichshausen?ad_medium=gallery' }
          ]
        },
        {
          id: 24,
          title: 'Mine Pavilon',
          description: '콜로라도에 위치한 지상의 광산 형태 파빌리온.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '⛏️',
          location: 'Denver, 미국',
          year: '2013',
          links: [
            { name: 'Designboom', url: 'https://www.designboom.com/architecture/pezo-von-ellrichshausen-builds-a-mine-above-ground-in-denver-11-18-2013/' }
          ]
        },
        {
          id: 25,
          title: 'Crux Pavilion',
          description: '리스본 건축 트리엔날레 참여 작품.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🎪',
          location: 'Lisbon, 포르투갈',
          year: '2013',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/400086/crux-pavilion-pezo-von-ellrichshausen-architects?ad_medium=gallery' }
          ]
        },
        {
          id: 26,
          title: 'Soft Pavillon',
          description: '일시적인 파빌리온 프로젝트.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '☁️',
          location: 'Anchorage, 미국',
          year: '2011',
          links: [
            { name: 'Urbanocio', url: 'https://urbanocio.wordpress.com/2012/12/03/ephemeral-pezo-von-ellrichshausen/' }
          ]
        },
        {
          id: 27,
          title: 'Cien House',
          description: '기하학적 순수성을 추구하는 주거 건축. 단순한 형태 속에 숨겨진 공간의 깊이를 보여줍니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏠',
          location: '칠레',
          year: '2011',
          pdf: '/Pezo von Ellichshausen_.pdf',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/465633/cien-house-pezo-von-ellrichshausen' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-cien-6' }
          ]
        },
        {
          id: 28,
          title: 'ARCO House',
          description: '아르코 하우스는 2011년 콘셉시온에 지어졌으며, 2010년 지진으로 가장 큰 피해를 입은 지역에 위치합니다. 이 집은 지진으로 집을 잃은 두 예술가 부부를 위해 지어졌으며, 당시 진행 중이던 국가적인 재건축 프로젝트와 마찬가지로 경제성을 최우선으로 고려했습니다. 경제성은 아르코 하우스의 디자인에 깊은 의미를 부여했습니다.',
          image: 'https://images.adsttc.com/media/images/50a8/0c0c/b3fc/4e3a/0a00/0001/large_jpg/arco-house-pezo-von-ellrichshausen_1.jpg?1352833036',
          imageEmoji: '🏗️',
          location: 'Concepción, 칠레',
          year: '2011',
          links: [
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-arco-8' },
            { name: 'Dezeen', url: 'https://www.dezeen.com/2012/11/21/earthquake-proof-house-in-chile-photographed-by-cristobal-palma/' }
          ]
        },
        {
          id: 29,
          title: 'Fosc House',
          description: '기하학적 형태와 본질에 대한 존중을 중심으로 디자인된 주거 건축.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏠',
          location: 'San Pedro de la Paz, 칠레',
          year: '2008',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/38655/fosc-house-pezo-von-ellrichshausen-architects?ad_medium=gallery' },
            { name: 'Architectural Review', url: 'https://www.architectural-review.com/today/casa-fosc-by-pezo-von-ellrichshausen-san-pedro-de-la-paz-concepcion-province-chile' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-fosc-0' }
          ]
        },
        {
          id: 30,
          title: 'Wolf House',
          description: '기하학적 형태와 본질에 대한 존중을 중심으로 디자인된 주거 건축.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🐺',
          location: '칠레',
          year: '2007',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/3184/wolf-house-pezo-von-ellrichshausen-arquitectos' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-wolf-6' }
          ]
        },
        {
          id: 31,
          title: 'Parr House',
          description: '기하학적 형태와 본질에 대한 존중을 중심으로 디자인된 주거 건축.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏠',
          location: '칠레',
          year: '2006',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/12461/parr-house-pezo-von-ellrichshausen-architects?ad_medium=gallery' },
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-parr-1' }
          ]
        },
        {
          id: 32,
          title: 'Casa Poli',
          description: '자연과 건축의 경계를 모호하게 만드는 프로젝트. 풍경을 건축 안으로 끌어들이는 설계. 칠레 산티아고에서 500km 떨어진 태평양의 바위 해안에 위치한 이 놀라운 건물은 스튜디오의 작업을 대표하는 것으로 볼 수 있습니다. 소재, 형태, 빛에 대한 감각, 그리고 주로 목재와 노출 콘크리트라는 제한된 재료가 만들어낸 편안한 공간입니다.',
          image: 'https://images.adsttc.com/media/images/4c5e/8c4a/b3fc/4e3a/0a00/0001/large_jpg/100308_pezo_01.jpg?1284652100',
          imageEmoji: '🌊',
          location: '칠레',
          year: '2005',
          pdf: '/Pezo von Ellichshausen.pdf',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/476/poli-house-pezo-von-ellrichshausen' },
            { name: 'Open House Magazine', url: 'https://openhouse-magazine.com/casa-poli/' }
          ]
        },
        {
          id: 33,
          title: '120D Pavilion',
          description: '120개의 문으로 구성된 파빌리온. 시각 예술과의 뚜렷한 연관성을 보여주는 대지 예술 작품.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🚪',
          location: 'Concepción, 칠레',
          year: '2003',
          links: [
            { name: 'Socks Studio', url: 'https://socks-studio.com/2014/07/08/120-doors-by-pezo-von-ellrichshausen-2003/' }
          ]
        },
        {
          id: 34,
          title: 'Rivo House',
          description: '스튜디오 Pezo von Ellrichshausen 설립 초기 작품.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏠',
          location: '칠레',
          year: '2002',
          links: [
            { name: 'Arquitectura Viva', url: 'https://arquitecturaviva.com/works/casa-rivo-9' }
          ]
        }
      ],
      countryCode: 'cl'
    },
    {
      id: 3,
      name: 'Sou Fujimoto',
      nationality: '일본',
      period: '1971 - 현재',
      style: '미니멀리즘',
      description: '자연과 건축의 경계를 허무는 일본의 건축가. 투명성과 공간의 다층적 해석으로 유명합니다.',
      notableWorks: ['House NA', 'Serpentine Pavilion', 'House N'],
      works: [
        {
          id: 1,
          title: 'House NA',
          description: '투명성과 공간의 다층성을 탐구한 주거 건축. 내부와 외부의 경계를 모호하게 만드는 혁신적 설계.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
          imageEmoji: '🏘️',
          location: '도쿄, 일본',
          year: '2011'
        },
        {
          id: 2,
          title: 'Serpentine Pavilion',
          description: '자연과 인공의 경계를 허무는 파빌리온. 그리드 구조를 통해 새로운 공간 경험을 제공합니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🌳',
          location: '런던, 영국',
          year: '2013'
        },
        {
          id: 3,
          title: 'House N',
          description: '중첩된 공간의 개념을 구현한 주거 건축. 집 안의 집이라는 독특한 공간 구성.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
          imageEmoji: '🏚️',
          location: '오이타, 일본',
          year: '2008'
        }
      ],
      countryCode: 'jp'
    },
    {
      id: 4,
      name: 'BIG',
      nationality: '덴마크',
      period: '2005 - 현재',
      style: '유토피아 건축',
      description: 'Bjarke Ingels Group. 실용적 유토피아를 추구하는 덴마크의 혁신적인 건축 그룹. 지속가능성과 창의성을 결합합니다.',
      notableWorks: ['8 House', 'VIA 57 West', 'CopenHill'],
      works: [
        {
          id: 1,
          title: '8 House',
          description: '도시 주거의 새로운 모델. 사다리꼴 형태로 주거와 상업 공간을 혁신적으로 결합한 프로젝트.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
          imageEmoji: '🏘️',
          location: '코펜하겐, 덴마크',
          year: '2010'
        },
        {
          id: 2,
          title: 'VIA 57 West',
          description: '뉴욕의 스카이라인을 재정의한 주거 건축. 사다리꼴 형태로 도시 속 새로운 경관을 만들어냅니다.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '🏙️',
          location: '뉴욕, 미국',
          year: '2016'
        },
        {
          id: 3,
          title: 'CopenHill',
          description: '쓰레기 소각장을 스키장으로 변환한 프로젝트. 지속가능성과 레크리에이션을 결합한 혁신적 건축.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
          imageEmoji: '⛷️',
          location: '코펜하겐, 덴마크',
          year: '2019'
        }
      ],
      countryCode: 'dk'
    },
    {
      id: 5,
      name: 'Snohetta',
      nationality: '노르웨이',
      period: '1989 - 현재',
      style: '지역주의',
      description: '노르웨이의 건축 및 경관 설계 그룹. 자연과 건축의 조화를 추구하며 지속가능한 디자인으로 유명합니다.',
      notableWorks: ['오페라하우스 오슬로', '알렉산드리아 도서관', '타임스 스퀘어'],
      works: [
        {
          id: 1,
          title: '오페라하우스 오슬로',
          description: '노르웨이의 상징적 건축물. 자연 경관과 건축이 완벽하게 조화를 이루는 현대적 오페라 하우스.',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
          imageEmoji: '🎭',
          location: '오슬로, 노르웨이',
          year: '2008'
        },
        {
          id: 2,
          title: '알렉산드리아 도서관',
          description: '고대 도서관의 정신을 현대적으로 재해석한 프로젝트. 지식과 문화의 새로운 중심지.',
          image: 'https://images.adsttc.com/media/images/51f4/4b0c/e8e4/4e3a/0a00/00b3/large_jpg/1366_1.jpg?1375203084',
          imageEmoji: '📚',
          location: '알렉산드리아, 이집트',
          year: '2002'
        },
        {
          id: 3,
          title: '타임스 스퀘어',
          description: '뉴욕의 심장부를 재설계한 프로젝트. 보행자 중심의 공간으로 도시 경관을 개선했습니다.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
          imageEmoji: '🌆',
          location: '뉴욕, 미국',
          year: '2017'
        }
      ],
      countryCode: 'no'
    },
    {
      id: 6,
      name: 'Henning Larsen (헤닝 라슨)',
      nationality: '덴마크',
      period: '1959 - 현재',
      style: '스칸디나비아 모던 · 문화 건축',
      description: '덴마크를 대표하는 건축 사무소. 빛과 공간, 맥락에 대한 섬세한 접근으로 오페라하우스·콘서트홀·박물관 등 문화 시설에서 두각을 나타냅니다. 지속가능성과 시민을 위한 도시 환경을 중시합니다.',
      notableWorks: ['하르파 콘서트홀', '코펜하겐 오페라하우스', '뫼스고르드 박물관'],
      works: [
        {
          id: 1,
          title: '하르파 콘서트홀',
          description: '레이캬비크 항구의 랜드마크. 올라퍼 엘리아손과 협업한 유리 파사드가 빛과 풍경을 건축으로 끌어들인 문화 시설입니다.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Reykjavik_CONCERT_HALL_PANO_2.jpg/1920px-Reykjavik_CONCERT_HALL_PANO_2.jpg',
          imageEmoji: '🎵',
          location: '레이캬비크, 아이슬란드',
          year: '2011',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/127841/harpa-concert-hall-and-conference-centre-henning-larsen-architects-batterii%C3%B0id-architects' },
            { name: 'Henning Larsen 공식', url: 'https://henninglarsen.com/en/projects/harpa' }
          ]
        },
        {
          id: 2,
          title: '코펜하겐 오페라하우스',
          description: '코펜하겐 항만에 자리한 국립 오페라하우스. 넓은 지붕 경사면이 시민에게 열린 공공 공간으로 이어지는 덴마크의 상징적 문화 건축입니다.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Copenhagen_Opera_House_2014_02.jpg',
          imageEmoji: '🎭',
          location: '코펜하겐, 덴마크',
          year: '2005',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/77800/copenhagen-opera-house-henning-larsen' },
            { name: 'Henning Larsen 공식', url: 'https://henninglarsen.com/en/projects/copenhagen-opera-house' }
          ]
        },
        {
          id: 3,
          title: '뫼스고르드 박물관',
          description: '아르후스 대학 박물관. 지형에 맞게 녹지 지붕으로 이어지는 형태로, 전시 공간과 자연 경관이 하나의 경험으로 연결됩니다.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Moesgaard_Museum%2C_Aarhus_%2810759863185%29.jpg',
          imageEmoji: '🏛️',
          location: '아르후스, 덴마크',
          year: '2014',
          links: [
            { name: 'ArchDaily', url: 'https://www.archdaily.com/502223/moesgaard-museum-henning-larsen-architects' },
            { name: 'Henning Larsen 공식', url: 'https://henninglarsen.com/en/projects/moesgaard-museum' }
          ]
        }
      ],
      countryCode: 'dk'
    }
  ]

  return (
    <div className="architects">
      <div className="architects-header">
        <h1>"안심하십시오. 저는 건축가입니다!"</h1>
        <div className="architect-quote-author">(리처드 로저스)</div>
        <p className="subtitle">세계적인 건축가들의 작품과 철학을 탐구합니다</p>
      </div>

      <section className="architects-note">
        <h2>건축의 다양성</h2>
        <p>
          각 건축가는 고유한 철학과 스타일을 가지고 있습니다. 이들의 작품을 통해 
          건축이 단순한 건물을 넘어 예술, 문화, 사회를 반영하는 매개체임을 알 수 있습니다. 
          세계의 건축가들의 작품을 탐구하며 영감을 얻고, 새로운 관점을 발견해보세요.
        </p>
      </section>

      <div className="architects-grid">
        {architects.map(architect => (
          <div key={architect.id} className="architect-card">
            <div className="architect-header">
              <div className="architect-flag">
                <img 
                  src={`https://flagcdn.com/w40/${architect.countryCode}.png`}
                  alt={architect.nationality}
                  className="flag-image"
                />
              </div>
              <div className="architect-info">
                <h2 
                  className="architect-name clickable"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log('건축가 이름 클릭:', architect.name)
                    if (architect.works && architect.works.length > 0) {
                      console.log('작품 수:', architect.works.length)
                      setSelectedArchitect(architect)
                    } else {
                      console.log('작품이 없습니다')
                    }
                  }}
                >
                  {architect.name.includes('(유르겐 마이어 하)') ? (
                    <>
                      Juergen Mayer H<br />
                      (유르겐 마이어 하)
                    </>
                  ) : (
                    architect.name
                  )}
                </h2>
                <div className="architect-meta">
                  <span className="architect-nationality">{architect.nationality}</span>
                  <span className="architect-period">{architect.period}</span>
                </div>
              </div>
            </div>
            <div className="architect-content">
              <div className="architect-style">
                <strong>스타일:</strong> {architect.style}
              </div>
              <p className="architect-description">{architect.description}</p>
              <div className="architect-works">
                <strong>주요 작품:</strong>
                <ul>
                  {architect.notableWorks.map((work, index) => (
                    <li key={index}>{work}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 건축가 작품 목록 모달 */}
      {selectedArchitect && (
        <div 
          className="architect-works-modal"
          onClick={(e) => {
            console.log('모달 클릭:', e.target.className)
            if (e.target.classList.contains('architect-works-modal')) {
              setSelectedArchitect(null)
            }
          }}
        >
          <div className="architect-works-modal-content">
            <button 
              className="architect-works-modal-close"
              onClick={() => setSelectedArchitect(null)}
            >
              ×
            </button>
            <h2 className="architect-works-modal-title">
              {selectedArchitect.name.includes('(유르겐 마이어 하)') ? (
                <>
                  Juergen Mayer H<br />
                  (유르겐 마이어 하)
                </>
              ) : selectedArchitect.name.includes('(헤닝 라슨)') ? (
                <>
                  Henning Larsen<br />
                  (헤닝 라슨)
                </>
              ) : (
                selectedArchitect.name
              )}의 작품
            </h2>
            <div className="architect-works-list">
              {[...selectedArchitect.works]
                .map((work, originalIndex) => ({ work, originalIndex }))
                .sort((a, b) => {
                  const yearA = parseInt(a.work.year) || 0
                  const yearB = parseInt(b.work.year) || 0
                  return yearB - yearA // 최신순 정렬
                })
                .map(({ work, originalIndex }) => (
                  <div 
                    key={work.id || originalIndex}
                    className="architect-work-item"
                    onClick={() => {
                      setSelectedArchitect(null)
                      setSelectedWork({
                        architect: selectedArchitect,
                        workIndex: originalIndex,
                        work: work
                      })
                    }}
                  >
                    <div className="architect-work-year">{work.year}</div>
                    <div className="architect-work-info">
                      <h3 className="architect-work-title">{work.title}</h3>
                      <p className="architect-work-location">{work.location}</p>
                      <p className="architect-work-description">{work.description}</p>
                    </div>
                    <div className="architect-work-image">
                      {work.image && work.image.startsWith('http') ? (
                        <img 
                          src={work.image} 
                          alt={work.title}
                          className="architect-work-thumbnail"
                        />
                      ) : (
                        <div className="architect-work-emoji">
                          {work.imageEmoji || work.image || '🏛️'}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {selectedWork && (
        <div 
          className="work-fullscreen"
          onClick={() => {
            const currentArchitect = selectedWork.architect
            const currentIndex = selectedWork.workIndex
            const nextIndex = (currentIndex + 1) % currentArchitect.works.length
            setSelectedWork({
              architect: currentArchitect,
              workIndex: nextIndex,
              work: currentArchitect.works[nextIndex]
            })
          }}
        >
          <div className="work-fullscreen-content">
            <button 
              className="work-fullscreen-close"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedWork(null)
              }}
            >
              ×
            </button>
            <div className="work-fullscreen-image">
              {selectedWork.work.pdf ? (
                <iframe
                  src={`${selectedWork.work.pdf}#toolbar=0`}
                  className="work-pdf-viewer"
                  title={selectedWork.work.title}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : selectedWork.work.image && selectedWork.work.image.startsWith('http') ? (
                <img 
                  src={selectedWork.work.image} 
                  alt={selectedWork.work.title}
                  className="work-image-fullscreen"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              ) : null}
              {!selectedWork.work.pdf && (
              <div 
                className="work-icon-large"
                style={{ display: selectedWork.work.image && selectedWork.work.image.startsWith('http') ? 'none' : 'flex' }}
              >
                {selectedWork.work.imageEmoji || selectedWork.work.image || '🏛️'}
              </div>
              )}
            </div>
            <div className="work-fullscreen-info">
              <h2 className="work-fullscreen-title">{selectedWork.work.title}</h2>
              <div className="work-fullscreen-meta">
                <span className="work-location">{selectedWork.work.location}</span>
                <span className="work-year">{selectedWork.work.year}</span>
              </div>
              <p className="work-fullscreen-description">{selectedWork.work.description}</p>
              {selectedWork.work.pdf && (
                <div className="work-fullscreen-pdf-link">
                  <a
                    href={selectedWork.work.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-pdf-download-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    📄 PDF 파일 다운로드
                  </a>
                </div>
              )}
              {selectedWork.work.links && selectedWork.work.links.length > 0 && (
                <div className="work-fullscreen-links">
                  <h3>관련 링크</h3>
                  <div className="work-links-list">
                    {selectedWork.work.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <div className="work-fullscreen-navigation">
                <span className="work-counter">
                  {selectedWork.workIndex + 1} / {selectedWork.architect.works.length}
                </span>
                <p className="work-click-hint">클릭하여 다음 작품 보기</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Architects

