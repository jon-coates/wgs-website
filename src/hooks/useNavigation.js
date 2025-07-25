import { useNavigate, useLocation } from 'react-router-dom';

const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (hash) => {
    if (location.pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return { navigateToSection };
};

export default useNavigation; 