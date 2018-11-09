import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/Home'
import Category from 'components/Category/Category'
import Find from 'components/Find/Find'
import About from 'components/About/About'
import iphonearea from 'components/IphoneArea/IphoneArea'
import GoodItem from 'components/GoodItem/GoodItem'
import MyOrders from 'components/MyOrders/Myorders'
import Collection from 'components/Collection/Collection'
/*import SelectModel from 'base/SelectModel/SelectModel'*/
import ConfirmOrder from 'components/ConfirmOrder/ConfirmOrder'
import orderDetail from 'components/orderDetail/orderDetail'
import MyAdress from 'components/MyAdress/MyAdress'
import addAdress from 'components/addAdress/addAdress'
import Agreement from 'components/Agreement/Agreement'
import kefu from 'components/kefu/kefu'
import logistics from 'components/logistics/logistics'
import Continue from 'components/Continue/Continue'
import BackDetail from 'components/BackDetail/BackDetail'
import InvestmentDetail from 'components/InvestmentDetail/InvestmentDetail'
import Login from 'components/Login/Login'
import Register from 'components/Register/Register'
import GoodsArea from 'components/GoodsArea/GoodsArea'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/iphonearea',
          component: iphonearea
        },
        {
          path: '/gooditem/:id',
          component: GoodItem,
          children: [
            {
              path: '/confirmorder',
              component: ConfirmOrder,
              children: [
               /* {
                  path: '/myadress',
                  component: MyAdress,
                  children: [
                    {
                      path: '/addadress',
                      component: addAdress
                    }
                  ]
                },*/ {
                  path: '/agreement',
                  component: Agreement
                }
              ]
            },
            {
              path: 'kefu',
              component: kefu
            }
          ]
        }
      ]
    },
    {
      path: '/category',
      component: Category,
      children: [
        {
          path: '/goodsarea/:id',
          component: GoodsArea,
          children: [
            {
              path: '/gooditem/:id',
              component: GoodItem,
            }
          ]
        }
      ]
    },
    {
      path: '/find',
      component: Find,
      children: [
        {
          path: '/investmentdetail',
          component: InvestmentDetail
        }
      ]
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '/myorders',
          component: MyOrders,
          children: [
            {
              path: '/orderdetail',
              component: orderDetail,
              children: [
                {
                  path: '/logistics',
                  component: logistics
                },
                {
                  path: 'continue',
                  component: Continue
                },
                {
                  path: 'backdetail',
                  component: BackDetail
                }

              ]
            }
          ]
        },
        {
          path: '/collection',
          component: Collection
        },
        {
          path: 'about/agreement',
          component: Agreement
        },

        {
          path: '/agreement',
          component: Agreement
        }

      ]
    },
    {
      path: '/login',
      component: Login,
      children:[
        {
          path: '/register',
          component: Register
        }
      ]
    },

    {
      path: '/myadress',
      component: MyAdress,
      children: [
        {
          path: '/addadress',
          component: addAdress
        }
      ]
    },
  ]
})
