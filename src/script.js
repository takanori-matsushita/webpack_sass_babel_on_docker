const app = new Vue({
  el: "#app",
  data: {
    navShow: false,
    isActive: false,
  },
  methods: {
    navOpen: function () {
      this.isActive = !this.isActive;
      this.navShow = !this.navShow;
    }
  }
})