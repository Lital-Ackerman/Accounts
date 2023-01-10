export class OperationModel {
    constructor(
        public operationDate= new Date(),
        public accountNumber?: number,
        public amount?: number,
        public operationTypeId?: number,
        public operationTypeName?: string,
        public interest?: number,
        public payments?: number,
        public objectId?: number
    ) {}
}
