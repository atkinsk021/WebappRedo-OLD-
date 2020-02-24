import _ from "lodash";

class StubAPI {
    constructor() {
        this.bookmarks = [];
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