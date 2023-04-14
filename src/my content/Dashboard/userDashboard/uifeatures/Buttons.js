function Buttons() {
  console.log("buttons");
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">Single color buttons</h4>
                    <p className="card-description">
                      Add class <code>.btn-color</code> for buttons in theme
                      colors
                    </p>
                    <div className="template-demo">
                      <button type="button" className="btn btn-primary">
                        Primary
                      </button>
                      <button type="button" className="btn btn-secondary">
                        Secondary
                      </button>
                      <button type="button" className="btn btn-success">
                        Success
                      </button>
                      <button type="button" className="btn btn-danger">
                        Danger
                      </button>
                      <button type="button" className="btn btn-warning">
                        Warning
                      </button>
                      <button type="button" className="btn btn-info">
                        Info
                      </button>
                      <button type="button" className="btn btn-light">
                        Light
                      </button>
                      <button type="button" className="btn btn-dark">
                        Dark
                      </button>
                      <button type="button" className="btn btn-link">
                        Link
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">Rounded buttons</h4>
                    <p className="card-description">
                      Add class <code>.btn-rounded</code>
                    </p>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-primary btn-rounded btn-fw"
                      >
                        Primary
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary btn-rounded btn-fw"
                      >
                        Secondary
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-rounded btn-fw"
                      >
                        Success
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-rounded btn-fw"
                      >
                        Danger
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-rounded btn-fw"
                      >
                        Warning
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-rounded btn-fw"
                      >
                        Info
                      </button>
                      <button
                        type="button"
                        className="btn btn-light btn-rounded btn-fw"
                      >
                        Light
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark btn-rounded btn-fw"
                      >
                        Dark
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-rounded btn-fw"
                      >
                        Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">Outlined buttons</h4>
                    <p className="card-description">
                      Add class <code>.btn-outline-color</code> for outline
                      buttons
                    </p>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-fw"
                      >
                        Primary
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-fw"
                      >
                        Secondary
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-success btn-fw"
                      >
                        Success
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-fw"
                      >
                        Danger
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-warning btn-fw"
                      >
                        Warning
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-info btn-fw"
                      >
                        Info
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-light btn-fw"
                      >
                        Light
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-dark btn-fw"
                      >
                        Dark
                      </button>
                      <button type="button" className="btn btn-link btn-fw">
                        Link
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h4 className="card-title">Inverse buttons</h4>
                    <p className="card-description">
                      Add class{" "}
                      <code>.btn-inverse-color for inverse buttons</code>
                    </p>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-inverse-primary btn-fw"
                      >
                        Primary
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-secondary btn-fw"
                      >
                        Secondary
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-success btn-fw"
                      >
                        Success
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-danger btn-fw"
                      >
                        Danger
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-warning btn-fw"
                      >
                        Warning
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-info btn-fw"
                      >
                        Info
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-light btn-fw"
                      >
                        Light
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-dark btn-fw"
                      >
                        Dark
                      </button>
                      <button type="button" className="btn btn-link btn-fw">
                        Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="row">
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">Icon Buttons</h4>
                    <p className="card-description">
                      Add class <code>.btn-icon</code> for buttons with only
                      icons
                    </p>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button
                        type="button"
                        className="btn btn-primary btn-rounded btn-icon"
                      >
                        <i className="ti-home"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark btn-rounded btn-icon"
                      >
                        <i className="ti-world"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-rounded btn-icon"
                      >
                        <i className="ti-email"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-info btn-rounded btn-icon"
                      >
                        <i className="ti-star"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-rounded btn-icon"
                      >
                        <i className="ti-location-pin"></i>
                      </button>
                    </div>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button
                        type="button"
                        className="btn btn-inverse-primary btn-rounded btn-icon"
                      >
                        <i className="ti-home"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-dark btn-icon"
                      >
                        <i className="ti-world"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-danger btn-icon"
                      >
                        <i className="ti-email"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-info btn-icon"
                      >
                        <i className="ti-star"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-inverse-success btn-icon"
                      >
                        <i className="ti-location-pin"></i>
                      </button>
                    </div>
                    <div className="template-demo d-flex justify-content-between flex-nowrap mt-4">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-heart text-danger"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-music-alt text-dark"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-star text-primary"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-bar-chart-alt text-info"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up text-success"></i>
                      </button>
                    </div>
                    <div className="template-demo d-flex justify-content-between flex-nowrap">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-heart"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-music-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-star"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-bar-chart-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-rounded btn-icon"
                      >
                        <i className="ti-stats-up"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="card-body">
                    <h4 className="card-title">Button Size</h4>
                    <p className="card-description">
                      Use class <code>.btn-size</code>
                    </p>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg"
                      >
                        btn-lg
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-md"
                      >
                        btn-md
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        btn-sm
                      </button>
                    </div>
                    <div className="template-demo mt-4">
                      <button type="button" className="btn btn-danger btn-lg">
                        btn-lg
                      </button>
                      <button type="button" className="btn btn-success btn-md">
                        btn-md
                      </button>
                      <button type="button" className="btn btn-primary btn-sm">
                        btn-sm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Block buttons</h4>
                <p className="card-description">
                  Add class <code>.btn-block</code>
                </p>
                <div className="template-demo">
                  <button
                    type="button"
                    className="btn btn-info btn-lg btn-block"
                  >
                    Block buttons
                    <i className="ti-menu float-right"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Block buttons
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    <i className="ti-user"></i>
                    Block buttons
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg btn-block"
                  >
                    Block buttons
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buttons;
