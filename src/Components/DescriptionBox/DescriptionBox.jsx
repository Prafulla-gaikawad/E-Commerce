import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
                An e-commerce website, short for electronic 
                comm erce website, is an online platform that 
                facilitates the buying and selling of goods 
                and services over the internet. It allows businesses 
                to reach a global audience and enables customers to browse 
                and purchase products or services from the comfort 
                of their own homes.
            </p>
            <p>
            Popular examples of e-commerce websites include 
            Amazon, eBay, Alibaba, and Shopify stores.
             E-commerce has become a significant part of the 
             global economy, providing businesses with the opportunity 
             to expand their reach and customers with convenient ways 
             to shop online.
            </p>
        </div>
    </div>
  )
};

export default DescriptionBox;