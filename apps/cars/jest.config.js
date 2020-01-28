module.exports = {
  name: 'cars',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cars',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
