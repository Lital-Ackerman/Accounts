const Joi = require("joi");


class Operation{
    constructor(operation){
        // this.objectId= operation.objectId;
        this.accountNumber= operation.accountNumber;
        this.operationTypeId= operation.operationTypeId;
        this.operationDate= operation.operationDate;
        this.amount= operation.amount;
        operation.interest? this.interest= operation.interest :null;
        operation.payments? this.payments= operation.payments :null;
    }

    static #validationSchema = Joi.object({
        objectId: Joi.allow(),
        accountNumber: Joi.number().integer().required().min(1000).max(10000),
        operationTypeId: Joi.number().integer().required(),
        operationDate: Joi.date().min("1700-1-1").required(),
        amount: Joi.number().integer().min(100).max(10000).required(),
        interest: Joi.number().positive().integer().min(5).max(50).allow(),
        payments: Joi.number().positive().integer().min(1).max(20).allow()
    });

    validate() {
        const result = Operation.#validationSchema.validate(this, { abortEarly: false });
        if (result.error) {
            const errObj = {};
            for (const err of result.error.details) {
                errObj[err.context.key] = err.message;
            }
            return errObj
        }
        return null;
    }
}

module.exports = Operation;