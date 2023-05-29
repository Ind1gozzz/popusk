const data = {
    configData: {
        lessons: [
            {
                title: 'Тема 1 с сервера',
                additionalLessons: [
                    {title: 'Урок 1', url: 'http://localhost:5000/lesson1-1'},
                    {title: 'Урок 2', url: 'http://localhost:5000/lesson1-2'},
                    {title: 'Урок 3', url: 'http://localhost:5000/lesson1-3'},
                    {title: 'Урок 4', url: 'http://localhost:5000/lesson1-4'},
                ]   
            },
            {
                title: 'Тема 2 с сервера',
                additionalLessons: [
                    {title: 'урок 1', url: 'http://localhost:5000/lesson2-1'},
                    {title: 'урок 2', url: 'http://localhost:5000/lesson2-2'},
                ]
            },        
        ],chapter: 0,
        id: 0,
        description: 'Описание вопроса с сервера',
        task: 'задание с сервера',
        textTask: false,
        answers: [
            {id: 1, message: 'ответ 1', right: true,},
            {id: 2, message: 'ответ 2', right: false,},
            {id: 3, message: 'ответ 3', right: false,},        
        ],
        title: 'Title from server',
        content: [
            `content from server 1
            content from server 1
            content from server 1`,
            'content from server 2',
            'content from server 3',
            'content from server 4',
        ],      
    },
    data1_1: {
        chapter: 0,
        id: 0,
        description: 'Описание вопроса с сервера',
        task: 'задание с сервера',
        textTask: false,
        answers: [
            {id: 1, message: 'ответ 1', right: true,},
            {id: 2, message: 'ответ 2', right: false,},
            {id: 3, message: 'ответ 3', right: false,},        
        ],
        title: 'Title from server',
        content: [
            `content from server 1
            content from server 1
            content from server 1`,
            'content from server 2',
            'content from server 3',
            'content from server 4',
        ],        
    },
    data1_2: {
        chapter: 0,
        id: 1,
        description: 'Описание вопроса с сервера',
        task: 'задание с сервера',
        textTask: true,
        textTaskUrl: 'http://localhost:5000/lesson1-2/answer',
        answers: [
            {id: 1, message: 'ответ 1', right: true,},
            {id: 2, message: 'ответ 2', right: false,},
            {id: 3, message: 'ответ 3', right: false,},        
        ],
        title: 'Title from server',
        content: [
            `content from server 1
            content from server 1
            content from server 1`,
            'content from server 2',
            'content from server 3',
            'content from server 4',
        ],
    },
    data1_3: {
        chapter: 0,
        id: 2,
        description: 'Описание вопроса с сервера',
        task: 'задание с сервера',
        textTask: false,
        answers: [
            {id: 1, message: 'ответ 1', right: true,},
            {id: 2, message: 'ответ 2', right: false,},
            {id: 3, message: 'ответ 3', right: false,},        
        ],
        title: 'Title from server',
        content: [
            `content from server 1
            content from server 1
            content from server 1`,
            'content from server 2',
            'content from server 3',
            'content from server 4',
        ],        
    },
    data1_4: {
        chapter: 0,
        id: 3,
        description: 'Описание вопроса с сервера',
        task: 'задание с сервера',
        textTask: false,
        answers: [
            {id: 1, message: 'ответ 1', right: true,},
            {id: 2, message: 'ответ 2', right: false,},
            {id: 3, message: 'ответ 3', right: false,},        
        ],
        title: 'Title from server',
        content: [
            `content from server 1
            content from server 1
            content from server 1`,
            'content from server 2',
            'content from server 3',
            'content from server 4',
        ],
    },
    data2_1: {
        chapter: 1,
        id: 0,
        description: 'Описание вопроса с сервера',
        task: 'задание с сервера',
        textTask: false,
        answers: [
            {id: 1, message: 'ответ 1', right: true,},
            {id: 2, message: 'ответ 2', right: false,},
            {id: 3, message: 'ответ 3', right: false,},        
        ],
        title: 'Title from server',
        content: [
            `content from server 1
            content from server 1
            content from server 1`,
            'content from server 2',
            'content from server 3',
            'content from server 4',
        ],        
    },
    data2_2: {
        chapter: 1,
        id: 1,
        description: 'Описание вопроса с сервера',
        task: 'задание с сервера',
        textTask: false,
        answers: [
            {id: 1, message: 'ответ 1', right: true,},
            {id: 2, message: 'ответ 2', right: false,},
            {id: 3, message: 'ответ 3', right: false,},        
        ],
        title: 'Title from server',
        content: [
            `content from server 1
            content from server 1
            content from server 1`,
            'content from server 2',
            'content from server 3',
            'content from server 4',
        ],
    },
}


module.exports = data;