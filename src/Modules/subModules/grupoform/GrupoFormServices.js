const GrupoFormService = 'grupoFormService'
angular.module(GrupoFormService, [])
  .factory('GrupoFormService', function ($http, API, appService, $state) {

    const services = {}

    services.getAll = function () {
      return {
        msg: "De Servicos",
        status: 200
      }
    }

    services.adicionar = function () {
      $http.post(`${API}/grupo`, self.grupo)
        .then(result => {
          // self.teste = result.data
          return true
        })
    }

    // services.atualizar = function () {
    //   return $http.put(`${API}/grupo`, self.grupo)
    //     .then((result => {
    //       $state.go('grupo', {
    //         id: result.data.id
    //       })
    //       const {
    //         mensagem
    //       } = result.data
    //       appService.notificacao(result.status, mensagem)
    //     }))
    //     .catch((error) => {
    //       appService.notificacao(null, null)
    //     })
    // }
    return services
  })

export default GrupoFormService