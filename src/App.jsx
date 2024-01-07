import image1 from "../src/assets/1 (17).jpg";
import image2 from "../src/assets/1 (26).jpg";
import image3 from "../src/assets/1 (23).jpg";
import image4 from "../src/assets/1 (4).jpg";
import image5 from "../src/assets/1 (25).jpg";
import image6 from "../src/assets/1 (6).jpg";
import image7 from "../src/assets/1 (18).jpg";
import image8 from "../src/assets/1 (8).jpg";
import image9 from "../src/assets/1 (9).jpg";
import image10 from "../src/assets/1 (10).jpg";
import image11 from "../src/assets/1 (11).jpg";
import image12 from "../src/assets/1 (12).jpg";
import image13 from "../src/assets/1 (13).jpg";
import image14 from "../src/assets/1 (14).jpg";
import image15 from "../src/assets/1 (7).jpg";
import image16 from "../src/assets/1 (16).jpg";
import image23 from "../src/assets/1 (30).jpg";
import image24 from "../src/assets/1 (31).jpg";
import image25 from "../src/assets/1 (32).jpg";
import image26 from "../src/assets/1 (33).jpg";
import image27 from "../src/assets/WhatsApp Image.jpg";
import image28 from "../src/assets/WhatsApp Image 21.jpg";
import image29 from "../src/assets/WhatsApp Image 20.jpg";
import image22 from "../src/assets/1-removebg-preview.png";

function App() {
  return (
    <div className="mb-5">
      <div className="container-fluid m-0 p-0">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide sliderImg"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image27} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image28} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={image29} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container card my-5 pb-3">
        <h4 className="h4 pt-3 mb-3 ms-2 fs-3">Daily deals</h4>
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image1} />
              <div className="card-body">
                <p className="card-title">Apple Iphone 14 Pro Max</p>
                <h5>₦1,723,000</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image2} />
              <div className="card-body">
                <p className="card-title">Ps4 Controllers Pad Wireless</p>
                <h5>₦12,000</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image3} />
              <div className="card-body">
                <p className="card-title">Hp 15 VICTUS GAMING, 13TH GEN</p>
                <h5>₦1,450,000</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image4} />
              <div className="card-body">
                <p className="card-title">GATWIGA Casual Backpack</p>
                <h5>₦5,000</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image5} />
              <div className="card-body">
                <p className="card-title">
                  XIAOMI Redmi Note 12 Pro 6.67&rdquo;
                </p>
                <p className="card-title">6GB RAM/128GB ROM Android 13</p>
                <h5>₦249,500</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image6} />
              <div className="card-body">
                <p className="card-title">Hollandia Yoghurt Plain Sweetened</p>
                <p className="card-title">1Lx10</p>
                <h5>₦9,795</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image7} />
              <div className="card-body">
                <p className="card-title">
                  Apple IPhone 14 Pro Max 6.7&rdquo; 6GB
                </p>
                <p className="card-title">1TB ROM Nano SIM -Space Black</p>
                <h5>₦1,860,999</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card h-100 text-center">
              <img className="align-self-center" width={200} src={image8} />
              <div className="card-body">
                <p className="card-title">Good Mama 850g</p>
                <h5>₦1,000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New section */}
      <div className="container  card my-4 pb-3">
        <h4 className="h4 ms-2 pt-3 mb-4 fs-3">Popular products</h4>
        <div className="row g-2">
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image9} />
              <div className="card-body">
                <p className="card-title">Some title</p>
                <h5>₦750</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image10} />
              <div className="card-body">
                <p className="card-title">Some title</p>
                <h5>₦2,358</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image11} />
              <div className="card-body">
                <p className="card-title">Some title</p>
                <h5>₦15,000</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image12} />
              <div className="card-body">
                <p className="card-title">Some title</p>
                <h5>₦24,200</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image13} />
              <div className="card-body">
                <p className="card-title">XIAOMI Redmi A2+ 6.71&rdquo;</p>
                <p className="card-title">RAM/32GB ROM Android 12 - Black</p>
                <h5>₦66,800</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 text-nowrap">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image14} />
              <div className="card-body">
                <p className="card-title">XIAOMI Redmi 12 6.7&rdquo; 8GB RAM</p>
                <p>128GB ROM Android 13 - Midnight Black</p>
                <h5>₦180,000</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image15} />
              <div className="card-body">
                <p className="card-title">Jik Bleach (Perfumed Stain Remover</p>
                <p>& Germ Killer) - 950ml</p>
                <h5>₦1,780</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card text-center">
              <img className="align-self-center" width={200} src={image16} />
              <div className="card-body">
                <p className="card-title">Apple IPhone XS Max 256GB Silver,</p>
                <p>Free Case And Screen Guide</p>
                <h5>₦375,000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New section */}
      <div className="container bg-white py-2 pe-4">
        <div className="row">
          <div className="col-12 col-md-6 p-0 mb-3">
            <div className="row m-0">
              <div className="col-6 ">
                <button className="btn btn-danger">More</button>
                <h3>
                  Microsoft Surface Laptop Studio -14.4&rdquo; - Core 11370H -
                  32GB RAM
                </h3>
                <h3></h3>
              </div>
              <img className="col-6" src={image22} />
            </div>
          </div>
          <div className="col-12 col-md-6 p-0">
            <div className="row row-gap-2 cardColumns">
              <div className="col-6">
                <div className="card">
                  <div className=" mb-2 flx">
                    <img width={100} src={image24} />
                    <h6 className="card-title mt-3">
                      Smart Watch Full Touch Screen Watch - For Android & IOS
                    </h6>
                  </div>
                  <p className="ms-4">₦4,990</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className=" mb-2 flx">
                    <img width={100} src={image23} />
                    <h6 className="card-title">
                      Ace Elec WL82 Bluetooth 5.0 Stereo Headsets
                    </h6>
                  </div>
                  <p>₦15,000</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className=" mb-2 flx">
                    <img width={100} src={image26} />
                    <h5 className="card-title">
                      20KG Dumbell Set With Barbell Extension
                    </h5>
                  </div>
                  <p className="ms-4">37,995</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className=" mb-2 flx">
                    <img width={100} src={image25} />
                    <h5 className="card-title">
                      2024 Mens Casual Board Shoes Running Sneakers -
                      White/Black
                    </h5>
                  </div>
                  <p className="ms-4">₦13,250</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
