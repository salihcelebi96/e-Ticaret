import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SliderComp() {
  return (

    <div className='flex'>
      <div className='w-[92rem]  flex flex-col justify-center bg-gray-100  px-5  '>
        <div>
           <h1>En Kaliteli Ayakkabılar Burada  <span className='text-red-800'>!!</span></h1>
        <p> 

          Why do we use it?
          It is a long established a page when looking at its layout and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Where does it come from?
         

        </p>
        </div>
       
        <div className=' '> 
          <button className='rounded-full bg-gray-100 h-8 w-16 hover:bg-gray-300  my-5' type="">İncele</button>
        </div>
        
      </div>



      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} showStatus={false}  >
        <div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e2fc84a-c7d3-4d6a-a08d-2e2e90b28071/pegasus-40-premium-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-HTDVsQ.png" style={{ height: '35rem', maxWidth: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00b525ac-e0ba-49cf-88dd-4635f0dd380d/air-zoom-pegasus-40-pr-gen%C3%A7-yol-ko%C5%9Fu-ayakkab%C4%B1s%C4%B1-NMJdZs.png" style={{ height: '35rem', maxWidth: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b032763f-bd34-4741-8967-658653e7ea5f/air-force-1-07-ayakkab%C4%B1s%C4%B1-WZ4MNC.png" style={{ height: '35rem', maxWidth: '100%', objectFit: 'cover' }} />
        </div>

        
      </Carousel>


    </div>

  );
}

export default SliderComp;
