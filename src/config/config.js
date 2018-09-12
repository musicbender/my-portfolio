let IMG_PATH = '/src/images';
let VIDEO_PATH = '/src/video';

if (process.env.NODE_ENV === 'production') {
  IMG_PATH = '/images';
  VIDEO_PATH = '/video';
}

export {
  IMG_PATH,
  VIDEO_PATH
}
