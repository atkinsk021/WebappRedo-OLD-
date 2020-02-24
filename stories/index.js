import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Bookmark from '../src/components/bookmark/'

const sample = {
    title: 'Google',
    link: 'www.google.com',
    visits: '112',
    picture: {thumbnail: './sample.png'}
}

storiesOf("Bookmark Vault/Bookmark", module).add("default", () => ( 
  <Bookmark bookmark={sample}/>
));      

storiesOf("Bookmark Vault/Header", module).add("default", () => (
  <Header noContacts={5} />
));     

storiesOf("Bookmark Vault/Filter Controls", module).add("default", () => (
  <FilterControls />
)); 