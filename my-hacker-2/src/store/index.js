import { createStore } from 'vuex'
import { fetchListItem, fetchUserInfo } from '../api/index'

export default createStore({
  state: {
    list: [],
    user: '',
  },
  getters: {
  },
  mutations: {
    // state에 저장하는 장치를 mutations에서 만듦
    SET_LIST(state, list) {
      console.log('index.js >> SET_LIST');
      state.list = list; 
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    FETCH_LIST(context, pageName) {
      console.log('index.js >> FETCH_LIST');
      // pageName 받는 이유 news에서 사용하면 news가 필요해성
      return fetchListItem(pageName)
              .then(res => {
                context.commit('SET_LIST', res.data);
                //console.log(`res.data >> ${res}`);
                return res;                
              })
              .catch(err => {
                console.log(err);
              });
    },

    FETCH_USER(context, userName) {
      console.log('index.js >> FETCH_USER');
      // pageName 받는 이유 news에서 사용하면 news가 필요해성
      return fetchUserInfo(userName)
              .then(res => {
                context.commit('SET_USER', res.data);
                //console.log(`res.data >> ${res}`);
                return res;                
              })
              .catch(err => {
                console.log(err);
              });
    },
  },
  modules: {
  }
})
