function DivideNum(num, i, ind, result=""){
    if(num <= 0){
        return "NULLA";
    }
    const RomanNumbers = new Map([[1, 'I'], [4, 'IV'], [5, 'V'], [9, 'IX'], [10, 'X'], [40, 'XL'],[50, 'L'], [90, 'XC'], [100, 'C'], [400, 'CD'], [500, 'D'], [900, 'CM'], [1000, 'M']]);
    let step = Array.from(RomanNumbers.keys())[ind];
    if(i == num){
        return result;
    }
    else if(i + step > num){
        return DivideNum(num, i, ind - 1, result);
    }
    result += RomanNumbers.get(step);
    return DivideNum(num, i += step, ind, result);
}

function convertToRoman(num) {
    return DivideNum(num, 0, 12, "");
}

class Converter extends React.Component{
    constructor(props){
        super(props)
        this.state = {Output : "NULLA"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setState(
            {Output : convertToRoman(Math.floor(event.target.value))}
            );
    }
    render(){
        return(<div style={{backgroundColor: "rgba(105, 105, 105, 0.5)", color: "yellow", padding: "8%"}}>
            <h1>The Roman Converter</h1>
            <h3>Please introduce a number:</h3>
            <input type="number" onChange={this.handleClick} min="0" style={{backgroundColor: "rgb(105, 105, 105)", color: "yellow", outline: "none", textAlign: "center", width: "40%"}} />
            <h3>Result:</h3> <p style={{overflowWrap: "break-word", fontWeight: "bold", fontSize: "large", padding: "2vw", borderStyle: "solid", borderColor: "yellow"}}>{this.state.Output}</p>
        </div>);
    }
}

ReactDOM.render(<Converter />, document.getElementById("Romans"));
