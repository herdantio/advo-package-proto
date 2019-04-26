import Vue from 'vue'
import AngryHeader from './AngryHeader'

const Components = {
    AngryHeader
}

Object.keys(Components).forEach( name => {
    Vue.component(name, Components[name])
})

export default Components