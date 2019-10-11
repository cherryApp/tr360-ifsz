export abstract class BaseModel {

    fromObject(options): any {
        console.log("options: ", options);
        for (let k in options) {
            this[k] = options[k];
        }
        return this;
    }

    validate(): void {
        // 
    }
}
