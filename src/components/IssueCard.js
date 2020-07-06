import React from 'react';
import {Card, CardContent} from '@material-ui/core'
import styled from 'styled-components'


const StyledCard = styled(Card)`
    width: 80%;
    margin-top: 10px;
    margin-left: 10%;
    padding: 15px;

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


const IssueCard = ({title, body, username, assignee}) => {


    return(
        <StyledCard>
            <FlexCardContent>
                <Title>{title}</Title>
                <Description>{body}</Description>
                <GrayedText>Submitted by: {username}</GrayedText>
                <GrayedText>Assigned to: {assignee}</GrayedText>
            </FlexCardContent>
        </StyledCard>
    )
}



export default IssueCard;