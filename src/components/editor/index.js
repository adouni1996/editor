import Editro from './src/main'

Editro.install = function(Vue) {
  Vue.component(Editro.name, Editro)
}

export default Editro
