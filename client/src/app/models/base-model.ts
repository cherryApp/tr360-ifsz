export class BaseModel {


    constructor(options: any = {}) {
        for (let k in options) {
            if (this[k]) {
                this[k] = options[k];
            }
        }
    }
}
