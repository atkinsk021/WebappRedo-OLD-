import _ from "lodash";

class StubAPI {
    constructor() {
        this.bookmarks = [
            {
              id: 1,
              title: 'Google',
              link: 'www.google.com',
              visits: '112',
              picture: {thumbnail: './sample.png'}
            },
            {
              id: 2,    
              title: 'Twitter',
              link: 'www.google.com',
              visits: '12',
              picture: {thumbnail: './sample.png'}
            },
            {
              id: 3,    
              title: 'Youtube',
              link: 'www.youtube.com',
              visits: '1',
              picture: {thumbnail: './sample.png'}
            },
            {
              id: 4,
              title: 'dsfsdfsdfsdfsdf',
              link: 'www.sdfkjnsdf.com',
              visits: '43',
              picture: {thumbnail: './sample.png'}
            },
            {
              id: 5,
              title: 'Twitch',
              link: 'www.twitch.com',
              visits: '6',
              picture: {thumbnail: './sample.png'}
            }
          ];
    }
    add(title, link) {
        let id = 1;
        let last = _.last(this.bookmarks);
        if (last) {
        id = last.id + 1;
        }
        let len = this.bookmarks.length;
        let newLen = this.bookmarks.push({
        title,
        link,
        visits: '0',
        picture: {thumbnail: './sample.png'}
        });
        return newLen > len;
    }

    find(id) {
        let index = _.findIndex(
        this.bookmarks,
        bookmark => `${bookmark.link}${bookmark.cell}` === id
        );
        if (index !== -1) {
        return this.bookmarks[index];
        }
        return null;
    }

    delete(k) {
        let elements = _.remove(this.bookmarks, bookmark => bookmark.link === k);
        return elements;
    }

    initialize(bookmarks) {
        this.bookmarks = bookmarks;
    }

    getAll() {
        return this.bookmarks;
    }

    update(key, title, link) {
        let index = _.findIndex(this.contacts, contact => contact.phone === key);
        if (index !== -1) {
        this.bookmarks[index].title = title;
        this.bookmarks[index].link = link;
        return true;
        }
        return false;
    }
}

export default new StubAPI();