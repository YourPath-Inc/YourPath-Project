export class Point {
    constructor(title, location, description, date) {
        this.title = title;
        this.location = location;
        this.description = description;
        this.date = date;
    }

    getTitle() { return this.title; }
    getLocation() { return this.location; }
    getDescription() { return this.description; }
    getDate() { return this.date; }
}