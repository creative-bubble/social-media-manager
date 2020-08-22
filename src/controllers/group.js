
import { toast } from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const GroupController = {
    postAddGroup: async function(inputs) {
        return fetch('https://mediacloneapi.herokuapp.com/group', {
            method: 'POST', 
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(inputs)
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data);
            if(data.type === "success")
                toast.success(`${data.name} ${data.message}`, {autoClose: 3000});
            else if(data.error)   
                toast.error(`${data.message}`, {autoClose: 3000})
        })
        .catch(err => {
            toast.error('Something Wrong', {autoClose: 3000});
        })
    },
    getGroups: async (setViewData) => {
        return fetch('https://mediacloneapi.herokuapp.com/group', {
            method: 'GET',
            headers: {'Content-type': 'application/json'},
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            setViewData(data)
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default GroupController;
