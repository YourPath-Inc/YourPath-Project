export class User {
    constructor(name, surname, email, psswrd, tel, location, birth_date, description, git, linkedin) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.psswrd = psswrd;
        this.tel = tel;
        this.location = location;
        this.birth_date = location;
        this.description = description;
        this.git = git;
        this.linkedin = linkedin;
    }

    getName() { return this.name; }
    getSurname() { return this.surname; }
    getEmail() { return this.email; }
    getPsswrd() { return this.psswrd; }
    getTel() { return this.tel; }
    getLocation() { return this.location; }
    getBirthDate() { return this.birth_date; }
    getDescription() { return this.description; }
    getLinkedin() { return this.linkedin; }
    getGit() { return this.git; }
}