
class App extends React.Component {
  constructor() {
    super();
    this.state = {
     fib_array : [],
     sorted_array : []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fibonacci(n){
    var fib = []; 
    if(n == 1){
      return [0];
    }
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i < n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
  }

  sortFibonacci(fib){
    var even = fib.filter(x => x%2==0);
    var odd = fib.filter(x => x%2!=0);
    even.sort(function(a, b){return b-a}); // descending sort
    odd.sort(function(a, b){return b-a});
    return even.concat(odd);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.submitNumber;
    const input_num = form.input_number.value;
    if(!input_num || input_num < 1 || input_num > 100){
      alert("Invalid input!");
      form.input_number.value = "";
      return;
    }
    const tmp_fib = this.fibonacci(input_num);
    this.setState({fib_array : tmp_fib});
    this.setState({sorted_array: this.sortFibonacci(tmp_fib)});

    //alert("fibonacci: [" + fib_array + "]"+ "\n" + "sorted: [" + sorted_array + "]");
    form.input_number.value = "";
  }

  render() {
    
    return (
      <React.Fragment>

        <div>
          <h1>Enter a number 1-100</h1>
          <hr />
          <br />
          <form name="submitNumber" onSubmit={this.handleSubmit}>
            <input type="number" name="input_number" placeholder="Number"/><br />
            <button>Generate</button>
          </form>
        </div>

        <div>
          <h3><b>fibonacci: </b></h3>
          <h4>[{this.state.fib_array.join(", ")}] </h4>
          <h3><b>sorted:  </b></h3>
          <h4>[{this.state.sorted_array.join(", ")}] </h4>
        </div>
      </React.Fragment>

    );
  }
}

const app = <App />
ReactDOM.render(app, document.getElementById('contents'));
