import { Button } from 'react-bootstrap';

export const ButtonType = ({ types, handleClick,className, children }) => {
  return (
    <Button 
      type={types} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </Button>
  )
}


