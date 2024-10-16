import React, {useRef} from 'react'
import './Many_lesion.scss'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Button  } from 'antd';
// import 'antd/dist/antd.css'; // Import CSS của Ant Design

// const Many_lesion = () => {
//     // class Many_lesion extends Component  {

    
//         let settings = {
//             dots: true,
//             infinite: true,
//             speed: 50,
//             slidesToShow: 1,
//             slidesToScroll: 1
//           };

// const contentStyle = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
    
// const Many_lesion = () => (

        // <div>
        // <div className='Many_lesion'>
        // <div className="container mx-auto">
            
        //   {/* ROW_2 */}

        // <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}' >
        //   <div className='row_2 '>
        //     <h2 className='mt-8 mb-8 text-3xl font-semibold mb-4 '>Các khóa học được mua nhiều nhất</h2>

        //     <div className="khoa_mua_nhieu_nhat flex gap-16 pb-8">
        //       {/* 1 */}
        //           <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c1.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //         {/* 2 */}
        //         <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c2.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //           {/* 3 */}
        //           <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c3.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //           {/* 4 */}
        //           <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c4.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //             {/* 5 */}
        //             <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c4.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //             {/* 6 */}
        //             <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c4.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //             {/* 7 */}
        //             <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c4.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //             {/* 8 */}
        //             <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/c4.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //     </div>
        // </div>
        // </div>
        //  {/* /////////////////////////////////////////////////// */}
        //   {/* ROW_3 */}
        //   <div className='row_3'>
        //     <h2 className='mt-8 mb-8 text-3xl font-semibold mb-4'>Khóa học chất lượng cao</h2>

        //     <div className="khoa_mua_nhieu_nhat flex gap-16 pb-8">
        //       {/* 1 */}
        //           <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/d1.png" alt="" />
        //           </a>
        //           <h2 dlassName='font-bold'>
        //           dombo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //         {/* 2 */}
        //         <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/d2.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //           {/* 3 */}
        //           <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/d3.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //           {/* 4 */}
        //           <div className='min-w-[171px] md:min-w-[285px]'>
        //              <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
        //           <img src="./public/d4.png" alt="" />
        //           </a>
        //           <h2 className='font-bold'>
        //           Combo. Chinh phục guitar fingerstyle (từ beginner đến)....
        //           </h2>
        //           <h3>2 khóa học</h3>
        //           <h4>đ399,00</h4>
        //         </div>
        //     </div>
        // </div>
        // </div>
        // </div>
        


    //     <Slider {...settings}>
    //   <div className='container mx-auto'>
    //     <h3>1</h3>
    //   </div>
    //   <div>
    //     <h3>2</h3>
    //   </div>
    //   <div>
    //     <h3>3</h3>
    //   </div>
    //   <div>
    //     <h3>4</h3>
    //   </div>
    //   <div>
    //     <h3>5</h3>
    //   </div>
    //   <div>
    //     <h3>6</h3>
    //   </div>
    // </Slider>
    // </div>
        // 
        <>
        {/* <Carousel arrows infinite={false}>
        <div style={contentStyle}> */}
          {/* <h3 style={contentStyle}>1</h3> */}
          {/* <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
                   <img src="./public/d1.png" alt="" />
                   </a>
                   <h2 dlassName='font-bold'>
                   dombo. Chinh phục guitar fingerstyle (từ beginner đến)....
                   </h2>
                   <h3>2 khóa học</h3>
                   <h4>đ399,00</h4>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>

 
      </Carousel> */}
 
   
    </>

        
  // )
// }
const App = () => {
  const carouselRef = useRef(null); // Tạo ref để điều khiển Carousel
  const courses = [
    { img: "./public/d1.png", title: "Combo. Chinh phục guitar fingerstyle", price: "đ399,00" },
    { img: "./public/d2.png", title: "Combo. Chinh phục guitar fingerstyle", price: "đ399,00" },
    { img: "./public/d3.png", title: "Combo. Chinh phục guitar fingerstyle", price: "đ399,00" },
    { img: "./public/d4.png", title: "Combo. Chinh phục guitar fingerstyle", price: "đ399,00" },
  ];
  const handlePrev = () => carouselRef.current.prev(); // Chuyển đến slide trước
  const handleNext = () => carouselRef.current.next(); // Chuyển đến slide tiếp theo

  return (
    <div className="row_3">
      <h2 className="mt-8 mb-8 text-3xl font-semibold mb-4">Khóa học chất lượng cao</h2>

        {/* Nút điều khiển Carousel */}
        <div className="flex justify-between mb-4">
        <Button onClick={handlePrev}>Trước</Button>
        <Button onClick={handleNext}>Tiếp theo</Button>
      </div>
      
      {/* Carousel tích hợp Ant Design */}
      <Carousel autoplay dots={true} slidesToShow={3} slidesToScroll={1}>
        {courses.map((course, index) => (
          <div key={index} className="min-w-[171px] md:min-w-[285px]">
            <a href="/vn/learning-path/combo-chinh-phuc-guitar-fingerstyle-tu-beginner-den-master-66fcfbb4ba37fa9dee1acc83">
              <img src={course.img} alt={course.title} />
            </a>
            <h2 className="font-bold">{course.title}...</h2>
            <h3>2 khóa học</h3>
            <h4>{course.price}</h4>
          </div>
        ))}

        {/* 2 */}
        
      </Carousel>
    </div>
  );
};

export default App;

// export default Many_lesion

// 39:33