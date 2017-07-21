import App from '../views/App';
// import Authenticated from '../containers/Authenticated/Authenticated';
import RouteUrl from './constant';

//登录
const Login = (location, callback) => {

    require.ensure([], require => {

        callback(null, require('../views/Login/Login').default);

    }, 'Login');

};

function getComponent(component, type) {

    return (location, callback) => {

        require.ensure([], (require) => {

            if(type === 'view') {

                callback(null, require('../views/index')[component]);
            
            }
            
        }, 'view');
    
    };

}

//news
const News = {
    path: RouteUrl.News.Root,
    childRoutes: [
        {
            path: RouteUrl.News.Add,
            getComponent: getComponent('NewsAdd', 'view')
        },
        {
            path: RouteUrl.News.Edit,
            getComponent: getComponent('NewsEdit', 'view')
        },
        {
            path: RouteUrl.News.List,
            getComponent: getComponent('NewsList', 'view')
        }
    ]
};

const routeConfig = [{
    path: RouteUrl.Root,
    component: App,
    indexRoute: {
        getComponent: Login
    },
    childRoutes: [{
        path: RouteUrl.Login,
        getComponent: Login
    }, {
        // component: Authenticated(getComponent('Main', 'view')), //需要权限时
        getComponent: getComponent('Main', 'view'),
        childRoutes: [News],
        onEnter: function (nextState, replaceState) {

            console.log('nextState->replaceState-->', nextState, replaceState);
            // replaceState(null, '/messages/' + nextState.params.id);
        
        }
    }]
}];

export default routeConfig;