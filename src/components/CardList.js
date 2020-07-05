import React, {useState} from 'react'
import IssueCard from './IssueCard'

let issues = [
    {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", description: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", username: "RafaelMFonseca", assignee: "null" },
    {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", description: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", username: "RafaelMFonseca", assignee: "null" },
    {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", description: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", username: "RafaelMFonseca", assignee: "null" }
]


async function getIssues()
{
  let response = await fetch(`https://api.github.com`)
  let data = await response.json()
  return data  
}

const CardList = props => {
    
    getIssues()
        .then(data => console.log(data)) 

    const issueCardsMap = issues.map((issue, i) => {
        return <IssueCard 
                    key={i} 
                    title={issue.title} 
                    description={issue.description} 
                    username={issue.username} 
                    assignee={issue.assignee} />
      })

    return(
        <div>
            {issueCardsMap}
        </div>

    )


}


export default CardList;