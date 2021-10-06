export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource =async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error('Idiot')
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`); 
        return this._transformCharacter(res);
    }

    getAllBooks = async () => {
        const res = await this.getResource('/books/'); 
        return res.map(this._transformBook);
    }

    getBooks = async (id) => {
        const res = await this.getResource(`/books/${id}`); 
        return this._transformBook(res); 
    }

    getAllHouses = async () => {
        const res = await this.getResource('/houses/'); 
        return res.map(this._transformHouse);
    }

    getHouses = async (id) => {
        const res = await this.getResource(`/houses/${id}`);  
        return this._transformHouse(res);

    }

    _extractId(item) {
        const reg = /\/([0-9]*)$/;
        return item.url.match(reg)[1];
    }

    _checkData(data) {
        if(data === '') {
            data = 'no data'
            return data
        } else {
            return data
        }
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this._checkData(char.name),
            gender: this._checkData(char.gender),
            born: this._checkData(char.born),
            died: this._checkData(char.died),
            culture: this._checkData(char.culture)        
        }
    }

    _transformHouse = (house) =>{
        return {
            id: this._extractId(house),
            name: this._checkData(house.name),
            region: this._checkData(house.region),
            words: this._checkData(house.words),
            titles: this._checkData(house.titles),
            overlord: this._checkData(house.overlord),
            ancestralWeapons: this._checkData(house.ancestralWeapons)
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this._checkData(book.name),
            numberOfPages: this._checkData(book.numberOfPages),
            publiser: this._checkData(book.publiser),
            released: this._checkData(book.released)
        }
    }
}