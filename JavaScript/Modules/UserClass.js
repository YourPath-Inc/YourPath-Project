export class Point {
    constructor(name, surname, email, psswrd, tel, location, birth_date, description, link) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.psswrd = psswrd;
        this.tel = tel;
        this.location = location;
        this.birth_date = location;
        this.description = description;
        this.link = link;
    }

    getName() { return this.name; }
    getSurname() { return this.surname; }
    getEmail() { return this.email; }
    getPsswrd() { return this.psswrd; }
    getTel() { return this.tel; }
    getLocation() { return this.location; }
    getBirthDate() { return this.birth_date; }
    getDescription() { return this.description; }
    getLink() { return this.link; }
}