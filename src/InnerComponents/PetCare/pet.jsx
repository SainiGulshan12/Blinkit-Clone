import React from 'react';
import '../CSS/innerCompoCombine.css';
import { Container, Row, Col } from 'react-bootstrap';
import min from '../../assets/productItems/15-mins.png';

function Pet() {
    const leftPartProducts = [
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1716287986266-3",
            title: "Accessories & Other Supplies",
        },
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717067945707-3",
            title: "Cat Needs",
        },
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717072632680-3",
            title: "Diverse Pet Food",
        },
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717137798882-3",
            title: "Dog Needs",
        },
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717146479043-3",
            title: "Pet Grooming",
        }
    ];
    const petCareProducts = [
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0d99f020-afc0-4be0-ba8f-238255d00289.jpg?ts=1723374769",
            title: "Drolls Focus Super Premium Dog Food...",
            quantity: "1.2 kg",
            price: "₹597",
            delprice: "₹635"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dbf8f7a9-bb70-42e5-8e8e-a502fc23586d.jpg?ts=1746691424",
            title: "Padigree Adult Dog Wet Food -Chicken &...",
            quantity: "30 x 70 g",
            price: "₹1,431",
            delprice: "₹1,500"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/adaddc43-ef95-4b67-918f-581fc77dae1a.jpg?ts=1743575939",
            title: "Drools Adult Dog Wet Food (Chicken Liver...",
            quantity: "150 g",
            price: "₹40"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3e84e597-bc8a-447f-8fb8-43a7944b9f66.jpg?ts=1746691449",
            title: "Padigree Adult Dog Wet Food -Chicken &...",
            quantity: "130 g",
            price: "₹60"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5e78a5d2-530f-42e8-8104-ae32eb56136f.jpg?ts=1708593183",
            title: "Drools Absolute Calcium Bone Dog...",
            quantity: "600 g",
            price: "₹428",
            delprice: "₹450"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c9548920-8502-42ca-ac4c-7d297d306fad.jpg?ts=1741172214",
            title: "Padigree Adult Dog Food - Chicken &...",
            quantity: "3 kg",
            price: "₹694",
            delprice: "₹730"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/859e06da-b13a-4a78-8771-e01cc3443b90.jpg?ts=1744018405",
            title: "Kennel Kitchen Chicken Recipe with Pumpkin...",
            quantity: "12 x 100 g",
            price: "₹630",
            delprice: "₹840"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0749f5d0-de21-4417-b8c1-1b13ef335dfa.jpg?ts=1723375819",
            title: "Drools Chiken & Egg Adult Dry Food -Free...",
            quantity: "3 kg + 1.2 kg",
            price: "₹799",
            delprice: "₹849"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/491943a.jpg?ts=1687501901",
            title: "Drools Absolute Calcium Pet...",
            quantity: "32 pieces",
            price: "₹1,053",
            delprice: "₹1,120"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/58278c42-7d61-4271-b73c-cc2e640aaa8b.jpg?ts=1741172300",
            title: "Padigree Adult Dog Food - vegetable &...",
            quantity: "1.2 kg",
            price: "₹323",
            delprice: "₹340"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/880ee8c1-7664-4217-b065-08d42c39c9ff.jpg?ts=1723379327",
            title: "PurePet Adult Dog Food (Chicken And...",
            quantity: "2.8 kg",
            price: "₹470",
            delprice: "₹499"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/aedb63e6-cf12-4c80-8bb3-f00a31647118.jpg?ts=1741172269",
            title: "Padigree Adult Dog Food - Rice & Meat",
            quantity: "1.2 kg",
            price: "₹323",
            delprice: "₹340"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7830b82d-2f4e-476b-a5ee-13009a05d96d.jpg?ts=1741842251",
            title: "Padigree Pro Adult Small Breed Dog Foo...",
            quantity: "10 kg",
            price: "₹1,375",
            delprice: "₹1,599"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e1e71f49-1cf1-4ee7-a49d-e6652122b60e.jpg?ts=1716992077",
            title: "HUFT Sara's Wholesome Classic...",
            quantity: "100 g",
            price: "₹99"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e2ec4319-6348-418d-bb2e-412d13bbee07.jpg?ts=1723380022",
            title: "Chappi Chicken And Rice Adult dog Food",
            quantity: "2.8 kg",
            price: "₹480",
            delprice: "₹505"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3c48f733-6fe5-45d9-b997-e573459d3ed3.jpg?ts=1743753391",
            title: "Kennel Kitchen Chicken Recipe with Pumpkin...",
            quantity: "100 g",
            price: "₹56",
            delprice: "₹70"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9c2433fc-fde5-45b5-b630-6211c9a83074.jpg?ts=1714652541",
            title: "Padigree Pro Adult Small Breed Dog Foo...",
            quantity: "3 kg",
            price: "₹1140",
            delprice: "₹1200"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5628b4af-e304-4af4-922f-4cbff62fc43a.jpg?ts=1741172227",
            title: "Padigree Adult Dog Food -Meat & Rice",
            quantity: "3 kg",
            price: "₹694",
            delprice: "₹730"
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
                            {petCareProducts.map((rollingItems, index) => (
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
                            <h1>Buy Dog Food & Treats at <span>Online grocery store</span> in india</h1>
                            <p className="mb-1">Are you super fond of online shopping because you hate crowded supermarkets? Now you don't need to be worry as Blinkit is delivering Dog Food & Treats at your doorstep superfast with easy returns for your complete peace of mind.</p>
                            <p className="mb-1">Get Dog Food & Treats delivered to your home in minutes. you can check Dog Food & Treats price before buying.</p>
                            <p className="mb-1">We deliver Dog Food & Treats at Delhi, Gurgaon, Kolkata, Lucknow, Mumbai, Bengaluru, Ahmedabad, Noida, Ghaziabad, Faridabad, Hyderabad, Jaipur, Pune, Chennai, Chandigarh, Ludhiana, Vadodara, Meerut, Kanpur, Panchkula, Kharar, Amritsar, Bhopal, Indore, Zirakpur, Jalandhar, Dehradun, Agra, Mohali, Goa, Patiala, Sonipat, Bhiwadi, Kota, Rohtak, Bahadurgarh, Haridwar, Bathinda, Kochi, Jodhpur</p>
                            <p className="mb-1">Buy from several popular brands like <span>Pedigree, Kennel Kitchen, HUFT.</span></p>
                        </div>
                        <div className="priceList">
                            <h1>Dog Food & Treats Price List</h1>
                            <div className="d-flex align-items-center">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Dog Food & Treats</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1. <span>Drools Focus Super Premium Dog Food (Adult)</span></td>
                                            <td>Rs.597</td>
                                        </tr>
                                        <tr>
                                            <td>2. <span>Pedigree Adult Dog Wet Food -Chicken & Liver Chunks in Gravy flavour</span></td>
                                            <td>RS.1,431</td>
                                        </tr>
                                        <tr>
                                            <td>3. <span>Drools Adult Dog Wet Food (Chicken Liver Chunks in Gravy)</span></td>
                                            <td>Rs.40</td>
                                        </tr>
                                        <tr>
                                            <td>4. <span>Pedigree Adult Wet Dog Food - Chicken & Liver Chunks in Gravy</span></td>
                                            <td>Rs.60</td>
                                        </tr>
                                        <tr>
                                            <td>5. <span>Drools Absolute Calcium Bone Dog Supplement - 40 Pcs</span></td>
                                            <td>Rs.428</td>
                                        </tr>
                                        <tr>
                                            <td>6. <span>Pedigree Adult Dog Food - Chicken & Vegetable</span></td>
                                            <td>Rs.694</td>
                                        </tr>
                                        <tr>
                                            <td>7. <span>Kennel Kitchen Chicken Recipe with Pumpkin Dog Wet Food - Supreme Cuts in Gravy</span></td>
                                            <td>Rs.630</td>
                                        </tr>
                                        <tr>
                                            <td>8. <span> Drools Chicken & Egg Adult Dry Food - Free 1.2 kg</span></td>
                                            <td>Rs.799</td>
                                        </tr>
                                        <tr>
                                            <td>9. <span>Drools Absolute Calcium Pet Supplement</span></td>
                                            <td>Rs.1053</td>
                                        </tr>
                                        <tr>
                                            <td>10. <span>Pedigree Adult Dog Food - Vegetable & Chicken</span></td>
                                            <td>Rs.323</td>
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

export default Pet;