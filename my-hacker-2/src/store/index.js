import { createStore } from 'vuex'
import { fetchListItem } from '../api/index'

export default createStore({
  state: {
    list: [],
  },
  getters: {
  },
  mutations: {
    // state에 저장하는 장치를 mutations에서 만듦
    SET_LIST(state, list) {
      console.log('index.js >> SET_LIST');
      state.list = list; 
    },
  },
  actions: {
    FETCH_LIST(context, pageName) {
      console.log('index.js >> FETCH_LIST');
      // pageName 받는 이유 news에서 사용하면 news가 필요해성
      return fetchListItem(pageName)
              .then(res => {
                context.commit('SET_LIST', res.data);
                return res;
              })
              .catch(err => {
                console.log(err);
              });
    }
  },
  modules: {
  }
})
