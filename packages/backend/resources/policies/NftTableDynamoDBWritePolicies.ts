import { tableArn } from '..';


export const nftTableDynamoDBWritePolicies = {
    Effect: 'Allow',
    Resource: [tableArn],
    Action: ['dynamodb:PutItem'],
}
