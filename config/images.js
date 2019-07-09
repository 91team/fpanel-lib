exports.images = {
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80
  },
  optipng: {
    optimizationLevel: 3
  },
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3
  },
  imageTrace: false,
  responsive: false
}
