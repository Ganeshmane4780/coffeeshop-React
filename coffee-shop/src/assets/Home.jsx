import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Services from './Services';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
function Home() {
  return (
    <div>
        <Container fluid className='p-0 '>
        <div className='position-relative'>
            <img src='./images/coffee home.jpeg' alt='' className='w-100 img-fluid'/>
            <div class="s1 position-absolute top-50 start-0 ps-5 ms-5 pb-5 translate-middle-y ">
                <h1 className='display-3  '>Outstanding</h1>
                <h1 className='fw-bolder text-white display-3'>Coffee Shop</h1>
                <p className='text-white w-50 fs-5 my-4 fw-bold'>
                "Welcome to Grand Coffee – where every cup tells a story of rich flavors and warm moments. Come sip, savor, and stay awhile!"</p>
                <Button variant='dark' className='p-3 px-5'>Learn More</Button>
            </div>
        </div>
        </Container>
        <About/>
        <Gallery/>
        <Services/>

        <Container>
            <h1 className=' fw-bold' style={{color:"#fd7e14"}}>Testimonials</h1>
            <p className='fs-5'>"See what our happy customers are saying about their Grand Coffee experience!"</p>

            <Carousel className='mt-4 '>
      <Carousel.Item className='border-start border-end border-dark border-2 p-3 bracket-border'>
        <h3 className=' fw-bold ' style={{color:"#fd7e14"}}>JOHN<span className='ms-4'><img src='./images/quick-icon.png'/></span></h3>
        <p className='fs-5'>"Grand Coffee is my go-to spot! The atmosphere is cozy, the coffee is always rich and flavorful, and the staff treats you like family. Whether I need a quiet place to work or just want to unwind, this is the perfect place. Highly recommend their caramel latte—it's the best! Plus, their attention to quality and customer service makes every visit a great experience. I’ve introduced so many friends to this place, and they all love it too!"</p>
        
      </Carousel.Item>
      <Carousel.Item className='border-start border-end border-dark border-2 p-3 bracket-border'>
      <h3 className=' fw-bold 'style={{color:"#fd7e14"}}>EMILY<span className='ms-4'><img src='./images/quick-icon.png'/></span></h3>
        <p className='fs-5'>"Best coffee in town! Their espresso is bold, the pastries are fresh, and the service is top-notch. The baristas are friendly and really know their craft. Every visit feels like a treat, and I always leave with a smile! The ambiance is perfect for both meetings and personal downtime. Whether you want a strong espresso or a creamy cappuccino, they never disappoint. I can’t imagine starting my day without a cup from Grand Coffee!" </p>
        
      </Carousel.Item>
      <Carousel.Item className='border-start border-end border-dark border-2 p-3 bracket-border'>
      <h3 className=' fw-bold 'style={{color:"#fd7e14"}}>VIRAT<span className='ms-4'><img src='./images/quick-icon.png'/></span></h3>
        <p className='fs-5'>"I love the warm and inviting vibe at Grand Coffee. Whether I’m working or catching up with friends, it’s the perfect place to relax with a great cup of coffee. Their seasonal specials are always a delight, and the attention to detail in every cup keeps me coming back. The staff goes above and beyond to make sure you have a great experience. It’s more than just a coffee shop—it’s a place that feels like home. I wouldn't trade my weekend mornings here for anything!"</p>
        
      </Carousel.Item>
    </Carousel>
        </Container>
        
        <Contact/>
    </div>
  )
}

export default Home