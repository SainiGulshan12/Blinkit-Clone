import React from 'react';
import '../CSS/innerCompoCombine.css';
import { Container, Row, Col } from 'react-bootstrap';
import min from '../../assets/productItems/15-mins.png'


function Baby() {
    const leftPartProducts = [
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1000_1685686698390.png",
            title: "Diapers & More",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1001_1643447265532.png",
            title: "Bathing Needs",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/996_1676379098477.png",
            title: "Baby Wipes",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1590_1643447293757.png",
            title: "Baby Food",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1002_1643447281696.png",
            title: "Skin & Hair Care",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/169_1643447211741.png",
            title: "Feeding Essential",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/998_1643447239357.png",
            title: "Oral & Nasal Care",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/597_1676379033591.png",
            title: "Nursing",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/88da2974-1dc0-4e90-b8c3-1d989c9b49c2.png",
            title: "Baby Gifting & Toys",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/85_1643447197842.png",
            title: "Hygiene",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/1967_1643447304766.png",
            title: "Mom Care Needs",
        },
        {
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/app/images/category/cms_images/icon/997_1643447226919.png",
            title: "Health & Safety",
        },
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1707980337522-11",
            title: "Baby Accessories & Apparel",
        },
        {
            img: "https://cdn.grofers.com/app/images/category/cms_images/504de542-2433-426b-8c5b-ae71fc830534.",
            title: "Baby Gear",
        }
    ];
    const babyCareProducts = [
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ef4d9786-6a6c-45fa-960c-2f40910a74b3.jpg?ts=1721891701",
            title: "MamyPoko Pants Extra Absorb Diaper (M, 7-...",
            quantity: '1 pack (42 pieces)',
            price: "₹555",
            delprice: "₹749"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/65a68796-ea24-4a91-8366-37da52be9a48.jpg?ts=1722142631",
            title: "MamyPoko Pants Standard Diaper (L, 9..",
            quantity: "1 pack (44 pieces)",
            price: "₹432",
            delprice: "₹599"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/94780e1f-236f-4632-99e0-bdfa49cc9d3f.jpg?ts=1746550877",
            title: "Pampers Premium Care Diaper (Pants, L,..",
            quantity: "1 pack (44 pieces)",
            price: "₹980",
            delprice: "₹1499"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/47bcf961-9a85-4da3-b615-8a7f03226bf8.jpg?ts=1732264348",
            title: "Huggies Complete Comfort Wonder...",
            quantity: "1 pack (13 pieces)",
            price: "₹166",
            delprice: "₹199"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/08faefaf-b520-401a-acc5-4a5ac5a57413.jpg?ts=1746995835",
            title: "MamyPoko Pants Extra Absorb Diaper (L, 9-1..",
            quantity: "1 pack (36 pieces)",
            price: "₹563",
            delprice: "₹749"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/7baa992d-c364-437a-a439-e15bb1e5944a.jpg?ts=1746551231",
            title: "Pampers Premium Care Diaper (Pants, X..",
            quantity: "1 pack (36 pieces)",
            price: "₹982",
            delprice: "₹1499"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b4c08e41-605c-41d3-99b5-3e2ee4341631.jpg?ts=1719989609",
            title: "Little's Comfy Baby Diaper (Pants, XL, 12-..",
            quantity: "1 pack (24 pieces)",
            price: "₹285",
            delprice: "₹449"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b15fc996-cc64-4caf-879b-fcf97a226df3.jpg?ts=1720377316",
            title: "MamyPoko Pants Standard Diaper (S,4...",
            quantity: "1 pack (60 pieces)",
            price: "₹426",
            delprice: "₹599"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/6a8488ac-6dff-4bf3-93a8-6b805bebd598.jpg?ts=1746995845",
            title: "MamyPoko Pants Extra Absorb Diaper (L, 9-...",
            quantity: "1 pack (64 pieces)",
            price: "₹992",
            delprice: "₹1399"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8d30a830-7d34-4452-a451-2b9d61531d15.jpg?ts=1720377351",
            title: "MamyPoko Pants Standard Diaper (M,7...",
            quantity: "1 pack (48 pieces)",
            price: "₹448",
            delprice: "₹599"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cc4e2dcd-a399-4c45-8684-e979cf2213dd.jpg?ts=1719989583",
            title: "Little's Comfy Baby Diaper (Pants, M, 7-...",
            quantity: "1 pack (32 pieces)",
            price: "₹289",
            delprice: "₹449"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/64f111ed-9363-42ac-af67-08d3eaac87fc.jpg?ts=1746090716",
            title: "Pampers All Round Protection Diaper Pants x...",
            quantity: "1 pack (26 pieces)",
            price: "₹656",
            delprice: "₹899"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/deac6fad-d0ef-409a-a38e-43cd2be26559.jpg?ts=1746995874",
            title: "Padigree Pro Adult Small Breed Dog Foo...",
            quantity: "1 pack (74 pieces)",
            price: "₹1,057",
            delprice: "₹1,399"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a31fd377-1b0b-4717-b324-dd067ff87b4d.jpg?ts=1719989690",
            title: "HUFT Sara's Wholesome Classic...",
            quantity: "1 pack (22 pieces)",
            price: "₹299",
            delprice: "₹449"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d8feaa92-da0a-4e85-afb2-85d52724b3f2.jpg?ts=1746090705",
            title: "Chappi Chicken And Rice Adult dog Food",
            quantity: "1 pack (56 pieces)",
            price: "₹1,065",
            delprice: "₹1,449"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/82684baf-7468-4876-9fcc-ae699a4b6022.jpg?ts=1746551283",
            title: "Kennel Kitchen Chicken Recipe with Pumpkin...",
            quantity: "1 pack (30 pieces)",
            price: "₹981",
            delprice: "₹1,449"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/cc4be10e-cfe7-4303-9c98-761c9ab20cb3.jpg?ts=1732264338",
            title: "Padigree Pro Adult Small Breed Dog Foo...",
            quantity: "1 pack (16 pieces)",
            price: "₹169",
            delprice: "₹199"
        },
        {
            Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/96f82d4d-718d-43ac-8432-5eda1d58b1b5.jpg?ts=1719989596",
            title: "Padigree Adult Dog Food -Meat & Rice",
            quantity: "1 pack (30 pieces)",
            price: "₹314",
            delprice: "₹449"
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
                            {babyCareProducts.map((rollingItems, index) => (
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
                            <h1>Buy Diapers & More at <span>Online grocery store</span> in india</h1>
                            <p className="mb-1">Are you super fond of online shopping because you hate crowded supermarkets? Now you don't need to be worry as Blinkit is delivering Diapers & More at your doorstep superfast with easy returns for your complete peace of mind.</p>
                            <p className="mb-1">Get Diapers & More delivered to your home in minutes. you can check Diapers & More price before buying.</p>
                            <p className="mb-1">We deliver Diapers & More at Delhi, Gurgaon, Kolkata, Lucknow, Mumbai, Bengaluru, Ahmedabad, Noida, Ghaziabad, Faridabad, Hyderabad, Jaipur, Pune, Chennai, Chandigarh, Ludhiana, Vadodara, Meerut, Kanpur, Panchkula, Kharar, Amritsar, Bhopal, Indore, Zirakpur, Jalandhar, Dehradun, Agra, Mohali, Goa, Patiala, Sonipat, Bhiwadi, Kota, Rohtak, Bahadurgarh, Haridwar, Bathinda, Kochi, Jodhpur</p>
                            <p className="mb-1">Buy from several popular brands like <span>Pampers, Huggies, Little's.</span></p>
                        </div>
                        <div className="priceList">
                            <h1>Diapers & More Price List</h1>
                            <div className="d-flex align-items-center">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>Diapers & More</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1. <span>MamyPoko Pants Extra Absorb Diaper (M, 7-12 kg, 42 pieces)</span></td>
                                            <td>Rs.555</td>
                                        </tr>
                                        <tr>
                                            <td>2. <span>MamyPoko Pants Standard Diaper (L, 9-14 kg)</span></td>
                                            <td>RS.432</td>
                                        </tr>
                                        <tr>
                                            <td>3. <span>Pampers Premium Care Diaper (Pants, L, 9-14 kg)</span></td>
                                            <td>Rs.980</td>
                                        </tr>
                                        <tr>
                                            <td>4. <span>Huggies Complete Comfort Wonder Diaper (Pants, XL, 12-17 kg)</span></td>
                                            <td>Rs.166</td>
                                        </tr>
                                        <tr>
                                            <td>5. <span>MamyPoko Pants Extra Absorb Diaper (L, 9-14 kg, 36 pieces)</span></td>
                                            <td>Rs.563</td>
                                        </tr>
                                        <tr>
                                            <td>6. <span>Pampers Premium Care Diaper (Pants, XL, 12-17 kg)</span></td>
                                            <td>Rs.982</td>
                                        </tr>
                                        <tr>
                                            <td>7. <span>Little's Comfy Baby Diaper (Pants, XL, 12-17 kg)</span></td>
                                            <td>Rs.285</td>
                                        </tr>
                                        <tr>
                                            <td>8. <span>MamyPoko Pants Standard Diaper (S, 4-8 kg)</span></td>
                                            <td>Rs.426</td>
                                        </tr>
                                        <tr>
                                            <td>9. <span>MamyPoko Pants Extra Absorb Diaper (L, 9-14 kg, 64 pieces)</span></td>
                                            <td>Rs.992</td>
                                        </tr>
                                        <tr>
                                            <td>10. <span>MamyPoko Pants Standard Diaper (M, 7-12 kg)</span></td>
                                            <td>Rs.448</td>
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

export default Baby;