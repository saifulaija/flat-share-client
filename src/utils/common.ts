import {formatDistanceToNowStrict} from 'date-fns'

export const formateMoney=(amount:string)=>{
    const money=Number(amount)
    return new Intl.NumberFormat('en-BD',{
        style:'currency',
        currency:'BDT'
    }).format(money)
}


export const formateDate=(from:Date)=>{
    return formatDistanceToNowStrict(from,{addSuffix:true})
};