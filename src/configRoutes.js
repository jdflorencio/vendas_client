/* @ngInject */
function configRoute($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $injector) {
    // $locationProvider.html5Mode(true).hashPrefix('!')
    $urlRouterProvider.otherwise('/login');

    $httpProvider.interceptors.push(($injector) => {
        return {
            request: function (req) {
                req.headers.Authorization = 'Bearer ' + localStorage.getItem("Authorization")
                return req
            },
            responseError: function (error) {
                const {
                    status
                } = error
                switch (status) {
                    case 401:
                        localStorage.removeItem('Authorization')
                        var state = $injector.get('$state')
                        state.go('login')
                        break
                    case 403:
                        console.info('atual URL:', window.location)
                        break
                }
                return
            },
            requestError: function (err) {
                console.warn(" ||| aqui >>>", err)
            }
        }
    })

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': {
                    component: 'home'
                },
                'cadastro_view': {
                    component: 'cadastro'
                },
                'vendas': {
                    component: 'home'
                }
            }
        })
        .state('login', {
            url: '/login',
            views: {
                'login': {
                    component: 'login'
                },
            }
        })

}

export default configRoute