import bannerImg1 from '../../../assets/images/banner/1.jpg';
import bannerImg2 from '../../../assets/images/banner/2.jpg';
import bannerImg3 from '../../../assets/images/banner/3.jpg';
import bannerImg4 from '../../../assets/images/banner/4.jpg';
import BannerItem from '../BannerItem/BannerItem';

const bannerData = [
  { id: 1, next: 2, prev: 4, image: bannerImg1 },
  { id: 2, next: 3, prev: 1, image: bannerImg2 },
  { id: 3, next: 4, prev: 2, image: bannerImg3 },
  { id: 4, next: 1, prev: 3, image: bannerImg4 },
];

const Banner = () => {
  return (
    <div className='carousel h-[80vh] w-full container mx-auto mb-20'>
      {bannerData.map((data) => (
        <BannerItem key={data.id} data={data} />
      ))}
    </div>
  );
};
export default Banner;
