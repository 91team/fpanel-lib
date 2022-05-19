import FPanelClient from 'src'

import { GRAPHQL_API_URL } from './lib/constants/api'

const fpanelPublicApi = new FPanelClient({ hostname: GRAPHQL_API_URL })

fpanelPublicApi.queries.publicRoutesGet({})
