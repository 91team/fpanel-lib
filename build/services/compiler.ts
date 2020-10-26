import webpack, { Compiler, Configuration, ICompiler, Watching } from 'webpack'

class CompilerService {
  private compiler: Compiler
  private watcher: Watching

  constructor(config: Configuration[] | Configuration) {
    // @ts-expect-error
    this.compiler = webpack(config)
  }

  private handler: ICompiler.Handler = (error, stats) => {
    if (error) {
      console.log(error)
    }

    console.log(stats.toString({ colors: true }))
  }

  public startWatch(options: ICompiler.WatchOptions = {}) {
    this.watcher = this.compiler.watch(options, this.handler)
  }

  public stopWatch() {
    this.watcher.close(() => {
      console.log('Watching Ended.')
    })
  }

  public run(handler?: ICompiler.Handler) {
    this.compiler.run((...args) => {
      this.handler(...args)

      if (handler) {
        handler(...args)
      }
    })
  }

  public getCompiler() {
    return this.compiler
  }
}

export default CompilerService
