function App(){

    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState('0')

    

    const evalDot = (symbol) => {
        const regex = /\./;
        if (regex.test(expression)){
        return
        } else if (answer !== ''){
            setAnswer('')
            setExpression('')
            setExpression((prev) => prev + symbol)}
    }

    
    
    const evalZero = (symbol) => {
        if (answer !== ''){
            setAnswer('')
            setExpression('')
        }
        const regex = /^(?!0\d)\d+$/
        if (regex.test(expression)){
            return
        } else {setExpression((prev) => prev + symbol)}
    }

    const setOperator = (symbol) =>{
        const regex = /[+/*]/;
        if (regex.test(expression) == false){
            setExpression((prev) => prev + symbol)
        } else {
            setExpression((prev) =>
            prev
            .split('')
            .slice(0, prev.length - 1)
            .join(''))
            setExpression((prev) => prev + symbol)
        }

    }

    const display = (symbol) =>{
        if (answer !== ''){
            setAnswer('')
            setExpression('')
        }
        
        setExpression((prev) => prev + symbol);
    }
    

    const calculate = () =>{

        setAnswer((eval(expression)))
        setExpression((prev) => prev + "=")
        console.log(expression)
    }

    const allClear = () =>{
        setExpression('')
        setAnswer('0')
    }

    return (
        <div className="container"> 
            <div className="grid">
                <div  id="display" className="display">
                    <input type="text" value={expression + answer} placeholder='0' disabled />
                    <div className='total'>{answer}</div>
                </div>
                <div id="clear" onClick={allClear}className="paddButton red AC">AC</div>
                <div id="divide" onClick={() => setOperator('/')}className="paddButton divide darkgrey">/</div>
                <div id="multiply" onClick={() => setOperator("*")}className="paddButton multiply darkgrey">x</div>
                <div id="seven" onClick={() => display("7")} className="paddButton seven">7</div>
                <div id="eight" onClick={() => display("8")}className="paddButton eight">8</div>
                <div id="nine" onClick={() => display('9')}className="paddButton nine">9</div>
                <div id="subtract" onClick={() => display('-')}className="paddButton substract darkgrey">-</div>
                <div id="four" onClick={() => display('4')}className="paddButton four">4</div>
                <div id="five" onClick={() => display('5')}className="paddButton five">5</div>
                <div id="six" onClick={() => display('6')}className="paddButton six">6</div>
                <div id="add" onClick={() => setOperator('+')}className="paddButton add darkgrey">+</div>
                <div id="one" onClick={() => display('1')}className="paddButton one">1</div>
                <div id="two" onClick={() => display('2')}className="paddButton two">2</div>
                <div id="three" onClick={() => display('3')}className="paddButton three">3</div>
                <div id="zero" onClick={() => evalZero('0')}className="paddButton zero">0</div>
                <div id="equals" onClick={calculate} className="paddButton equals red">=</div>
                <div id="decimal" onClick={() => evalDot('.')}className="paddButton decimal">.</div>
            </div>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('root'))