import { Table } from 'dynamodb-toolbox'
import { PARTITION_KEY, SORT_KEY } from 'resources/dynamoDB';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const documentClient = new DocumentClient({
    convertEmptyValues: false,
});

export const nftTable = new Table({
    name: process.env.NFT_TABLE_NAME || 'MISSING_NFT_TABLE',
    partitionKey: PARTITION_KEY,
    sortKey: SORT_KEY,
    DocumentClient: documentClient
});
