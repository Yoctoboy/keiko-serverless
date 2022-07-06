import { getHandlerPath } from 'libs/configHelper/getHandlerPath';
import { tableName } from 'resources';
import { nftTableDynamoDBWritePolicies } from 'resources/policies';


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
        REGION: 'eu-west-1',
        NFT_TABLE_NAME: tableName
    },
};
