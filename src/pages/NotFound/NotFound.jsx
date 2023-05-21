
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import notFound from '../../assets/gallery/notFound-kiddoValley.webp'
import { Link } from 'react-router-dom';

const NotFound = () => {
      const pageTitle='Kiddo_Valley-ERROR:404'
      return (
            <div className='mx-6'>
                  
                   <DynamicTitle title={pageTitle} />
                  <h3 className='text-center my-4 text-orange-400 text-4xl font-normal'>The page you are searching for may exist in <span className=' text-red-400 text-6xl font-bold'>MARS</span><br /><Link to={'/'} className='btn btn-accent my-4 text-center'>Go Back Home</Link></h3>
                 
                  <img className="w-[100vw] h-[600px]" src={notFound} alt="" />
            </div>
      );
};

export default NotFound;