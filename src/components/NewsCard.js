import React from 'react'
import { Card, CardBody,CardText,CardSubtitle,CardLink } from 'reactstrap'

export const NewsCard = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                <img width="100%" src={props.singlenews.urlToImage}/>
                <CardSubtitle>{props.singlenews.title}</CardSubtitle>
                <CardText>{props.singlenews.author}</CardText>
                <CardLink className='btn btn-primary' href="#">Read Later</CardLink>

                    
                </CardBody>
            </Card>
        </div>
    )
}
