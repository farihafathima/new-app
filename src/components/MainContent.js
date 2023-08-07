import React, { useState,useEffect} from 'react'
import { Button, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input,Form } from 'reactstrap'
import { AllNews } from './AllNews';
import axios from 'axios';

export const MainContent = () => {
    const[news,setNews]=useState([])
    const [isOpen, setIsOpen] = useState(false);
    const [dropDownValue,setDropDownValue]=useState('')
    const [category,setCategory]=useState('')
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };
        useEffect(() => {
            axios
              .get(
                `https://newsapi.org/v2/top-headlines?category=${category}&apikey=3b941681d5414da3b737b9b477509c9f&page=1`
              )
              .then((res) => {
                console.log(res);
                setNews(res.data.articles);
                console.log(news);
                })
              .catch(err=>{
                console.log(err)
              });
          }, [category,news]);
      const  clickHandler=()=>{
        setCategory(dropDownValue)
        console.log(category)
      }
    return (
        <Container>
        <h1 className="display-3">Welcome to News World...!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <Dropdown isOpen={isOpen} toggle={toggleDropdown} className='m-3'>
         <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem  value='sports' onClick={(e)=>setDropDownValue(e.target.value)}>Sports</DropdownItem>
        <DropdownItem value='Entertainment' onClick={(e)=>setDropDownValue(e.target.value)}>Entertainment</DropdownItem>
        <DropdownItem value='Political' onClick={(e)=>setDropDownValue(e.target.value)}>Political</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <hr className="my-2" />
    <div className='p-4'>
    <Button className='p-2 m-4' onClick={()=>clickHandler()}>Catergory Wise News</Button>
    <Button>Trending News</Button>
    <Form className='container'>
        <FormGroup className='d-flex justify-content-center m-2'>
            <Input type='search' name='search' id='exampleSearch' placeholder='search' className='form-control w-50'/>
            <Button>Search</Button>
        </FormGroup>
    </Form>
    </div>
    <AllNews news={news}/>
   
    </Container>
    )
}
