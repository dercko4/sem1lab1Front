import { makeAutoObservable} from "mobx";

export default class UserStore {
    
    constructor() {
        this._isAuth = false
        makeAutoObservable(this)
    }
    
    setFalseAuth() {
        this._isAuth = false
    }
    setTrueAuth() { 
        this._isAuth = true
    }
    get getisAuth() {
        return this._isAuth
    }
}
