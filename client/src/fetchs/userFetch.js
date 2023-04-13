import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/api/users';

const getUsers = async (cb) => {
    try {
        let users = await axios({
            method: 'GET',
            url: URL
        });
        cb(users.data);
    } catch (e) {
        console.log(e);
    }
}

const createUser = async (user) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL,
            data: user
        });

        Swal.fire(
            'Add User',
            'New user has been added',
            'success'
        );
    } catch (e) {
        console.log(e);
    }
}

export {
    getUsers,
    createUser,
    
}