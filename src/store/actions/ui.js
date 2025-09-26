export function showMessage(payload) {
    return {
        type: "SHOW_MESSAGE",
        payload
    };
};

export function hideMessage() {
    return {
        type: 'HIDE_MESSAGE',
    };
}