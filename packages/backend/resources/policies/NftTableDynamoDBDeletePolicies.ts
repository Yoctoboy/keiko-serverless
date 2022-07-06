import { tableArn } from '..';


export const nftTableDynamoDBDeletePolicies = {
    Effect: 'Allow',
    Resource: [tableArn],
    Action: ['dynamodb:DeleteItem'],
};
