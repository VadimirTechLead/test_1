var Block = React.createClass({
  getInitialState: function() {
    return { checked: true };
  },
  axios: function(url) {
    this.list.load = true;
    this.list.status = "load data";
    ReactDOM.render(<Block />, plece);
    axios("./" + url)
      .then(res => {
        this.list.twitt = res.data || [];
        this.list.load = false;
        console.log(this.list.twitt);
        this.list.status = this.list.twitt.length ? "" : "not results";
      })
      .catch(err => {
        this.list.twitt = [];
        this.list.load = false;
        console.log(this.list.twitt);
        this.list.status = "server error";
      })
      .then(() => ReactDOM.render(<Block />, plece));
  },
  test: function(a) {
    clearTimeout(this.list.timerId);
    this.list.timerId = setTimeout(() => {
      this.axios(a.target.value);
    }, 700);
  },
  list: {
    status: "",
    timerId: "",
    load: false,
    twitt: []
  },

  render: function() {
    if (!Array.isArray(this.list.twitt)) {
      this.list.twitt = [];
    }
    return (
      <section className="list-wrap">
        <label forName="search-text">Search the list</label>
        <input
          onChange={this.test}
          typeName="text"
          idName="search-text"
          placeholder="search"
          className="search-box"
        />
        <span className="list-count" />
        <ul idName="list">
          {this.list.twitt.map(function(el) {
            return (
              <li className="in" key={el.id}>
                {el.text}
              </li>
            );
          })}
          <span>{this.list.status}</span>
        </ul>
      </section>
    );
  }
});
const plece = document.getElementById("root");
ReactDOM.render(<Block />, plece);
