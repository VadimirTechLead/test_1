var app = new Vue({
  el: ".wrap",
  data: {
    input: "",
    twitts: [],
    load: false,
    status: ""
  },
  methods: {
    search: function() {
      if (this.load) {
        return;
      }
      this.load = true;
      this.status = "load data";
      axios("./" + this.input)
        .then(res => {
          this.$set(this, "twitts", res.data);
          this.load = false;
          this.status = this.twitts.length ? "" : "not results";
        })
        .catch(err => {
          this.$set(this, "twitts", []);
          this.load = false;
          console.error(err);
          this.status = "server error";
        });
    }
  }
});
