const dal = require("../dal/dal");

//Get operations by account ID
async function getOperationsById(accountId){
    const operations= await dal.executeQueryAsync(`
    SELECT accountoperations.objectId, accountoperations.accountNumber, operationdetails.operationTypeName, accountoperations.operationDate, accountoperations.amount, accountoperations.interest, accountoperations.payments
    FROM accountoperations INNER JOIN operationdetails
    ON accountoperations.operationTypeId= operationdetails.operationTypeId
    WHERE accountoperations.accountNumber=?
    ORDER BY accountoperations.objectId
    `, [accountId])
    return operations 
}

//Get operation Types 
async function getTypes(){
    return await dal.executeQueryAsync(`
    SELECT * FROM operationdetails
     `)
}

////Add New Operation
async function postOperation(operationToAdd){
    return await dal.executeQueryAsync(`
        INSERT INTO accountoperations
        VALUES (DEFAULT, ?, ?, ?, ?, ? ,?)
    `, [operationToAdd.accountNumber, operationToAdd.operationTypeId, operationToAdd.operationDate, operationToAdd.amount, operationToAdd.interest, operationToAdd.payments])
}

module.exports = {
    getOperationsById,
    postOperation,
    getTypes
};