import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import Contact from '../components/pages/Contact/Contact';
import ProductDetail from '../components/pages/Product/ProductDetail';
import CollectionBridal from '../components/pages/Collection/CollectionBridal/CollectionBridal';
import BridalDetail from '../components/pages/Collection/BridalDetail/BridalDetail';

export const PublicRouter = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/product/:id', element: <ProductDetail /> },
    { path: '/collections/bridal', element: <CollectionBridal /> },
    { path: '/collections/bridal/:id', element: <BridalDetail /> },
];
