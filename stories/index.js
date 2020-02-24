import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header/'
import FilterControls from '../src/components/filterControls/'
import Bookmark from '../src/components/bookmark/'
import BookmarkList from '../src/components/bookmarkList/'
import BookmarkForm from '../src/components/bookmarkForm/';
import { action } from '@storybook/addon-actions';


const sample = {
    title: 'Google',
    link: 'www.google.com',
    visits: '112',
    picture: {thumbnail: './sample.png'}
}

storiesOf("Bookmark Vault/Bookmark Form", module).add("default", () => <BookmarkForm />);

storiesOf("Bookmark Vault/Bookmark List", module).add("default", () => { 
    const samples = [sample, sample, sample, sample, sample]
    return <BookmarkList bookmarks={samples}/>
});

storiesOf("Bookmark Vault/Bookmark", module).add("default", () => ( 
  <Bookmark bookmark={sample} deleteHandler={action('Delete confirmed') }/>
));      

storiesOf("Bookmark Vault/Header", module).add("default", () => (
  <Header noContacts={5} />
));     

storiesOf("Bookmark Vault/Filter Controls", module).add("default", () => (
    <FilterControls onUserInput={action('Search criteria changes') }/>
)); 