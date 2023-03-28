import { useState } from "react";
import { questions } from "./Data";

function Makequestions({answer}){
    let data = questions
    const [answers, setAnswers] = useState({})
    const [results, setResult] = useState(false)
    const [resbutton, setResButton] = useState(true)
    const handleChange = (e) => {
    if(e.target.name === "0"){
        setAnswers({
            ...answers,
           0: e.target.value
        })
    }
    if(e.target.name === "4"){
        setAnswers({
            ...answers,
            1: e.target.value
        })
    }
    if(e.target.name === "8"){
        setAnswers({
            ...answers,
            2: e.target.value
        })
    }
    if(e.target.name === "12"){
        setAnswers({
            ...answers,
            3: e.target.value
        })
    }
    if(e.target.name === "16"){
        setAnswers({
            ...answers,
            4: e.target.value
        })
    }
    if(e.target.name === "20"){
        setAnswers({
            ...answers,
            5: e.target.value
        })
    }
    if(e.target.name === "24"){
        setAnswers({
            ...answers,
            6: e.target.value
        })
    }
    if(e.target.name === "28"){
        setAnswers({
            ...answers,
            7: e.target.value
        })
    }
    if(e.target.name === "32"){
        setAnswers({
            ...answers,
            8: e.target.value
        })
    }
    if(e.target.name === "36"){
        setAnswers({
            ...answers,
            9: e.target.value
        })
    }
    console.log(e.target.name)
    return answers
}










    const resultsLogic = () => {
        let point = 0
        const keyArr = Object.keys(answers)
        const valuesArr = Object.values(answers)
        const entries = Object.entries(answers)
        console.log(entries)

        for(let j = 0; j < entries.length; j++){
            let question = +entries[j][0]
            if(data[question].correctAns == entries[j][1]){
                point++
            }
        }
    
        if(point >= 7){
            return `Good job you got ${point} out of 10`
        } else {
            return `you got ${point} out of 10`
        }
    }












const checkAnswer = () => {
    return (
        <button>check answers</button>
    )
}

const resultButton = () => {
    return (
        <button onClick={() => {
        setResult(true)
        setResButton(false)
        // checkAnswer()
        }}>finish</button>
    )
}














    let arr = []
    const setName = (arr) => {
        let name = ""
        for(let i = 0; i < arr.length; i += 4){
            name = i        
        }
        return name
    }
    const answer90 = (ans) => {
       return ans?.map(r => {
            return [r.ques, r.answer, r.key]
       })
       ?.map(r => {
        return <div key={r[2]}> <h2> {r[0]} </h2> {r[1]?.map((r, i) => {
            arr.push(r)
            return <p key={i}> {r}  {<input type="radio"  value={i} name={setName(arr)} onChange={handleChange}/>} </p>
        })} </div>
       })
       }
    //    const result = (obj) => {
    //         let arr = []
    //         arr.push(obj)
    //         console.log(arr)
    //         return arr
    //     }
    return (
            <div>
                {answer90(answer)}
                {/* <button onClick={() => {
                    setResult(true)
                    }}>finish</button> */}
                {resbutton ? resultButton() : null}
                { results ? resultsLogic() : null}
            </div>
    )
} 


export {Makequestions}