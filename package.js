Package.describe({
  name: 'praneybehl:react-image-crop',
  version: '0.0.12',
  summary: 'A responsive image cropping tool for React repackaged for Meteor',
  git: 'https://github.com/praneybehl/meteor-react-image-crop',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('react@0.1.13');
  api.use('cosmos:browserify@0.8.3', 'client');
  api.addFiles('package.browserify.js', 'client');
  api.addFiles('package.browserify.options.json', 'client');
  api.addFiles('ReactCrop.css', 'client');
  api.export('ReactCrop');
});


Npm.depends({
  "react-image-crop": "0.0.12",
  "exposify": "0.5.0"
});
