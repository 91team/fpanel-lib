## Клиентский бойлерплейт на [Next.js](https://nextjs.org/docs/getting-started)

### Старт

- `yarn install`
- находим по проекту вставку `-boilerplate-` и заменяем ее (или в том же файле) на те значения, которые необходимы
- `yarn dev` - дев-сборка с HMR и SSR всегда
- `yarn compile:<env>` - сборка проекта и его запуск в соответствующем окружении (`env = development | production`)

### Конфигурация

Дополнительную настройку приложения можно производить по аналогии с тем, что уже написано в `next.config.js`. **Важное замечание:** вся уникальная информация для приложения, которая зависит от окружения сборки, должна быть изолирована на этапе конфигурации и сборки приложения в `config/env`.

#### Роутинг и страницы

Базовая схема маршрутизации в next'е базируется на файловой структуре папки `pages`. Из-за этого возникает ряд проблем, таких как создание лишних урлов для сторонних файлов в той же папке (например, файла стилей и контроллера) и костыльная возможность переиспользования страниц через реэкспорт. Чтобы исправить это, был выбран способ агрегации всех страниц, как контейнеров, в соответствующей папке (`src/containers`) с реэкспортом в страницы-контейнера в необходимом файле папки `pages` (см. `src/containers/LoginPage` и `pages/login/index.tsx`)

### Сервисы

В процессе построения приложения необходимо обеспечить изоляцию скоупа при каждом запросе пользователя. Для этого все сервисы инициализируются с помощью `ServicesManager`. Каждый сервис наследуется от базового класса сервиса, который принимает ссылку на корневой менеджер и сохраняет ее. Таким способом обеспечивается доступ к другим сервисам из какого-либо сервиса, контроллера или плагина. Для получения сервисов в самом компоненте имеются хук и хок.

#### GraphQL

Работа с апи gql-сервиса происходит с помощью адаптера [apollo](https://www.apollographql.com/docs/react/). Для удобства используется кодогенерация (`yarn schema:generate-types`), которую необходимо запускать после каждого обновления схемы на сервере, и плагин для `VS Code`. Для этого нужно установить расширение для работы с gql [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) (не забывайте после генерации схемы [обновлять ее в плагине](https://github.com/apollographql/apollo-tooling/tree/master/packages/vscode-apollo#troubleshooting)).

Хуки apollo будут автоматически резолвиться на сервере, и их результат будет сериализован после рендереинга приложения в кеш. Для кеширования запросов клиента apollo необходимо дождаться выполнения запроса в контроллере или на странице. Для этого нужно инкапсулировать всю асинхронную логику в методе `getInitialProps` страницы (см. `pages/login`).

#### Управление состоянием

Для управления состоянием используется [mobx](https://mobx.js.org/README.html) с оберткой [для реакта](https://github.com/mobxjs/mobx-react). Для нормальной регидратации приложения и стора необходимо, чтобы каждый из дочерних сторов, относительно родительского, можно было сериализовать. Поэтому при добавлении новой сущности в корневой стор необходимо имплементировать базовый публичный метод `serialize` (см. `CStore` в `src/lib/store/types`), который вернет нативный js-объект с наблюдаемыми св-вами. Помимо этого новый стор необходимо добалять в св-во `childStores` корневого стора.

### Стилизация

Для стилизации используется [react-jss](https://cssinjs.org/react-jss/?v=v10.0.4). В текущей версии имеются проблемы с типизацией основного хука и хока, поэтому были написаны поверх них обретки, которые находятся в `src/lib/HOCs/withStyles` и `src/lib/hooks/createUseStyles`, соответственно. Сигнатуры ф-ций такие же, как и в исходной имплементаци.

### Шрифты

Для загрузки шрифтов используется nextjs-плагин, который добавляет соответствующий лоадер в конфиг вебпака. Если локальные шрифты не нужны, то данный плагин можно убрать.

### Линтинг

Поскольку Next на текущий момент [не поддерживает линтинг `eslint`-ом](https://github.com/zeit/next.js/issues/7936#issuecomment-568508782), то ситуация складывается следующим образом:

- в рантайме линтинг происходит с помощью `tslint`;
- в редакторе, например VSC, нужно использовать `eslint`, предварительно **отключив `tslint`-плагин**;
- на прекоммите линтинг происходит так же с помощью `eslint`.
  ESLint предпочтителен, поскольку в нем поддерживаются правила для линтинга хуков, чего нет в TSLint. Если в `.eslintrc.js` происходят изменения, то они должны соотвеnствовать изменениям в `tslint.json`, и наоборот.
