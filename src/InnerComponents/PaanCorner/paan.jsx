import React from 'react';
import './paan.css';
import '../CSS/innerCompoCombine.css';
import { Container, Row, Col } from 'react-bootstrap';
import tobacco from '../../assets/tobacco-banner.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import min from '../../assets/productItems/15-mins.png';

function paanCorner() {
  const leftPartProducts = [
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1948_1660715272304.png",
      title: "Cigarettes",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1715069589495-3",
      title: "Cigar",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/2517_1699269065444.png",
      title: "Paan Masala",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/34_1689924021784.png",
      title: "Lighters & Accessories",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1982_1649674540853.png",
      title: "Rolling Papers",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/290_1643962132067.png",
      title: "Smoking cessation",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/173_1649419870108.png",
      title: "Hookah Needs",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/136_1689924007585.png",
      title: "Hookah Flavor",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1930_1643444770081.png",
      title: "Candies & Gum",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1933_1643446123003.png",
      title: "Mouth Fresheners",
    },
    {
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/2518_1699269042011.png",
      title: "Tobacco",
    }
  ];
  const rollingProducts = [
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280",
      title: "Ultimate Rolling Paper with Filter Tips &...",
      quantity: "1 pack (32 pieces)",
      price: "₹90"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/661d1bd8-2374-47ad-b231-af4842bd5d50.jpg?ts=1740560975",
      title: "Perfect Rolled Cones (Natural) - Bongchie",
      quantity: "3 pack",
      price: "₹45"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506375a.jpg?ts=1698309252",
      title: "Brown Ripper Rolling Paper 32 Leaves +32..",
      quantity: "1 pack (64 pieces)",
      price: "₹120"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496996a.jpg?ts=1690814374",
      title: "Brown Rolling Paper Cones - Stash Pro",
      quantity: "6 pack",
      price: "₹90"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/16885c6e-1e3d-416f-81ca-f22c2e74ca67.jpg?ts=1743157866",
      title: "Thins Pre-Rolled Rolling Paper By LIT - Pack of 3",
      quantity: "3 x 1 pack",
      price: "₹74"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2607a98a-0b2d-43dc-b5a5-2322540fa309.jpg?ts=1708597803",
      title: "Brown Rolling Paper (King Size) - Stash Pro",
      quantity: "1 unit (32 pieces)",
      price: "₹50"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506376a.jpg?ts=1698309252",
      title: "White Ripper Tipper Rolling Paper with...",
      quantity: "1 pack (32 + 32 pieces)",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312",
      title: "Ultimate Rolling Paper with Filter Tips &",
      quantity: "1 pack (32 Leaves + 32...",
      price: "₹80"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1f3d3cf5-cc98-477d-ad68-7b18bb15ae96.jpg?ts=1735813370",
      title: "Perforated Wide Tips Roach - Raw",
      quantity: "1 pack (50 pieces)",
      price: "₹50"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b814e47e-f7d0-42e9-8b04-f066dc3bded5.jpg?ts=1741079810",
      title: "Brown Classic Slim Rolling Paper (King ",
      quantity: "1 pack (32 pieces)",
      price: "₹80"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d3fbd5a8-4a8e-4bde-ab29-1d6f48d4b9c8.jpg?ts=1735813383",
      title: "Black Slim Rolling Paper (King Size) - Raw",
      quantity: "1 pack (32 pieces)",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fe8c75c8-fd93-4179-bfe6-a742412ee008.jpg?ts=1736510257",
      title: "Pyramid Black Pre Rolled Cones by LIT",
      quantity: "1 unit",
      price: "₹20"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/63d35241-fbb8-40bb-8b95-dcb84a9656e7.jpg?ts=1740658589",
      title: "Perfect Rolling Paper (Pink) - Bongchie",
      quantity: "3 pack",
      price: "₹45"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535600a.jpg?ts=1698309253",
      title: "Ripper Tipper Brown Rolling Paper (Small)..",
      quantity: "1 pack (40  + 40 pieces)",
      price: "₹120"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5b811154-db15-456d-a219-13edaa288ab7.jpg?ts=1725020018",
      title: "Colour Roach - Stash Pro",
      quantity: "32 sheets",
      price: "₹50"
    },
  ];
  return (
    <>
      {/* Policy modal start */}
      <div className="modal fade policy-modal" id="policy" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" >Please make sure...</h1>
            </div>
            <div className="modal-body">
              <div className="agecriteria d-flex mb-3 align-items-center">
                <FontAwesomeIcon icon={faBan} className='icon' />
                <p>You are above 18 years of age and not buying tobacco on behalf of anyone who is a minor (under 18 years of age).</p>
              </div>
              <div className="d-flex mb-3 align-items-center">
                <FontAwesomeIcon icon={faBan} className='icon' />
                <p className="mb-0">Your location is not in and around a school or college premises.</p>
              </div>
              <div className="terms-conditions">We are bound to report your account in case of any transgressions! <br /> <span>Read Terms & Conditions</span></div>
            </div>
            <div className="modal-footer">
              <button className="btn" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
              <button className="btn fillbtn">Yes, I confirm</button>
            </div>
          </div>
        </div>
      </div>
      {/* Policy modal end */}
      <Container className='innerSection'>
        <div className='rollingHeader'>
          <div className="px-0">
            <h2>Buy Rolling Papper Online</h2>
          </div>
        </div>
        <Row>
          <Col className="leftpart">
            <div className="d-flex flex-column justify-content-center">
              {leftPartProducts.map((product, index) => (
                <div className="items" key={index} style={{ wordBreak: "break-word" }}>
                  <div className='img-wrapper'>
                    <img src={product.img} alt={product.title} />
                  </div>
                  <p>{product.title}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col className="rightpart px-0">
            <div className="rollingContainer">
              <div className=" tobaccoImage">
                <img src={tobacco} alt="" data-bs-toggle="modal" data-bs-target="#policy" />
              </div>

              <div>
                <div className="selling-items">
                  {rollingProducts.map((rollingItems, index) => (
                    <div className="item" key={index}>
                      <div className="d-flex justify-content-center">
                        <img src={rollingItems.Image} alt={rollingItems.title} />
                      </div>
                      <div className="mins d-inline-block">
                        <div className="d-flex align-items-center">
                          <img src={min} alt="8-mins" />
                          <p>8 MINS</p>
                        </div>
                      </div>
                      <div className="item-details">
                        <h6 className='detail-h6'>{rollingItems.title}</h6>
                        <p>{rollingItems.quantity}</p>
                        <div className="price d-flex justify-content-between align-items-center">
                          <h6 className='mb-0'>{rollingItems.price}</h6>
                          <button className="btn btn-outline-success">ADD</button>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </Col>
          <div className='bottompart d-flex justify-content-center'>
            <div className="aboutItem">
              <h1>Buy Rolling Paper at <span>Online grocery store</span> in india</h1>
              <p className="mb-1">Are you super fond of online shopping because you hate crowded supermarkets? Now you don't need to be worry as Blinkit is delivering Rolling Paper at your doorstep superfast with easy returns for your complete peace of mind.</p>
              <p className="mb-1">Get Rolling Paper delivered to your home in minutes. you can check Rolling Paper price before buying.</p>
              <p className="mb-1">We deliver Rolling Paper at Delhi, Gurgaon, Kolkata, Lucknow, Mumbai, Bengaluru, Ahmedabad, Noida, Ghaziabad, Faridabad, Hyderabad, Jaipur, Pune, Chennai, Chandigarh, Ludhiana, Vadodara, Meerut, Kanpur, Panchkula, Kharar, Amritsar, Bhopal, Indore, Zirakpur, Jalandhar, Dehradun, Agra, Mohali, Goa, Patiala, Sonipat, Bhiwadi, Kota, Rohtak, Bahadurgarh, Haridwar, Bathinda, Kochi, Jodhpur</p>
              <p className="mb-1">Buy from several popular brands like <span>Bongchie, Stash Pro, LIT.</span></p>
            </div>
            <div className="priceList">
              <h1>Rolling Paper Price List</h1>
              <div className="d-flex align-items-center">
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th>Rolling Paper</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1. <span>Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Unbleached) - Mozo</span></td>
                      <td>Rs.90</td>
                    </tr>
                    <tr>
                      <td>2. <span>Perfect Rolled Cones (Natural) - Bongchie</span></td>
                      <td>RS.45</td>
                    </tr>
                    <tr>
                      <td>3. <span> Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Bleached) - Mozo</span></td>
                      <td>Rs.80</td>
                    </tr>
                    <tr>
                      <td>4. <span>Colour Roach - Stash Pro</span></td>
                      <td>Rs.50</td>
                    </tr>
                    <tr>
                      <td>5. <span>Thins Pre-Rolled Rolling Paper By LIT</span></td>
                      <td>Rs.25</td>
                    </tr>
                    <tr>
                      <td>6. <span>Brown Rolling Paper (King Size) - Stash Pro</span></td>
                      <td>Rs.50</td>
                    </tr>
                    <tr>
                      <td>7. <span>Brown Rolling Paper + Roach with Crushing Tray - Stash Pro</span></td>
                      <td>Rs.222</td>
                    </tr>
                    <tr>
                      <td>8. <span>Super Slim Brown Rolling Paper by Stash Pro</span></td>
                      <td>Rs.55</td>
                    </tr>
                    <tr>
                      <td>9. <span>Agent Red Herbal Smoking Blend by (Earthy) Smoothmix</span></td>
                      <td>Rs.450</td>
                    </tr>
                    <tr>
                      <td>10. <span>Agent Red Herbal Smoking Blend by Smoothmix</span></td>
                      <td>Rs.250</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default paanCorner;
