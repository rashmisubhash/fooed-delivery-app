import "./Orders.scss";
const ListAllOrders = ({ orderInfo, index }) => {
  const tempOrder = {
    item_name: "Veg Fried Rice",
    restaurant_id: "R0001",
    item_id: "IT0002",
    ID: "A00007",
    image_url:
      "http://awssatraining.s3-website-us-east-1.amazonaws.com/veg_manchurian.jfif",
    //   "http://awssatraining.s3-website-us-east-1.amazonaws.com/veg_fried_rice.jfif",
    menu_id: "M0001",
    Type: "Item",
    order_amount_final: "120",
  };

  return (
    <div>
      {/* {orderInfo.order_amount_final} */}

      <div class="container">
        <div class="row text-center justify-content-center mb-3">
          <div class="col-xl-6 col-lg-8">
            <h4 class="card-title">{tempOrder.item_name}</h4>
            <p class="text-muted">
              Rs {tempOrder.order_amount_final}
              {/* We’re very proud of the path we’ve taken. Explore the history that
              made us the company we are today. */}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div class="row mx-0">
            <div class="col px-0">
              <div
                class="timeline-steps aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2003"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Placed
                    </p>
                  </div>
                </div>
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2004"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Accedpted
                    </p>
                  </div>
                </div>
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2005"
                  >
                    <div class="inner-circle"></div>
                    <p class="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Prepping
                    </p>
                  </div>
                </div>
                <div class="timeline-step">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2010"
                  >
                    <div class="inner-circle"></div>
                    {/* <p class="h6 mt-3 mb-1">2010</p> */}
                    <p class="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Dispatched
                    </p>
                  </div>
                </div>
                <div class="timeline-step mb-0">
                  <div
                    class="timeline-content"
                    data-toggle="popover"
                    data-trigger="hover"
                    data-placement="top"
                    title=""
                    data-content="And here's some amazing content. It's very engaging. Right?"
                    data-original-title="2020"
                  >
                    <div class="inner-circle"></div>
                    {/* <p class="h6 mt-3 mb-1">2020</p> */}
                    <p class="h6 text-muted mb-0 mb-lg-0">
                      Order <br /> Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="container-fluid">
          <div class="row">
            <div class="col-12 mt-3">
              <div class="card">
                <div class="card-horizontal p-3">
                  <div class="img-square-wrapper">
                    <img
                      className="image-item"
                      src={tempOrder.image_url}
                      alt="Card image cap"
                    />
                  </div>
                  <div class="card-body">
                    <div className="card-desc px-3 mb-3">
                      <h4 class="card-title">{tempOrder.item_name}</h4>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
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
