import "./Orders.scss";
const ListAllOrders = ({ orderInfo, index }) => {
  function convertToISt(order_placed_at) {
    var date = new Date(order_placed_at + " UTC");

    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    var today = new Date(date.toString());

    return today.toLocaleString("en-US", options);
  }
  return (
    <div>
      <div className="container">
        <div className="row text-center justify-content-center mb-3">
          <div className="col-xl-6 col-lg-8">
            <h4 className="card-title">{orderInfo.items[1]}</h4>
            {/* <p className="text-muted">
              ₹{orderInfo.order_amount_final}
             
            </p> */}
            <p>{convertToISt(orderInfo.order_placed_at)}</p>
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
                      Order <br /> Accepted
                    </p>
                  </div>
                </div>

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
                    <p className="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
