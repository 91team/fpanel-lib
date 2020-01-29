type TOptions = {
  [key: string]: any
}

class ServicesBuilder {
  private services: TOptions = {}

  constructor(options: TOptions) {
    this.services = options
  }

  addService(serviceName: string, service: any) {
    this.services[serviceName] = service
  }

  getServices() {
    return this.services
  }
}

export default ServicesBuilder
