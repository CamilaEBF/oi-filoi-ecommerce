export const ItemsArray = [
    {
        id: '01',
        title: 'Panda',
        description: 'Amigurumi panda.',
        price: 500,
        category: 'Amigurumis',
        pictureUrl: '/img/panda.jpg'
    },
    {
        id: '02',
        title: 'Stitch',
        description: 'Amigurumi Stitch.',
        price: 500,
        category: 'Amigurumis',
        pictureUrl: '/img/stitch.jpg'
    },
    {
        id: '03',
        title: 'Hipo',
        description: 'Amigurumi hipopótamo.',
        price: 500,
        category: 'Amigurumis',
        pictureUrl: '/img/hipo.jpg'
    },
    {
        id: '04',
        title: 'Muñeca',
        description: 'Amigurumi muñeca.',
        price: 500,
        category: 'Amigurumis',
        pictureUrl: '/img/nena.jpg'
    },
    {
        id: '05',
        title: 'Pinguino',
        description: 'Amigurumi pingüino.',
        price: 500,
        category: 'Amigurumis',
        pictureUrl: '/img/pinguino.jpg'
    },
    {
        id: '06',
        title: 'Chaleco Clara',
        description: 'Chaleco color natural talle unico.',
        price: 2500,
        category: 'Chalecos',
        pictureUrl: '/img/chaleco_1.jpg'
    },
    {
        id: '07',
        title: 'Chaleco Tramas',
        description: 'Chaleco entramado talle unico.',
        price: 2700,
        category: 'Chalecos',
        pictureUrl: '/img/chaleco_2.jpg'
    }
];

export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = ItemsArray.find(item => item.id === id);
            resolve(item);
        }, 2000);
    });
};

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(ItemsArray);
        }, 2000);
      });
};