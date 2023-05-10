import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function SliderComp() {
  return (
    <Carousel 
      showArrows={true} 
      showThumbs={false} 
      autoPlay={true} 
      infiniteLoop={true} 
      interval={4000} 
      showStatus={false}
    >
      <div className=' h-96 w-full bg-gray-200' style={{backgroundColor: "#F6F6F6"}}>
        <img className='h-96 w-full object-contain' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt=""/>
      </div>
      <div className=' h-96 w-full bg-gray-200' style={{backgroundColor: "#F6F6F6"}}>
        <img className='h-96 w-full object-contain' src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ad4a0be2-5507-408d-9cfd-339649b1796c/air-max-90-ayakkab%C4%B1s%C4%B1-1JMNmP.png" alt=""/>
      </div>
      <div className=' h-96 w-full bg-gray-200' style={{backgroundColor: "#F6F6F6"}}>
        <img className='h-96 w-full object-contain' src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/90f98513-4cfa-448b-8160-d9a6af641db9/air-max-97-ayakkab%C4%B1s%C4%B1-V94QFP.png" alt=""/>
      </div>
    </Carousel>
  );
}

export default SliderComp;



