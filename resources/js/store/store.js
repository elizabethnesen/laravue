import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        items:[
            {
                title: 'Яблоко',
                count: 0,
                price: 10,
                showItem: false
            },
            {
                title: 'Апельсин',
                count: 0,
                price: 30,
                showItem: false
            },
            {
                title: 'Банан',
                count: 0,
                price: 15,
                showItem: false
            }
        ]
    },
    getters:{
        getItems: state=>state.items
    },
    actions:{
        addPosition(context, items){
            context.commit('addPosition', items)
        }
    },
    mutations:{
        addPosition(state, [title, price]){
            state.items.push({
                title:title,
                count: 0,
                price: price,
            })
        }
    }
})