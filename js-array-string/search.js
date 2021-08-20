const books = [
    'Eloquent JavaScript', 'JavaScript and JQuery', 'The Definition of JS', 'A smarter way to learn JS', 'Effective JavaScript', 'You dont know js', 'Secrets of the JavaScript'
]
for (const book of books) {
    const js = book.toLowerCase().includes('javascript');
    if (js) {
        console.log(book);
    }
}