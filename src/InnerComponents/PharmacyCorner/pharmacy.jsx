import React from 'react';
import '../CSS/innerCompoCombine.css';
import { Container, Row, Col } from 'react-bootstrap';
import min from '../../assets/productItems/15-mins.png';

function pharmacy() {
    const leftPartProducts = [
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/741_1697295733939.png",
            title: "Sexual Wellness",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/75_1698664223270.png",
            title: "Cough & Cold",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/289_1697295770250.png",
            title: "Everyday Medicines",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/298_1697295806885.png",
            title: "Digestive Care",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/62_1697295823137.png",
            title: "Healthcare Devices",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/629_1643447524816.png",
            title: "Adult Diapers",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/293_1681475109894.png",
            title: "Vitamins & Daily Nutrition",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/308_1681837991970.png",
            title: "Protein & Sports Supplements",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/155_1697295835701.png",
            title: "Wound Care And Pain Relief",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1121_1643447561911.png",
            title: "Antiseptic Liquid",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/326_1697295842766.png",
            title: "Oral Health & Eye Care",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/199_1697295848549.png",
            title: "Skin Treatment",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1826_1643447577409.png",
            title: "Marks & Sanatizers",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/960_1689245796579.png",
            title: "Milk Drinks",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/290_1643962132067.png",
            title: "Smoking Cessation",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/306_1680756285198.png",
            title: "Pre & Post Workout",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1109_1643445639946.png",
            title: "Herbal Drinks",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/295_1697295854333.png",
            title: "Beauty Supplements",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/292_1697295862516.png",
            title: "Hralth Supplement Assortment",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1135_1643884256823.png",
            title: "Chyawan prash",
        },
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1710432257090-3",
            title: "Hangover Cure",
        }
    ];
    const sanatizerProducts = [
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/31342263-d2f7-457f-b775-d00a9106fba7.jpg?ts=1726207888",
            title: "Dettol Original Instant Hand Sanitizer",
            quantity: "50 ml",
            price: "₹34",
            delprice: "₹35"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9f62fc41-e229-4f38-8473-d82a1902969b.jpg",
            title: "Control D N95 Mask (White)",
            quantity: "1 unit",
            price: "₹40",
            delprice: "₹50"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/dc4b3243-6c75-4c7c-866d-908c5ce34b4f.jpg?ts=1728284718",
            title: "Filixtrue Disposable 3 Ply Mask (Blue)",
            quantity: "1 pack (5 pieces)",
            price: "₹170",
            delprice: "₹499"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/fcb70da7-162b-4dd8-8a87-3b86fef5d902.jpg",
            title: "Control D N95 Mask (5 pcs, White)",
            quantity: "1 unit",
            price: "₹50",
            delprice: "₹250"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/02eec309-b274-4d8a-b7a4-f4435a7cf174.jpg",
            title: "Hicks 5 in 1 Filteration N95 Mask (White)",
            quantity: "1 pack (100 pieces)",
            price: "₹388",
            delprice: "₹88"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5bca0a86-b939-4672-92fd-c5e0431fb0fb.jpg",
            title: "Filixtrue Disposable Surgical 3 Ply Mask",
            quantity: "1 pack (50 pieces)",
            price: "₹242",
            delprice: "₹990"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/68342a.jpg?ts=1681470730",
            title: "Dettol Original Alcohol Based Hand Sanitizer",
            quantity: "200 ml",
            price: "₹119",
            delprice: "₹125"
        }
        ,
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/436986a.jpg?ts=1688471128",
            title: "Savlon BIS Certified FFP2 Mask...",
            quantity: "1 pack (4 pieces)",
            price: "₹342",
            delprice: "₹360"
        }
    ];
    return (
        <>
            <Container className='innerSection'>
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
                        <div className="selling-items">
                            {sanatizerProducts.map((rollingItems, index) => (
                                <div className="item" key={index}>
                                    <div className="d-flex justify-content-center flex-column">
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
                                            <div className="d-flex flex-column">
                                                <h6 className='mb-0'>{rollingItems.price}</h6>
                                                <h6 className='mb-0 delprice' ><del>{rollingItems.delprice}</del></h6>
                                            </div>
                                            <button className="btn btn-outline-success">ADD</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <div className='bottompart d-flex justify-content-center'>
                        <div className="aboutItem">
                            <h1>Buy Masks & Sanitizers at <span>Online grocery store</span> in india</h1>
                            <p className="mb-1">Are you super fond of online shopping because you hate crowded supermarkets? Now you don't need to be worry as Blinkit is delivering Masks & Sanitizers at your doorstep superfast with easy returns for your complete peace of mind. </p>
                            <p className="mb-1">Get Masks & Sanitizers delivered to your home in minutes. you can check Masks & Sanitizers price before buying.</p>
                            <p className="mb-1">We deliver Masks & Sanitizers at Delhi, Gurgaon, Kolkata, Lucknow, Mumbai, Bengaluru, Ahmedabad, Noida, Ghaziabad, Faridabad, Hyderabad, Jaipur, Pune, Chennai, Chandigarh, Ludhiana, Vadodara, Meerut, Kanpur, Panchkula, Kharar, Amritsar, Bhopal, Indore, Zirakpur, Jalandhar, Dehradun, Agra, Mohali, Goa, Patiala, Sonipat, Bhiwadi, Kota, Rohtak, Bahadurgarh, Haridwar, Bathinda, Kochi, Jodhpur</p>
                            <p className="mb-1">Buy from several popular brands like <span>Dettol, Control D, Filixtrue.</span></p>
                        </div>
                        <div className="priceList">
                            <h1>Masks & Sanitizers Price List</h1>
                            <div className="d-flex align-items-center">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Masks & Sanitizers</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1. <span>Dettol Original Instant Hand Sanitizer</span></td>
                                            <td>RS.34</td>
                                        </tr>
                                        <tr>
                                            <td>2. <span>Control D N95 Mask (White)</span></td>
                                            <td>RS.40</td>
                                        </tr>
                                        <tr>
                                            <td>3. <span>Filixtrue Disposable 3 Ply Mask (Blue)</span></td>
                                            <td>Rs.242</td>
                                        </tr>
                                        <tr>
                                            <td>4. <span>Control D N95 Mask (5 pcs, White)</span></td>
                                            <td>Rs.170</td>
                                        </tr>
                                        <tr>
                                            <td>5. <span>Hicks 5 in 1 Filteration N95 Mask (White)</span></td>
                                            <td>Rs.50</td>
                                        </tr>
                                        <tr>
                                            <td>6. <span>Filixtrue Disposable Surgical 3 Ply Mask</span></td>
                                            <td>Rs.388</td>
                                        </tr>
                                        <tr>
                                            <td>7. <span>Dettol Original Alcohol Based Hand Sanitizer</span></td>
                                            <td>Rs.119</td>
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

export default pharmacy;