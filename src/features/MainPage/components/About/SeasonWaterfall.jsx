import '../../styles/SeasonWaterfall.css';

/**
 * 소개 항목 좌측에 들어가는
 * 계절별 사진 슬라이드 컴포넌트
 */

const SEASON_PHOTO_BASE_PATH = "/seasons_photos";

const SeasonWaterfall = ({ currentSeason }) => {
  // 계절별 사진 개수 (초기설정: 모두 5개)
  const photoCount = { spring: 5, summer: 5, autumn: 5, winter: 5 };

  const getSeasonImages = (season) => {
    const count = photoCount[season] || 0;
    return Array.from({ length: count }, (_, i) => `${season}${i + 1}.jpg`);
  };

  const images = getSeasonImages(currentSeason);

  return (
    <div className="season_waterfall">
      <div className="waterfall_track">
        {[...images, ...images].map((img, i) => (
          <div className="waterfall_item" key={i}>
            <img
              src={`${SEASON_PHOTO_BASE_PATH}/${currentSeason}/${img}`}
              alt={`${currentSeason}-photo-${i}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonWaterfall;