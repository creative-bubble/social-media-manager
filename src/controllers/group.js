
import { toast } from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const GroupController = {
    postAddGroup: function(inputs) {
        fetch('https://mediacloneapi.herokuapp.com/group', {
            method: 'POST', 
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            if(data.type === "success")
            toast.success(`${data.name} ${data.message}`, {autoClose: 3000});
            else    
            toast.info(`${data.message}`, {autoClose: 3000})
        })
        .catch(err => {
            toast.error('Something Wrong', {autoClose: 3000});
        })
    },
    getGroups: (cb) => {
        fetch('https://mediacloneapi.herokuapp.com/group', {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            cb(data)
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default GroupController;
