import webpack, { Compiler, Configuration, ICompiler, Watching } from 'webpack'

class CompilerService {
  private compiler: Compiler
  private watcher: Watching

  constructor(config: Configuration) {
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

  public run() {
    this.compiler.run(this.handler)
  }

  public getCompiler() {
    return this.compiler
  }
}

export default CompilerService
