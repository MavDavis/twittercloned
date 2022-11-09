export const state = ()=>({
    counter:0
})
export const getters ={
    getCounter(state){
         state.counter++
         console.log(state.counter);
    }
}
export const mutations = {
    increment(state) {
      state.counter++
    }
  }
  
  export const actions = {
    async fetchCounter({ state }) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }