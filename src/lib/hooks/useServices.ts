import { useContext } from 'react'

import ServicesContext from 'lib/contexts/services'

import { ServicesManager } from 'services/index'

export default function useServices() {
  return useContext<ServicesManager>(ServicesContext).getServices()
}
