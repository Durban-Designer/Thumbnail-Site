
export default [
  {path: '/', component: () => import('pages/Home')},
  {path: '/Blog', component: () => import('pages/Blog')},
  {path: '/Cloud', component: () => import('pages/Cloud')},
  {path: '/Contact', component: () => import('pages/Contact')},
  {path: '/Mobile', component: () => import('pages/Mobile')},
  {path: '/Who', component: () => import('pages/Who')},
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
