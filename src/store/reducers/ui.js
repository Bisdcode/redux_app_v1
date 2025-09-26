
const INITIAL_STATE = {
    alertMessage: {
        message: '',
        type: 'success'
    },
    showMessage: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SHOW_MESSAGE': {
            return {
                ...state,
                alertMessage: action.payload,
                showMessage: true
            }
        }
        case 'HIDE_MESSAGE':
            return {
                ...state,
                showMessage: false,
            };

        default:
            return state;
    }
}