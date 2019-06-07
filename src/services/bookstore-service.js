
export default class BookstoreServices {

    data = [
        {
            id: 1,
            title: 'I, Robot',
            author: 'Aiesec Asimov',
            price: 15,
            coverImage: 'https://upload.wikimedia.org/wikipedia/en/8/8e/I_Robot_-_Runaround.jpg'
        },
        {
            id: 2,
            title: 'Harry Potter and Cursed Child',
            author: 'J. K. Rowling',
            price: 20,
            coverImage: 'http://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2016/07/image.png'
        },
        {
            id: 3,
            title: 'Two Hundred Years Together',
            author: 'Aleksandr Isayevich Solzhenitsyn',
            price: 30,
            coverImage: 'https://archive.org/download/200YearsTogether/200YearsTogether.jpg'
        },
        {
            id: 4,
            title: 'The Gulag Archipelago',
            author: 'Aleksandr Isayevich Solzhenitsyn',
            price: 30,
            coverImage: 'https://i.harperapps.com/covers/9780061253713/x510.jpg'
        },
        {
            id: 5,
            title: 'The Twelve Chairs',
            author: 'Ilya Ilf and Evgeny Petrov',
            price: 25,
            coverImage: 'http://www.nupress.northwestern.edu/sites/default/files/covers/0-8101-2772-5/twelve-chairs.gif'
        },
        {
            id: 6,
            title: 'Games People Play',
            author: 'Eric Berne',
            price: 40,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41-JGlodWwL.jpg'
        },
        {
            id: 7,
            title: 'Fight Club',
            author: 'Chuck Palahniuk',
            price: 20,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/514qXrYZ5sL._SX324_BO1,204,203,200_.jpg'
        },
        {
            id: 8,
            title: 'Choke',
            author: 'Chuck Palahniuk',
            price: 20,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51tM0lae0ML._SY291_BO1,204,203,200_QL40_.jpg'
        },
        {
            id: 9,
            title: 'The Cement Garden',
            author: 'Ian McEwan',
            price: 10,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51nQGqeohPL.jpg'
        },
        {
            id: 10,
            title: 'Flowers for Algernon',
            author: 'Daniel Keyes',
            price: 20,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41gvkhScVBL._SX315_BO1,204,203,200_.jpg'
        },
        ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!this.data) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
}