import HomePage from '../pages/HomePage/HomePage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import ProfilePage from '../pages/Profile/ProfilePage';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/profile-user',
        page: ProfilePage,
        isShowHeader: true
    },
    {
        path: '/product-detail',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage,
        isShowHeader: false
    },
  ];
