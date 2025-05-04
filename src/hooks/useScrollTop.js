import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // pathname が変更された際に実行
};

export default useScrollTop;