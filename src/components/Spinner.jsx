function BootstrapSpinner() {
    return (
      <div className="container col-12 d-flex justify-content-center" style={{minWidth:500}}>
          <div className="spinner-border" style={{minWidth:30, minHeight:30, marginTop: 200, marginBottom:300}} role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
      </div>
    );
  }
  
  export default BootstrapSpinner;