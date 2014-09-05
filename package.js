Package.describe({
  summary: "Node csv package"
});

Npm.depends({
  csv: '0.3.6'
});

Package.on_use(function (api) {
  api.add_files('node-csv.js', ['server']);
  api.export('CSV', ['server']);
});
