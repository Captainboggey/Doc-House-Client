import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../../../Hooks/useAxiosPublic.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SiComma } from 'react-icons/si';


const Reviews = () => {
    const axiosPublic = useAxiosPublic()

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const result = await axiosPublic.get('/reviews');
            console.log(result.data)
            return result.data
        }
    })

  
    return (
        <div className='my-20'>
            <div className='text-center my-10'>
                <p className='text-4xl font-extrabold'>What Our Patients Says</p>
                <p className='my-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        
        {
            reviews.map(review=><SwiperSlide key={review._id}><div className='w-96 mx-auto'>
                 <div className='flex justify-between'>
                    <p><span className='text-3xl font-bold'>{review.name}</span>
                    <br />
                    {review.profession}
                    </p>
                    <p>
                    <SiComma className='text-4xl' />
                    </p>


                 </div>
                 <p>{review.review}</p>
                 </div></SwiperSlide>)
        }
      </Swiper>
     
        </div>
    );
};

export default Reviews;