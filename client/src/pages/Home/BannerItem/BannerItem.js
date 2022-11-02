const BannerItem = ({ data }) => {
  const { id, image, next, prev } = data;
  return (
    <div id={`slide${id}`} className='carousel-item box-border w-full  overflow-hidden'>
      <div className='relative mx-2'>
        <img src={image} alt='banner' className='w-full h-full lg:h-auto object-cover object-top' />
        <div className='absolute w-full inset-0 bg-gradient-to-r from-black '></div>
        <div className='absolute flex gap-6 right-12 bottom-12'>
          <a href={`#slide${prev}`} className='btn btn-circle border-0 hover:bg-primary'>
            ❮
          </a>
          <a href={`#slide${next}`} className='btn btn-circle border-0 hover:bg-primary'>
            ❯
          </a>
        </div>

        <div className='absolute left-8 lg:left-20 top-1/2 w-full space-y-5 -translate-y-1/2 text-white'>
          <h1 className='font-bold text-4xl lg:text-6xl'>
            Affordable Price <br /> For Car Servicing
          </h1>
          <p className='w-4/5 lg:w-1/3'>
            There are many variations of passages of available, but the majority have suffered alteration in some form
          </p>
          <div className='flex  gap-4'>
            <button className='btn btn-primary'>Discover More</button>
            <button className='btn btn-outline btn-primary'>Latest Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerItem;
