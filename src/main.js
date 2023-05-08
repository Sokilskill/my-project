// встановлюємо контекст імпортування для папки js та її піддиректорій
const requireModule = require.context('./js', true, /\.js$/);

// імпортуємо всі файли з папки та її піддиректорій
requireModule.keys().forEach(fileName => {
  // імпортуємо файл
  const importedModule = requireModule(fileName);
  // додаємо його до поточного модуля
  importedModule.default();
});
