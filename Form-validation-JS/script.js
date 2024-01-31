let config = {
    'ime_prezime': {
        required: true,
        minlength: 3,
        maxlenght: 50
    },
    'korisnicko_ime': {
        required: true,
        minlength: 5,
        maxlenght: 50
    },
    'email': {
        required: true,
        email: true,
        minlength: 5,
        maxlenght: 50
    },
    'broj_telefona': {
        required: true,
        minlength: 7,
        maxlenght: 25,
        matching: 'ponovi_lozinku'
    },
    'ponovi_lozinku': {
        required: true,
        minlength: 7,
        maxlenght: 25,
        matching: 'lozinka'
    }
};

let validator = new Validator(config);
