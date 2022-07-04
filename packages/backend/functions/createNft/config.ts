import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { nftTableDynamoDBWritePolicies } from 'resources/policies';
import { tableName } from 'resources/index';


export const createNft = {
    handler: getHandlerPath(__dirname),
    iamRoleStatements: [nftTableDynamoDBWritePolicies],
    events: [
        {
            httpApi: {
                method: 'post',
                path: '/nfts',
            },
        },
    ],
    environment: {
        NFT_TABLE_NAME: tableName,
        REGION: 'eu-west-1',
    },
};
