import { Card, Image } from 'react-bootstrap'

export const CardTestimonial = ({ children, subject, image }) => {
  return (
    <Card  style={{ width: '40rem', margin: '2rem', borderRadius: '16px', backgroundColor: '#f5f5f5'}}>
      <Card.Body>
        <Image
          variant="top" 
          src='/public/assets/icons/quote.svg'
          alt='title'
          width={30} 
          height={30}
          className='mb-3'
        />
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {children}{' '}
          </p>
          <footer className="blockquote-footer mt-3">
            <div className="d-flex flex-row align-items-center gap-4">
              <Image
                  variant="bottom" 
                  src={image}
                  alt='title'
                  width={60} 
                  height={60}
                  roundedCircle
              />
              <div className="d-flex flex-column">
                <h5>{subject}</h5>
              </div>
            </div>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}