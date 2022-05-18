import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Book from '../Books/book';
import Category from '../Categories/Category';
import Author from '../Authors/Author';

export default function SearchTabs({ search }) {
  const [value, setValue] = React.useState(0);
  const [items, setItems] = useState(undefined);
  const [type, setType] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let uri = ""
    switch (value) {
      case 0:
        uri = "https://good-reads-server.herokuapp.com/users/books";
        // type = 
        break;

      case 1:
        uri = "https://good-reads-server.herokuapp.com/users/categories";
        break;
      case 2:
        uri = "https://good-reads-server.herokuapp.com/users/authors";
        break;
      default:
        break;
    }

    axios.get(uri, {
      params: {
        name: search
      }
    })
      .then(function (response) {
        console.log(response.data);
        setItems(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [value]);

  if (items)
    {
      console.log(items);
      return (
      // <ResponsiveAppBar>
      <>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
            <Tab icon={<MenuBookIcon />} label="BOOKS" />
            <Tab icon={<CategoryIcon />} label="CATEGORIES" />
            <Tab icon={<AccountBoxIcon />} label="AUTHORS" />
          </Tabs>
        </Box>
        <div className='row justify-content-around'>
          {
              (()=>{
                switch (value) {
                  case 0:
                    return items.map((book) => { 
                      console.log(book);
                      return (<Book book={book} />) 
                    })
                    break;
                  case 1:
                    return items.map((cat) => { 
                      console.log(cat);
                      return (<Category cat={cat} />) 
                    })
                    break;
                  case 2:
                    return items.map((author) => { 
                      console.log(author);
                      return (<Author author={author} />) 
                    })  
                    break;
                  default:
                    break;
                }
              })()
          }
        </div>
      </>
      // </ResponsiveAppBar>
    );}
}
