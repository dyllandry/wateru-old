import { Context, APIGatewayProxyEventV2 } from 'aws-lambda';

type LambdaHandler = (event: APIGatewayProxyEventV2, context: Context) => any;

export const handler: LambdaHandler = async (event: APIGatewayProxyEventV2, context: Context) => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    return context.logStreamName;
};
