import { useContext } from 'react'

import { ServicesManager } from 'services/index'
import ServicesContext from 'lib/contexts/services'

export default function useServices() {
  return useContext<ServicesManager>(ServicesContext).getServices()
}
