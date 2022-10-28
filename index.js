// code your solution here
function saturdayFun(argument){
    if (argument == undefined){
    return `This Saturday, I want to roller-skate!`
    }
    return `This Saturday, I want to ${argument}!`
}
const mondayWork = function (workType="go to the office"){
 
    return `This Monday, I will ${workType}.`

 }
const wrapAdjective = function(star) {
    return function(adjective) {
      return `You are ${star}${adjective}${star}!`
    }
}