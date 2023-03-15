import { extendObservable } from "mobx";

class PatientStore{
    constructor(){
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: ''
        })
    }
}

export default new PatientStore();