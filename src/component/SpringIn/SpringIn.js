import { useSpring, animated as a } from 'react-spring';
import './SpringIn.css';

const SpringIn = ({ children }) => {
  const animatedProps = useSpring({
    opacity: 1,
    marginTop: 5,
    from: { marginTop: -200, opacity: 0 },
    config: { mass: 1, tension: 150, friction: 10 },
  });
  return (
    <a.div classname="spring-in" style={{ ...animatedProps }}>
      {children}
    </a.div>
  );
};

export default SpringIn;
