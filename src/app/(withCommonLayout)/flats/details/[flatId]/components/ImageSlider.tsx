// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'

// import { Swiper, SwiperSlide } from 'swiper/react'
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules'



// import 'swiper/css'
// import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
// import 'swiper/css/thumbs'
// import { IImage } from '@/types/image'

// export default function ImageSlider({images}:{images:IImage[]}) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null)

//   return (
//     <section className='min-h-screen py-12'>
//       <div className='container'>
//         <Swiper
//           loop={true}
//           spaceBetween={10}
//           navigation={true}
//           thumbs={{
//             swiper:
//               thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
//           }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className='h-96 w-full rounded-lg'
//         >
//           {images?.map((image:IImage, index:number) => (
//             <SwiperSlide key={index}>
//               <div className='flex h-[100%] w-full items-center justify-center'>
//                 <Image
//                   src={image.url || '/url'}
//                   alt='image'
//                   width={100}
//                   height={60}
//                   className='block h-full w-full object-cover'
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Thumbnail */}
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           loop={true}
//           spaceBetween={12}
//           slidesPerView={4}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className='thumbs mt-3 h-16 w-full rounded-md'
//         >
//           {images.map((image:IImage, index:number) => (
//             <SwiperSlide key={index}>
//               <button className='flex h-full w-full items-center justify-center'>
//                 <Image
//                   src={image.url || '/url'}
//                   alt='image'
//                   width={50}
//                   height={20}
//                   className='block h-full w-full object-cover'
//                 />
//               </button>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   )
// }



'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { IImage } from '@/types/image'

export default function ImageSlider({ images }: { images: IImage[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <section className='h-[480px] md:min-h-screen md:py-12'>
      <div className='container'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-96 w-full rounded-lg'
        >
          {images?.map((image: IImage, index: number) => (
            <SwiperSlide key={index}>
              <div className='flex h-[100%] w-full items-center justify-center'>
                <Image
                  src={image.url || '/url'}
                  alt='image'
                  width={100}
                  height={60}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-12 w-full rounded-md'
        >
          {images.map((image: IImage, index: number) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.url || '/url'}
                  alt='image'
                  width={50}
                  height={20}
                  className='block h-full rounded-md w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
