import React, {useState, useEffect} from 'react'
import IssueCard from './IssueCard'

import {Pagination} from '@material-ui/lab' 
import {Typography} from '@material-ui/core'
import styled from 'styled-components'

// let issues = [
//     {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", body: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", user: {login: "RafaelMFonseca"}, assignee: {login: "Bill"} },
//     {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", body: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", user: {login: "RafaelMFonseca"}, assignee: {login: "George"} },
//     {title: "[BUG]: Component implementing ControlValueAccessor used inside ngFor loses data", body: "This bug occurs when you have a component that implements ControlValueAccessor and it's used inside an *ngFor. Dependending on the order that you add and remove the elements, some data are lost.", user: {login: "RafaelMFonseca"}, assignee: {login: "null"} }
// ]

const Pagination1 = styled(Pagination)`
    margin-left: 10%;
    margin-top: 15px;
    margin-bottom: 15px;
`

const CardList = props => {
    const [page, setPage] = useState(1)
    const [issues, setIssues] = useState([])
    
    async function getIssues(pageNumber){
        console.log("page number", pageNumber)
        let response = await fetch(`https://api.github.com/repos/angular/angular/issues?page=${pageNumber}&per_page=15`)
        let data = await response.json()
        return data  
    }

    useEffect((page) => {
        getIssues(page)
            .then(data => setIssues(data)) 

    }, [])
    
    let seventhDay = new Date();
    seventhDay.setDate(seventhDay.getDate() - 7)
    const issueCardsFilter = issues.filter(issue => (new Date(issue.created_at).valueOf() >= seventhDay.valueOf()))
    

    const issueCardsMap =issueCardsFilter.map((issue, i) => {
        
       return <IssueCard 
                    key={i} 
                    title={issue.title} 
                    body={issue.body} 
                    username={issue.user.login} 
                    />
        })



    const handleChange = (event, value) => {
        setPage(value)
        getIssues(value)
            .then(data => setIssues(data))
    }


    return(
        <div>
            <Pagination1 count={10} page={page} onChange={handleChange} />
            {issueCardsFilter ? issueCardsMap: <p>Sorry, no more results</p>}
            <Pagination1 count={10} page={page} onChange={handleChange} />
        </div>

    )


}


export default CardList;