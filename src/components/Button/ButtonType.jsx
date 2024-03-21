import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ButtonType = ({ types, handleClick,className, children }) => {
  return (
    <Button 
      type={types} 
      onClick={handleClick}
      className={className}
      link={Link}
    >
      {children}
    </Button>
  )
}


