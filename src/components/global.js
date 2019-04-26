import Vue from 'vue'
import AngryHeader from './AngryHeader'
import proto from '../stores/proto'

const Components = {
    AngryHeader
}

Object.keys(Components).forEach( name => {
    Vue.component(name, Components[name])
})

export {
    Components,
    proto
}