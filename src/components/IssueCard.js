import React from 'react';
import {Card, CardContent} from '@material-ui/core'
import styled from 'styled-components'


const StyledCard = styled(Card)`
    width: 80%;
    margin-top: 10px;
    margin-left: 10%;

`

const FlexCardContent = styled(CardContent)`
    display: flex;
    flex-direction: column;
    text-align: justify;
`
const Title = styled.h3`

`

const Description = styled.div`
    margin-bottom: 9px;

`

const GrayedText = styled.p`
    color: gray;
    margin: 2px 0 0 0 ;
`


const IssueCard = props => {


    return(
        <StyledCard>
            <FlexCardContent>
                <Title>Title of the issue</Title>
                <Description>Chambray mustache wayfarers copper mug retro, fingerstache magna aesthetic thundercats leggings hell of craft beer. Venmo messenger bag sartorial, aesthetic quinoa edison bulb try-hard fashion axe art party.</Description>
                <GrayedText>Submitted by: User Login</GrayedText>
                <GrayedText>Assigned to: Assignee Login</GrayedText>
            </FlexCardContent>
        </StyledCard>
    )
}



export default IssueCard;