
const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'Primeira Aula' },
                { id: 2, title: 'Segunda Aula' },
                { id: 3, title: 'Terceira Aula' },
                { id: 4, title: 'Quarta Aula' },
            ]
        },
        {
            id: 2, title: 'Apredendo Redux', lessons: [
                { id: 5, title: 'Quinta Aula' },
                { id: 6, title: 'Sexta Aula' },
                { id: 7, title: 'Setima Aula' },
                { id: 8, title: 'Oitava Aula' },
            ]
        },
    ]
}

export default function course(state = INITIAL_STATE, action) {
    // console.log(action)
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module,
        }
    }

    return state;
}