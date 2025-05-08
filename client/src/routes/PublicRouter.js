import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import Contact from '../components/pages/Contact/Contact';
import ProductDetail from '../components/pages/Product/ProductDetail';
import CollectionBridal from '../components/pages/Collection/CollectionBridal/CollectionBridal';
import BridalDetail from '../components/pages/Collection/BridalDetail/BridalDetail';
import BrandProduct from '../components/pages/BrandProduct/BrandProduct';
import InspirationList from '../components/pages/Inspiration/InspirationList/InspirationList';
import InspirationDetail from '../components/pages/Inspiration/InspirationDetail/InspirationDetail';

export const PublicRouter = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/product/:id', element: <ProductDetail /> },
    { path: '/collections/bridal', element: <CollectionBridal /> },
    { path: '/bridal-wedding/:id', element: <BridalDetail /> },
    { path: '/bridal-dress/view-all/:id', element: <BrandProduct /> },
    { path: '/inspiration', element: <InspirationList /> },
    { path: '/inspiration/:id', element: <InspirationDetail /> },
];
