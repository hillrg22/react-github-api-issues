import React, {useState, useEffect} from 'react'
import IssueCard from './IssueCard'

import {Pagination} from '@material-ui/lab' 
import {Typography} from '@material-ui/core'

// let issues = [
//     {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", body: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", user: {login: "RafaelMFonseca"}, assignee: {login: "Bill"} },
//     {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", body: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", user: {login: "RafaelMFonseca"}, assignee: {login: "George"} },
//     {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", body: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", user: {login: "RafaelMFonseca"}, assignee: {login: "null"} }
// ]

async function getIssues(pageNumber)
{
  console.log("page number", pageNumber)
  let response = await fetch(`https://api.github.com/repos/angular/angular/issues?page=${pageNumber}&per_page=10`)
  let data = await response.json()
  return data  
}

const CardList = props => {
    const [page, setPage] = useState(1)
    const [issues, setIssues] = useState([])

    useEffect((page) => {
        getIssues(page)
            .then(data => setIssues(data)) 

    }, [])

    const issueCardsMap = issues.map((issue, i) => {
        return <IssueCard 
                    key={i} 
                    title={issue.title} 
                    body={issue.body} 
                    username={issue.user.login} 
                    />
      })

    const handleChange = (event, value) => {
        getIssues(value)
        setPage(value)
        
    }


    return(
        <div>
            <Typography>Page: {page}</Typography>
            <Pagination count={6} page={page} onChange={handleChange} />
            {issueCardsMap}
        </div>

    )


}


export default CardList;