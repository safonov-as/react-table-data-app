export default class DataService {
    _url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    async getAllData() {
        const res = await fetch(this._url);
        if(!res) {
            throw new Error('Не удалось получить данные')
        }
        const tableData = await res.json();
        return tableData;
    }
    async getData() {
        const res = await this.getAllData();
        return res.map(this._transformData);
    }
    _transformData = (tableData) => {
        return {
        id: tableData.id,
         firstName: tableData.firstName, 
         lastName: tableData.lastName, 
         email: tableData.email, 
         phone: tableData.phone, 
         description: tableData.description
        }
    }
}