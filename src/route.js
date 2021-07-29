import FirstNavBar from './components/FirstNavBar'
import SecondNavBar from './components/SecondNavBar'
import ThirdNavBar from './components/ThirdNav'
import TestNavBar from './components/test'
export const routes = [
    { path: '/firstNav', component: FirstNavBar },
    { path: '/SecondNav', component: SecondNavBar },
    { path: '/ThirdNav', component: ThirdNavBar },
    { path: '/test', component: TestNavBar },
    { path: '*', redirect: '/firstNav' }
];
