export const environment = {
    production: false,
    user_pool_domain_uri: process.env['USER_POOL_DOMAIN_URI'] || '',
    token_endpoint: `${process.env['USER_POOL_DOMAIN_URI']}/oauth2/token` || '',
    login_endpoint: `${process.env['USER_POOL_DOMAIN_URI']}/login` || '',
    grant_type: 'authorization_code',
    client_id: process.env['CLIENT_ID'] || '',
    client_secret: process.env['CLIENT_SECRET'] || '',
    redirect_uri: process.env['REDIRECT_URI'] || '',
    response_type: 'code',
    api_gateway: process.env['API_GATEWAY'] || ''
}