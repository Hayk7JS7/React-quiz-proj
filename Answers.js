import { questions } from "./Data"
import { Makequestions } from "./questions"

function Answer(){
    
return(
    
    <div>
        <hr/>
       <Makequestions answer={questions}/>
    </div>
)
}

export {Answer}













// let ques = Makequestions()


//     const addAnswer = (ans) => {
//         let arr = []
//         for(let i = 0; i < ans.length; i++){
//             for(let j = 0; j < 4; j++){
//                 arr.push(ans[i].answer[j])
//             }
//         }
//        return arr
//     }
//     let a = addAnswer(questions)
//     console.log(addAnswer(questions))
//     const everyItem = (ans = null, ques = null) => {
//         let questions = ques.map((r, i) => {
//             return <div><h3 key={i}>{r.props.children}</h3></div>
//         })
//         let answers = questions.map((r, i) => {
//             return (
//                 <label>
//                 <input  type="radio" key={r.key}>{r}</input>
//                 </label>
//             )
//         })
//         return answers
//     }   
//     console.log(everyItem(a, ques))