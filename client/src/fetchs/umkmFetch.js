import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'localhost:3000/api/umkms';

const getUMKMs = async (cb) => {
    try {
        let umkms = await axios({
            method: 'GET',
            url: URL
        });
        cb(umkms.data);
    } catch (e) {
        console.log(e);
    }
}