import { Link } from "react-router-dom"

export const CallToAction = () => {

  return (
    <div className="call-to-action mt-0 pt-0 py-sm-5 mx-2">
      <div className="container d-flex flex-row justify-content-around flex-wrap ">
        <div className="row">
          <div className="title-call-to-action col-12 me-sm-5">
            <h2>Querés ponerte en contacto con nosotros?</h2>
            <p className="text-call-to-action">No dudes en escribirnos</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Link to="/contact" className="btn btn-primary fw-bolder fs-5 my-4 my-sm-3 my-lg-0 align-top py-2 px-3" >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}