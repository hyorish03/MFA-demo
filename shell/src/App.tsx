import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    import('marketing/MarketingHeader')
      .then(() => {
        console.log('✅ MarketingHeader 로드됨');

        // 동적으로 컴포넌트 생성
        const el = document.createElement('marketing-header');
        const container = document.getElementById('marketing-header');
        if (container) {
          container.appendChild(el);
        }
      })
      .catch((err) => {
        console.error('❌ MarketingHeader 로딩 실패:', err);
      });
  }, []);

  return (
    <div>
      <h1>Shell App (React)</h1>
      <div id="marketing-header" />
    </div>
  );
};

export default App;