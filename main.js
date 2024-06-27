// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

// const musicCollections = [
//     { title: 'Star', author: 'Victor Tsoi', year: 1989 },
//     { title: 'Bad', author: 'Michael Jackson', year: 1987  },
//     { title: 'Joyride', author: 'Roxette', year: 1991 }

// ];

// musicCollections[Symbol.iterator] = function() {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             return this.current < this.to 
//             ? {done: false, value: musicCollections[this.current++]}
//              : {done: true};
//         }
//     }
    
// }

//  for (let musicCollection of musicCollections) {
//     console.log(`Название: ${musicCollection.title}, Автор: ${musicCollection.author}, Год выпуска; ${musicCollection.year}`);
//  }

//  Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать на java script систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const dishes = new Map();
dishes.set('Маргарита', 'Виктор');
dishes.set('Папперони', 'Виктор');
dishes.set('Филадельфия', 'Ольга');
dishes.set('Калифорния', 'Ольга');
dishes.set('Тирамису', 'Дмитрий');
dishes.set('Чизкейк', 'Дмитрий');

const alexseyDishes = new Set().add('Папперони')
                               .add('Тирамису');
const mariaDishes = new Set().add('Калифорния')
                             .add('Маргарита');
const irinaDishes = new Set().add('Чизкейк');                           
                               
                             
 const clients = new Map();
 clients.set('Алексей', alexseyDishes ); 
 clients.set('Мария', mariaDishes );
 clients.set('Ирина', irinaDishes );  
 
 console.log(`Повар: ${dishes.get('Папперони')}`);
 console.log(`Повар: ${dishes.get('Калифорния')}`);
 console.log(`Повар: ${dishes.get('Тирамису')}`);

 console.log(`Алексей заказал: ${[...clients.get('Алексей')]}`);
 console.log(`Мария заказала: ${[...clients.get('Мария')]}`);
 console.log(`Ирина заказала: ${[...clients.get('Ирина')]}`);


