var React = require('react');
var ReactDOM = require('react-dom');
require('./App.css');

 //This is where I created my parent component to perform the following mathematical operations 

var Calculator = React.createClass({
	getInitialState(){
		return {num1: 0, num2:0, operation:null}
	},

	addtion:function(){
	this.setState({operation:"+"})
	},
	subtraction:function(){
		this.setState({operation:"-"})
	},
	multiplication:function(){
		this.setState({operation:"*"})
	},

	divison:function(){
		this.setState({operation:"/"})
	},
	clear:function(){
		this.setState({num1: 0, num2: 0, operation:null, displayNum:0})
	},
	equal:function(){
		var result;

		if(this.state.operation ==="+"){
			result = this.state.num1 + this.state.num2
		} else if (this.state.operation === "-"){
			result = this.state.num1 - this.state.num2

		} else if (this.state.operation === "*"){
			result = this.state.num1 * this.state.num2

		} else if (this.state.operation === "/"){
			result = this.state.num1 / this.state.num2
		}  

		this.setState({displayNum: result, num1:result})

		console.log("result: ", result);
	},

	number:function(num){
		//var clicked = num;
		this.setState({displayNum:num})
		if(this.state.operation === null){
			// var current_num1 = this.state.num1;
			// console.log(this.state.num1, "this is num1!");
			this.setState({num1: num})
			//console.log(this.state.num1, "this is num1!");
		} else {
			//var current_num2 = this.state.num2;			
			this.setState({num2: num})
			//console.log(this.state.num2, "this is num2!");
		} 

	},
  render: function() {
    return (
      <div>
        <h1>Calculator</h1>

        	<input type="text" className="result" value={this.state.displayNum} onChange={this.handleChange}></input><br/>

        	<button  type="button" className="btn btn-default" onClick={this.clear}>C</button>
        	<button  type="button" className="btn btn-default" onClick={this.addtion} value="+">+</button>
        	<button  type="button" className="btn btn-default" onClick={this.subtraction} value="-">-</button>
        	<button  type="button" className="btn btn-default" onClick={this.divison} value="/">/</button><br/>


        	<button  type="button" className="btn1 btn-default" onClick={this.number.bind(this,7)} value="7">7</button>
        	<button  type="button" className="btn1 btn-default" onClick={this.number.bind(this,8)} value="8">8</button>
        	<button  type="button" className="btn1 btn-default" onClick={this.number.bind(this,9)} value="9">9</button>
        	<button  type="button" className="btn1 btn-default" onClick={this.multiplication} value="*">*</button><br/>

        	<button  type="button" className="btn2 btn-default" onClick={this.number.bind(this,4)} value="4">4</button>
        	<button  type="button" className="btn2 btn-default" onClick={this.number.bind(this,5)} value="5">5</button>
        	<button  type="button" className="btn2 btn-default" onClick={this.number.bind(this,6)} value="6">6</button>
        	<button  type="button" className="btn2 btn-default" onClick={this.subtraction} value="-">-</button><br/>

        	<button  type="button" className="btn3 btn-default" onClick={this.number.bind(this,1)} value="1">1</button>
        	<button  type="button" className="btn3 btn-default" onClick={this.number.bind(this,2)} value="2">2</button>
        	<button  type="button" className="btn3 btn-default" onClick={this.number.bind(this,3)} value="3">3</button>
        	<button  type="button" className="btn3 btn-default" onClick={this.addtion}value="+">+</button><br/>

        	
        	<button  type="button" className="btn4 btn-default" onClick={this.number.bind(this,0)} value="0">0</button>
        	<button  type="button" className="btn4 btn-default" onClick={this.equal}>=</button>

     </div>

    )
  },

});

ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
);
