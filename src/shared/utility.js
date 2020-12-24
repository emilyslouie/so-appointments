export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
        return true;
    }

    if (rules !== 'phone') {
        isValid = value !== '' && isValid;
    }

    if (rules === 'phone') {
        let phone = value.match(/\d+/g).join('');

        isValid = phone.length <= 13 && isValid;
        isValid = phone.length >= 10 && isValid;
    }

    if (rules === 'email') {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
}