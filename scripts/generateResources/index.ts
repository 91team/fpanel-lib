const { importFromFigma } = require('import-from-figma')

if (!process.env.FIGMA_TOKEN) {
  throw new Error(`Incorrect config file, see: packages/scripts/figma.env.example`)
}

importFromFigma({
  figmaToken: process.env.FIGMA_TOKEN,
  projectId: 'BaZxN94AMbuH1xrExJs9kP', // -boilerplate-
  exportType: 'react',
  outputDir: './src/generated',
})
