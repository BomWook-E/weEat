import { Map } from 'react-kakao-maps-sdk';

function KakaoMap() {
  return (
    <div>
      <Map
        center={{ lat: 37.5651562, lng: 126.9869995 }} // 위워크를 중심 좌표로
        style={{ width: '800px', height: '600px' }}
        level={3} // 지도 확대 레벨
      ></Map>
    </div>
  );
}

export default KakaoMap;
