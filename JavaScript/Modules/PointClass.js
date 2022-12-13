export class Point {
    constructor(user_id, title, initDate, endDate, description, state, location) {
        this.user_id = user_id;
        this.title = title;
        this.initDate = initDate;
        this.endDate = endDate;
        this.description = description;
        this.state = state;
        this.location = location;
    }

    getTitle() { return this.title; }
    getInitDate() { return this.initDate; }
    getEndDate() { return this.endDate; }
    getDescription() { return this.description; }
    getState() { return this.state; }
    getLocation() { return this.location; }
}