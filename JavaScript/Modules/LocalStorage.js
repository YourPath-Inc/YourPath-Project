export function store(data) { localStorage.setItem("email", data); };   

export function show() { return localStorage.getItem("email"); };