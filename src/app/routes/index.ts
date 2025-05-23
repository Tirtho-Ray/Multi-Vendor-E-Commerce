import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { ProductRouter } from './../modules/product/product.route';
import { VendorRouter } from '../modules/ReqVendor/vendor.route';
import { CommentRouter } from '../modules/Comment/comment.route';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRouter,
  },
  {
    path: '/vendor',
    route: VendorRouter,
  },
  {
    path: '/comment',
    route: CommentRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
