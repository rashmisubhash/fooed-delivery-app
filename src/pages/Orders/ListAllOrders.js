import "./Orders.scss";
const ListAllOrders = ({ orderInfo, index }) => {
  return (
    <div>
      <div className="container">
        <div className="row text-center justify-content-center mb-3">
          <div className="col-xl-6 col-lg-8">
            <h4 className="card-title">{orderInfo.items[1]}</h4>
            <p className="text-muted">
              ₹{orderInfo.order_amount_final}
              {/* We’re very proud of the path we’ve taken. Explore the history that
              made us the company we are today. */}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="row mx-0">
            <div className="col px-0">
              <div
                className="timeline-steps aos-init aos-animate"
                data-aos="fade-up"
              >
                <div
                  className={`timeline-step ${orderInfo.order_status}timeline`}
                >
                  <div
                    className="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2003"
                  >
                    <div
                      className={`inner-circle ${orderInfo.order_status}`}
                    ></div>
                    <p className="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Placed
                    </p>
                  </div>
                </div>
                <div
                  className={`timeline-step ${orderInfo.order_status}timeline`}
                >
                  <div
                    className="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2004"
                  >
                    <div className="inner-circle"></div>
                    <p className="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Accedpted
                    </p>
                  </div>
                </div>
                {/* <div className="timeline-step">
                  <div
                    className="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2005"
                  >
                    <div className="inner-circle"></div>
                    <p className="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Prepping
                    </p>
                  </div>
                </div> */}
                {/* <div className="timeline-step">
                  <div
                    className="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2010"
                  >
                    <div className="inner-circle"></div>
                    <p className="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Dispatched
                    </p>
                  </div>
                </div> */}
                <div
                  className={`timeline-step mb-0 ${orderInfo.order_status}timeline`}
                >
                  <div
                    className="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2020"
                  >
                    <div className="inner-circle"></div>
                    {/* <p className="h6 mt-3 mb-1">2020</p> */}
                    <p className="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-12 mt-3">
              <div className="card">
                <div className="card-horizontal p-3">
                  <div className="img-square-wrapper">
                    <img
                      className="image-item"
                      src={tempOrder.image_url}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-desc px-3 mb-3">
                      <h4 className="card-title">{tempOrder.item_name}</h4>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        .Placed {
          background-color: #919191 !important;
        }
        .Placed::before {
          background-color: #919191 !important;
        }
        .Placedtimeline::before,
        .Placedtimeline::after {
          border-top: 0.25rem dotted #919191 !important;
        }
        .card-horizontal {
          display: flex;
          flex: 1 1 auto;
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default ListAllOrders;
