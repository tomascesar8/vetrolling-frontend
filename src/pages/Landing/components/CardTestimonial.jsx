import { Card, Image } from 'react-bootstrap'
import quoteCard from '../../../../public/assets/icons/quote.svg'

export const CardTestimonial = ({ children, subject, image }) => {
  return (
    <Card  style={{ width: '40rem', margin: '2rem', borderRadius: '16px', backgroundColor: '#f5f5f5'}}>
      <Card.Body className='p-0 p-sm-3'>
        <Image
          variant="top" 
          src={quoteCard}
          alt='title'
          width={30} 
          height={30}
          className='mb-3'
        />
        <blockquote className="blockquote mb-0">
          <p className='fs-5'>
            {' '}
            {children}{' '}
          </p>
          <footer className="blockquote-footer mt-3">
            <div className="d-flex flex-row align-items-center gap-2 gap-lg-3 justify-content-start ms-4 ms-sm-3 ms-md-5 mt-4">
              <Image
                  variant="bottom" 
                  src={image}
                  alt='title'
                  width={60} 
                  height={60}
                  roundedCircle
              />
              <div className="d-flex flex-column ms-sm-2">
                <h5>{subject}</h5>
              </div>
            </div>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}