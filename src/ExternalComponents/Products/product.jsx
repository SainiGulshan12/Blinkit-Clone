import React, { useRef, useState } from 'react';
import './product.css';
import { Container, Row, Col } from 'react-bootstrap';
import Min from '../../assets/productItems/15-mins.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Product() {
  const dairyProducts = [
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      title: "Amul Taaza Toned Milk",
      quantity: "500 ml",
      price: "₹29",
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
      title: "Amul Masti Pouch Curd",
      quantity: "400 g",
      price: "₹35"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      title: "Amul Gold Full Cream Milk",
      quantity: "500 ml",
      price: "₹35"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562",
      title: "Mother Dairy Toned Milk",
      quantity: "500 ml",
      price: "₹29"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
      title: "Amul Salted Butter",
      quantity: "100 g",
      price: "₹60"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/329549a.jpg?ts=1690805806",
      title: "Mother Dairy Classic Cup Curd",
      quantity: "400 g",
      price: "₹50"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ba929c05-aba2-4838-b674-e2072089022b.jpg?ts=1712325614",
      title: "Mother Dairy Cow Milk",
      quantity: "500 ml",
      price: "₹30"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913",
      title: "Mother Dairy Classic Pouch Curd",
      quantity: "400 g",
      price: "₹35"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",
      title: "Harvest Gold - White Bread",
      quantity: "350 g",
      price: "₹30"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6d41a6e4-eb1b-413c-8e20-7b9e892e42f8.jpg?ts=1712325555",
      title: "Amul Taaza Homogenised Toned...",
      quantity: "1 ltr",
      price: "₹71",
      delprice: "74"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8f6bfafc-ad44-422a-8e96-7e2d2994012a.jpg?ts=1707998856",
      title: "Mother Dairy Full Cream Fresh Milk",
      quantity: "500 ml",
      price: "₹34"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592",
      title: "Amul Cow Fresh Milk",
      quantity: "500 ml",
      price: "₹30"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5147b440-045d-4452-92ce-1d9d7c406ebd.jpg?ts=1741079774",
      title: "Harvest Gold 100% Atta Whole Wheat Bread",
      quantity: "450 g",
      price: "₹60"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/dd323cc7-d00c-48d0-9323-72cde5e1837e.jpg?ts=1723142318",
      title: "English Oven Zero maida 100% Atta/...",
      quantity: "400 g",
      price: "₹55"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/987e28e2-ca19-493a-9a1f-8dd09865b160.jpg?ts=1739354504",
      title: "Table White Eggs",
      quantity: "10 pieces",
      price: "₹77"
    }
  ];
  const tobaccoProducts = [
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
  const snacksProducts = [
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/bc76ce9d-9d2c-42eb-a1d5-6464618fe978.jpg?ts=1723100846",
      title: "Kab's Jackpot Fiery And crunchy Crisps",
      quantity: "80 g",
      price: "₹65"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ff2acf02-4008-4fc5-b411-d7927cf92fd7.jpg?ts=1724850868",
      title: "Kettle Studio Mature Cheddar & Red Onions...",
      quantity: "56 g",
      price: "₹47"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f9b56bd0-dabb-4064-8b3b-4666c912aa5a.jpg?ts=1718012570",

      title: "Takis Fuego Tortilla Chips",
      quantity: "92.3 g",
      price: "₹549"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/31e68f60-d84b-4f85-8b4a-7e76abb52b1e.jpg?ts=1731479533",
      offerImage: "https://sdmntprwestus.oaiusercontent.com/files/00000000-fe98-6230-a1cc-e7baef19c57d/raw?se=2025-05-16T09%3A17%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-15T21%3A21%3A04Z&ske=2025-05-16T21%3A21%3A04Z&sks=b&skv=2024-08-04&sig=bFqQo9enx%2BahuaMIGZl/SDJNsvzOEZ/ZkoRqHJd3Z8M%3D",
      title: "Protein Chef Madras Namkeen Mixture High..",
      quantity: "90 g",
      price: "₹69",
      delprice: "₹75",
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/033d8394-849a-4a07-a712-79a50df9bd51.jpg?ts=1723098570",
      title: "Kettle Studio Potato Chips - Himalyan Pink...",
      quantity: "113 g",
      price: "₹99"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6265c933-0619-4ce1-ae4b-6c9336902295.jpg?ts=1723098571",
      title: "Kettle Studio Rock Sea Salt & English Vinegar...",
      quantity: "113 g",
      price: "₹99"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/79f7319a-f048-48db-ab5a-00a6d2911ea3.jpg?ts=1723098575",
      title: "Kettle Studio Crushed Peprika with Exotic...",
      quantity: "113 g",
      price: "₹99"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a0f592fe-d783-42e1-b1a4-1efccdc52721.jpg?ts=1723100072",
      title: "DOKi Kerala Fry Buffalo Jerky",
      quantity: "30 g",
      price: "₹199"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/88679327-6d68-4836-9f07-1f3d660605ee.jpg?ts=1723100069",
      title: "DOKi Korean Gochujang Buffalo Jerky",
      quantity: "30 g",
      price: "₹199"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802",
      title: "Cheetos Flamin Hot Crunchy Puffs",
      quantity: "28.3 g",
      price: "₹161"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f20b4670-e147-4af7-8a25-c5e30ad860c2.jpg?ts=1723100071",
      title: "DOKi Tokyo Teriyaki Buffalo Jerky",
      quantity: "30 g",
      price: "₹199"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6807f54d-f711-49ca-9635-514ac9b72d7f.jpg?ts=1724850859",
      title: "Kettle Studio Sharp Jalapenos & Cream...",
      quantity: "56 g",
      price: "₹47"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/62cb6b91-8546-4088-a819-7706beca81e8.jpg?ts=1740397576",
      title: "Lo! Foods Gluten Free Millet Ragi Chips...",
      quantity: "75 g",
      price: "₹91"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1f3a0e5b-26f8-4f7d-a0c0-e6410f763ab5.jpg?ts=1735649560",
      title: "Moi Soi White Rice Paper",
      quantity: "100 g",
      price: "₹174"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c4486d68-0ed2-43f0-9214-851063495eb5.jpg?ts=1723098569",
      title: "Kettle Studio Sweet Chilli With Lime & Basil..",
      quantity: "113 g",
      price: "₹99"
    },
  ]
  const hookahProducts = [
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/61eb3cc7-6bd1-4ba9-b03c-44e4c8a0f8a3.jpg?ts=1736847234",
      title: "Instant Ignite Magic Coal by Bongchie",
      quantity: "1 pack (10 pieces)",
      price: "₹80"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480934a.jpg?ts=1688628164",
      title: "Double Apple Herbal Hookah Flavor...",
      quantity: "50 g",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/496995a.jpg?ts=1690814532",
      title: "Premium Magic Coal By Stash Pro",
      quantity: "1 pack (10 pieces)",
      price: "₹80"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e4bfe80f-bc8f-4be3-a5bb-627bb15f72d6.jpg?ts=1736944389",
      title: "Calm - Blueberry Non-Tobacco Herbal...",
      quantity: "10 g",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535601a.jpg?ts=1698309253",
      title: "Coconut Hookah Coal Cubes by Stash Pro",
      quantity: "18 pieces",
      price: "₹140"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/535602a.jpg?ts=1698309253",
      title: "Flat Coconut Hookah Coal Cubes by Stash...",
      quantity: "30 pieces",
      price: "₹140"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480933a.jpg?ts=1688628164",
      title: "Kiwi Herbal Hookah Flavor (Tobacco Free)...",
      quantity: "50 g",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480929a.jpg?ts=1687951095",
      title: "Watermelon Herbal Hookah Flavor...",
      quantity: "50 g",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480930a.jpg?ts=1687333267",
      title: "Bombay Paan Masala Herbal Hookah Flavor...",
      quantity: "50 g",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/540986a.jpg",
      title: "Premium Silver Hookah Foil by Rhythm Imports",
      quantity: "1 pack (30 pieces)",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/532051a.jpg",
      title: "Pumpkin Hookah /Sheesha by Rhythm...",
      quantity: "1 unit",
      price: "₹700"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/480932a.jpg?ts=1688628164",
      title: "Natural Spring Water Herbal Hookah Flavor...",
      quantity: "50 g",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a72dc76a-da20-41ad-a49f-6f7857ea39b1.jpg?ts=1736944392",
      title: "Calm - Paan Non-Tobacco Herbal...",
      quantity: "10 g",
      price: "₹100"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3d94e222-6c7a-45c7-b1d3-99e3329cb5f5.jpg?ts=1729442035",
      title: "Organic Mud Hookah Chillum by Smokey Lust",
      quantity: "1 unit",
      price: "75"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/540990a.jpg",
      title: "Hookah Premium Plastic Filters by Rhythm..",
      quantity: "1 unit (20 pieces)",
      price: "₹150"
    },
  ]
  const mouthFreshenersProducts = [
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/30982570-f57e-4117-b65e-1471dd16815e.jpg?ts=1718623374",
      title: "Tulsi Royal Khajoor Plus Flip-Top Can",
      quantity: "30 g",
      price: "₹50"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9dfff4f5-de84-4a3c-9cef-6d8e504cbf89.jpg?ts=1723143406",
      title: "Rajnigandha Silver Pearls - Silver Coated...",
      quantity: "6 g",
      price: "₹60"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8a823951-2bcd-4469-9efb-c44a92b3ece7.jpg?ts=1737723495",
      title: "Trident Original Flavour Gum",
      quantity: "1 pack (14 pieces)",
      price: "₹160"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c0162e6-b82e-4bdc-a2ab-ff2ed8102d20.jpg",
      title: "Chandan Elaichi Saunf Mouth Freshener",
      quantity: "100 g",
      price: "₹48"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ac3d1c56-641d-4877-9d8e-cf1d8c3dd287.jpg?ts=1737349571",
      title: "Trident Spearmint Gum (Sugar Free)",
      quantity: "1 pack (14 pieces)",
      price: "₹180"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/486345a.jpg?ts=1687951086",
      title: "Impact Sugar Free Mint Candy (Strong Mints)",
      quantity: "14 g",
      price: "₹149"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363212a.jpg?ts=1690814160",
      title: "Impact Sugar Free Mint Candy (Ice Mints)",
      quantity: "14 g",
      price: "₹149"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/498984a.jpg?ts=1686566080",
      title: "Spraymintt Icymint Mouth Freshener",
      quantity: "15 g",
      price: "₹99"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/206540a.jpg?ts=1687437714",
      title: "Pass Pass Sweet Magic Mix Mouth Freshenerr",
      quantity: "105 g",
      price: "₹70"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363211a.jpg?ts=1690813897",
      title: "Impact Sugar Free Mint Candy (Fresh Mints)",
      quantity: "14 g",
      price: "₹149"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f77ef89d-0a4f-4a42-9a57-a2c0108a237d.jpg?ts=1737275566",
      title: "Trident Tropical Twist Gum (Sugar Free)",
      quantity: "1 pack (14 pieces)",
      price: "₹180"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/363209a.jpg?ts=1690815071",
      title: "Impact Sugar Free Mint Candy (Strawberry)",
      quantity: "14 g",
      price: "₹149"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/163972a.jpg?ts=1690813224",
      title: "Impact Sugar Free Mint Candy (Peach)",
      quantity: "14 g",
      price: "₹149"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b06b8269-b0f2-4887-8106-f49d5695fc12.jpg?ts=1720016904",
      title: "GO DESI Meetha Paan Desi Mints",
      quantity: "1 piece",
      price: "80"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/745d561f-2f87-4ec7-9ff0-605db8875ca8.jpg?ts=1738658571",
      title: "Trident Watermelon Twist Gum",
      quantity: "20.6 g(14 x 1.9)",
      price: "₹160"
    },
  ]
  const coldDrinkProducts = [
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6b98633c-7c6a-4708-a372-e2b49da568ab.jpg?ts=1707312322",
      title: "Coca-Cola Soft Drink (750 ml)",
      quantity: "750 ml",
      price: "₹40"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482620a.jpg?ts=1690813234",
      title: "Ice Cubes by Dras Ice",
      quantity: "1 kg",
      price: "₹75"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15288a.jpg?ts=1698840601",
      title: "Coca-Cola Diet Coke Soft Drink",
      quantity: "300 ml",
      price: "₹35"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e69c587d-802a-40eb-a40b-a6bc9623526d.jpg?ts=1707312325",
      title: "Thums Up Soft Drink (750 ml)",
      quantity: "750 ml",
      price: "₹40"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/10b8b01a-8b71-4448-becb-16d4247ef05c.jpg?ts=1707312326",
      title: "Bisleri Packaged Water (1 l)",
      quantity: "1 ltr",
      price: "₹20"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/600dd9ff-659c-4817-87e7-eec1dea72c63.jpg?ts=1706182144",
      title: "Amul Lactose Free Milk",
      quantity: "250 ml",
      price: "₹25"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f41b24f4-b0bd-4e33-bee4-14f9f6b00967.jpg",
      title: "Coca-Cola Diet Coke Soft Drink",
      quantity: "180 ml",
      price: "₹25"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/484783a.jpg?ts=1688628436",
      title: "Coca-Cola Zero Sugar Soft Drink",
      quantity: "750 ml",
      price: "₹39"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f3465fd8-edba-498f-9a33-abe44cf05c94.jpg?ts=1713511877",
      title: "Mother Dairy Probiotic Tadka Salted Buttermi",
      quantity: "4 x 270 ml",
      price: "₹40"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9a7f01e0-e63e-407e-bfc9-449c165f7a1c.jpg?ts=1728051043",
      title: "Limca Lemon 'N' Lime Soft Drink 750 ml",
      quantity: "750 ml",
      price: "₹40"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f87f19e-66da-48cd-8c75-343abf732948.jpg?ts=1707312325",
      title: "Sprite Lime Flavored Soft Drink 750 ml",
      quantity: "750 ml",
      price: "₹40"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/83992e32-722e-4b8d-b6d5-93dc8693df85.jpg?ts=1746007604",
      title: "Kinley Strong Soda Water",
      quantity: "750 ml",
      price: "₹20"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9a33cf3e-72c0-4116-aae8-2eab9e09bf67.jpg?ts=1707312326",
      title: "Aquafina Packaged Water",
      quantity: "1 ltr",
      price: "₹20"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/33366f0a-7903-49a5-adc6-3ea64d234a35.jpg?ts=1745831867",
      title: "Amul Masti Spiced Salted Buttermilk - Pa...",
      quantity: "10 x 1ltr",
      price: "₹693"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/534484a.jpg",
      title: "Sparkling Ice Cubes by Burrf",
      quantity: "1 kg",
      price: "₹70"
    },
  ]
  const candieProducts = [
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/976ffd15-f16b-40b4-beec-da2351b0b8c4.jpg?ts=1710154021",
      title: "Happydent White Spearmint Sugar Free...",
      quantity: "24.2g",
      price: "₹47"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/64546b79-d822-4fc3-ad84-79646b2d03de.jpg?ts=1744804349",
      title: "Orbit Spearmint Flavour Sugar Free Chewing...",
      quantity: "2 x 22 g",
      price: "₹99"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/355debcd-0b19-41ed-9498-918ecc6f3d90.jpg?ts=1744804557",
      title: "Skittles Wild Berry Bite Size Fruit Candy",
      quantity: "30.4 g",
      price: "₹50"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/759d0d59-6626-456e-ba51-f8a16659b494.jpg?ts=1710154020",
      title: "Happydent Sugar Free Wave Fruit Flavour...",
      quantity: "28.9 g",
      price: "₹47"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b8760532-ff5b-4451-aacf-8037ec6da880.jpg?ts=1732624518",
      title: "Chupa Chups Sour Bites Mixed Fruit Candy",
      quantity: "61.6 g",
      price: "₹35"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/24e197a4-11d7-4e15-8ebe-2366aebd2814.jpg?ts=1718182486",
      offerImage: "https://sdmntprwestus.oaiusercontent.com/files/00000000-fe98-6230-a1cc-e7baef19c57d/raw?se=2025-05-16T09%3A17%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-15T21%3A21%3A04Z&ske=2025-05-16T21%3A21%3A04Z&sks=b&skv=2024-08-04&sig=bFqQo9enx%2BahuaMIGZl/SDJNsvzOEZ/ZkoRqHJd3Z8M%3D",
      title: "Chupa Chups Sour Belt Mixed Fruit Candy -...",
      quantity: "3 x 57.6 g",
      price: "₹81",
      delprice: "₹90",
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5cf43365-0827-4882-bcb3-19e611e5e1a9.jpg?ts=1735822670",
      title: "Dabur Hajmola Regular Digestive Tablets",
      quantity: "120 pieces",
      price: "₹68"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d7d64827-1383-4ae6-aedb-d8e637a95785.jpg?ts=1744804630",
      title: "Wrigley's Doublemint Peppermint Chewy Mi...",
      quantity: "30.4 g",
      price: "₹50"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0cdb751e-a797-4f76-ba3d-00a4c6130c19.jpg?ts=1710154019",
      title: "Happydent Wave Sugarfree Mint Chewi...",
      quantity: "28.9 g",
      price: "₹47"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/51a7715c-3413-4e9a-af78-596bf2b32408.jpg?ts=1738336404",
      title: "Sour Punk Blueberry Candy Stick",
      quantity: "40 g",
      price: "₹38"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/73fad8b9-4ad7-45c3-9c8c-d4cf576ab62c.jpg?ts=1739789170",
      title: "M&M's Peanut Candy",
      quantity: "45 g",
      price: "₹139"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/368388a.jpg?ts=1690813231",
      title: "Mentos Pure Fresh Mint Chewing Gum (Sugar...",
      quantity: "54.6 g",
      price: "₹90"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4c442ded-eed4-475e-8b10-4b886528a6e2.jpg?ts=1728289736",
      title: "Pulse Guava Candy",
      quantity: "190 g",
      price: "₹53"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/737c47d4-5c30-4a36-8de3-15b539edcff7.jpg?ts=1726830247",
      offerImage: "https://sdmntprwestus.oaiusercontent.com/files/00000000-fe98-6230-a1cc-e7baef19c57d/raw?se=2025-05-16T09%3A17%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-15T21%3A21%3A04Z&ske=2025-05-16T21%3A21%3A04Z&sks=b&skv=2024-08-04&sig=bFqQo9enx%2BahuaMIGZl/SDJNsvzOEZ/ZkoRqHJd3Z8M%3D",
      title: "Kopiko Cappuccino Candy - Family Pack",
      quantity: "140 g",
      price: "₹45",
      delprice: "₹50"
    },
    {
      Image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/9bcb3c76-82f9-4d54-8709-f2194b102c9a.jpg?ts=1729787861",
      title: "Haribo Goldbears Candy",
      quantity: "140 g",
      price: "₹260"
    },
  ]

  const dairyRef = useRef(null);
  const tobaccoRef = useRef(null);
  const snacksRef = useRef(null);
  const hookahRef = useRef(null);
  const mouthfreshenersRef = useRef(null);
  const coldDrinkRef = useRef(null);
  const candieRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState();

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -1320,
        behavior: 'smooth',
      });
      setIsScrolled(true);
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 1320,
        behavior: 'smooth',
      });
      setIsScrolled(true);
    }
  };


  return (
    <Container className='AllProducts pb-5 '>
      <Row className='dairySection'>
        <Row className='product-heading'>
          <Col lg={12}>
            <h2>Dairy, Bread & Eggs</h2>
            <h4>see all</h4>
          </Col>
        </Row>

        <div className="ItemContainer">
          {isScrolled && (<button className='btn scroll-arrow left' onClick={() => scrollLeft(dairyRef)}><FontAwesomeIcon icon={faAngleLeft} /></button>)}
          <div className='product-items scrollContainer' ref={dairyRef}>
            {dairyProducts.map((product, index) => (
              <div className="item" key={index}>
                <div className="d-flex justify-content-center mb-1">
                  <img src={product.Image} alt={product.title} />
                </div>
                <div className="min d-inline-block mb-1">
                  <div className="d-flex">
                    <img src={Min} alt={Min} />
                    <p>8 MINS</p>
                  </div>
                </div>
                <div className="item-details">
                  <h6 className='detail-h6'>{product.title}</h6>
                  <p>{product.quantity}</p>
                  <div className="cart-price d-flex justify-content-between align-items-center">
                    <h6>{product.price}</h6>
                    <button className="btn">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='btn scroll-arrow right' onClick={() => scrollRight(dairyRef)}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </Row>
      <Row className='tobacco pt-4'>
        <Row className='product-heading'>
          <Col lg={12}>
            <h2>Rolling paper & tobacco</h2>
            <h4>see all</h4>
          </Col>
        </Row>
        <div className="ItemContainer">
          {isScrolled && (<button className='btn scroll-arrow left' onClick={() => scrollLeft(tobaccoRef)}><FontAwesomeIcon icon={faAngleLeft} /></button>)}
          <div className='product-items scrollContainer' ref={tobaccoRef} >
            {tobaccoProducts.map((product, index) => (
              <div className="item" key={index}>
                <div className="d-flex justify-content-center mb-2">
                  <img src={product.Image} alt={product.title} />
                </div>
                <div className="min d-inline-block mb-1">
                  <div className="d-flex">
                    <img src={Min} alt={Min} />
                    <p>8 MINS</p>
                  </div>
                </div>
                <div className="item-details">
                  <h6 className='detail-h6'>{product.title}</h6>
                  <p>{product.quantity}</p>
                  <div className="cart-price d-flex justify-content-between align-items-center">
                    <h6>{product.price}</h6>
                    <button className="btn">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='btn scroll-arrow right' onClick={() => scrollRight(tobaccoRef)}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </Row>
      <Row className='snacks pt-4'>
        <Row className='product-heading'>
          <Col lg={12}>
            <h2>Snacks & Munchies</h2>
            <h4>see all</h4>
          </Col>
        </Row>
        <div className="ItemContainer">
          {isScrolled && (<button className='btn scroll-arrow left' onClick={() => scrollLeft(snacksRef)}> <FontAwesomeIcon icon={faAngleLeft} /> </button>)}
          <div className='product-items scrollContainer' ref={snacksRef}>
            {snacksProducts.map((product, index) => (
              <div className="item" key={index}>
                <div className=" position-relative mb-2">
                  {product.offerImage && <img src={product.offerImage} alt="Offer" className='offer-img' />}
                  <img src={product.Image} alt={product.title} className='product-img' />
                </div>
                <div className="min d-inline-block mb-1">
                  <div className="d-flex">
                    <img src={Min} alt={Min} />
                    <p>8 MINS</p>
                  </div>
                </div>
                <div className="item-details">
                  <h6 className='detail-h6'>{product.title}</h6>
                  <p>{product.quantity}</p>
                  <div className="cart-price d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <h6 className='mb-0'>{product.price}</h6>
                      <h6 className='mb-0 delprice'><del>{product.delprice}</del></h6>
                    </div>
                    <button className="btn">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='btn scroll-arrow right' onClick={() => scrollRight(snacksRef)}> <FontAwesomeIcon icon={faAngleRight} /> </button>
        </div>
      </Row>
      <Row className='hookah pt-4'>
        <Row className='product-heading'>
          <Col lg={12}>
            <h2>Hookah</h2>
            <h4>see all</h4>
          </Col>
        </Row>
        <div className="ItemContainer">
          {isScrolled && (<button className='btn scroll-arrow left' onClick={() => scrollLeft(hookahRef)}> <FontAwesomeIcon icon={faAngleLeft} /> </button>)}
          <div className='product-items scrollContainer' ref={hookahRef}>
            {hookahProducts.map((product, index) => (
              <div className="item" key={index}>
                <div className="d-flex justify-content-center mb-2">
                  <img src={product.Image} alt={product.title} />
                </div>
                <div className="min d-inline-block mb-1">
                  <div className="d-flex">
                    <img src={Min} alt={Min} />
                    <p>8 MINS</p>
                  </div>
                </div>
                <div className="item-details">
                  <h6 className='detail-h6'>{product.title}</h6>
                  <p>{product.quantity}</p>
                  <div className="cart-price d-flex justify-content-between align-items-center">
                    <h6>{product.price}</h6>
                    <button className="btn">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='btn scroll-arrow right' onClick={() => scrollRight(hookahRef)}><FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </Row>
      <Row className='mouth pt-4'>
        <Row className='product-heading'>
          <Col lg={12}>
            <h2>Mouth fresheners</h2>
            <h4>see all</h4>
          </Col>
        </Row>
        <div className="ItemContainer">
          {isScrolled && (<button className='btn scroll-arrow left' onClick={() => scrollLeft(mouthfreshenersRef)}> <FontAwesomeIcon icon={faAngleLeft} /></button>)}
          <div className='product-items scrollContainer' ref={mouthfreshenersRef}>
            {mouthFreshenersProducts.map((product, index) => (
              <div className="item" key={index}>
                <div className="mb-2">
                  <img src={product.Image} alt={product.title} />
                </div>
                <div className="min d-inline-block mb-1">
                  <div className="d-flex">
                    <img src={Min} alt={Min} />
                    <p>8 MINS</p>
                  </div>
                </div>
                <div className="item-details">
                  <h6 className='detail-h6'>{product.title}</h6>
                  <p>{product.quantity}</p>
                  <div className="cart-price d-flex justify-content-between align-items-center">
                    <h6>{product.price}</h6>
                    <button className="btn">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='btn scroll-arrow right' onClick={() => scrollRight(mouthfreshenersRef)}> <FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
      </Row>
      <Row className='cold-Drinks pt-4'>
        <Row className='product-heading'>
          <Col lg={12}>
            <h2>Cold Drinks & Juices</h2>
            <h4>see all</h4>
          </Col>
        </Row>
        <div className="ItemContainer">
          {isScrolled && (<button className='btn scroll-arrow left' onClick={() => scrollLeft(coldDrinkRef)}> <FontAwesomeIcon icon={faAngleLeft} /> </button>)}
          <div className='product-items scrollContainer' ref={coldDrinkRef}>
            {coldDrinkProducts.map((product, index) => (
              <div className="item" key={index}>
                <div className="d-flex justify-content-center mb-2">
                  <img src={product.Image} alt={product.title} />
                </div>
                <div className="min d-inline-block mb-1">
                  <div className="d-flex">
                    <img src={Min} alt={Min} />
                    <p>8 MINS</p>
                  </div>
                </div>
                <div className="item-details">
                  <h6 className='detail-h6'>{product.title}</h6>
                  <p>{product.quantity}</p>
                  <div className="cart-price d-flex justify-content-between align-items-center">
                    <h6>{product.price}</h6>
                    <button className="btn">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='btn scroll-arrow right' onClick={() => scrollRight(coldDrinkRef)}> <FontAwesomeIcon icon={faAngleRight} /> </button>
        </div>
      </Row>
      <Row className='Candies pt-4'>
        <Row className='product-heading'>
          <Col lg={12}>
            <h2>Candies & Gums</h2>
            <h4>see all</h4>
          </Col>
        </Row>
        <div className="ItemContainer">
          {isScrolled && (<button className='btn scroll-arrow left' onClick={() => scrollLeft(candieRef)}> <FontAwesomeIcon icon={faAngleLeft} /> </button>)}
          <div className='product-items scrollContainer' ref={candieRef}>
            {candieProducts.map((product, index) => (
              <div className="item" key={index}>
                <div className="position-relative mb-2">
                  {product.offerImage && <img src={product.offerImage} alt="" className='offer-img' />}
                  <img src={product.Image} alt={product.title} className='product-img' />
                </div>
                <div className="min d-inline-block mb-1">
                  <div className="d-flex">
                    <img src={Min} alt={Min} />
                    <p>8 MINS</p>
                  </div>
                </div>
                <div className="item-details">
                  <h6 className='detail-h6'>{product.title}</h6>
                  <p>{product.quantity}</p>
                  <div className="cart-price d-flex justify-content-between align-items-center">
                    <div className=" d-flex flex-column">
                      <h6 className='mb-0'>{product.price}</h6>
                      <h6 className='mb-0 delprice'><del>{product.delprice}</del></h6>
                    </div>
                    <button className="btn">ADD</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='btn scroll-arrow right' onClick={() => scrollRight(candieRef)}> <FontAwesomeIcon icon={faAngleRight} /> </button>
        </div>
      </Row>
    </Container>
  )
}

export default Product;