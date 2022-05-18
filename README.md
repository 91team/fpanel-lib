# FPapenl public api

## Старт

- `yarn install`

## Скрипты

- `yarn build` - сборка ассетов для `production` сборки
- `yarn lint` - линтинг
- `yarn schema:generate-types` - генерация типов для GraphQL (необходимо активное подключение к gql-сервису, адрес которого указан в `codegen.yml`)
- `yarn gql:generate-configs` - генерация api для GraphQL (по конфигу `src/lib/gqlConfig/config.ts`)
- `yarn figma:generate-resources` - генерация ресурсов из фигмы
- `yarn dev` - запуск дев-сервера
- `yarn serve` - запуск сервера для `production` ассетов


## Сервисы

Создаются внутри `ServicesManager` и по сути является глобальной сущностью. Сервис можно получить в любом месте через функцию `getService`.

## Backend API - GraphQL

Для работы с GraphQL используется сервис [Apollo](https://www.apollographql.com/docs/react/) и сервис-надстройка над ним для удобства оперирования с экшенами.
Чтобы использовать типизацию `gql`, нужно сначала сгенерировать gql-типы на основании схемы, которую предоставляет backend, и на основании самих экшенов, которые описываются в отдельной папке (`lib/gql`). Для этого имеется скрипт `schema:generate-types`.
Для использования самих экшенов есть сервис [`GraphglAPI`](src/lib/services/graphqlAPI.ts). Он нужен в основном для инкапсуляции логики обработки ошибок исполнения экшна, выбрасывания оповещений и переключения состояний. Для его использования нужно генерировать экшны с помощью отдельного скрипта - `gql:generate-configs`. Формат описания экшенов должен совпадать с [базовым типом `TActionConfig`](scripts/generateGQLConfigs/types.ts) и находиться в [соответствующем конфиге](src/lib/gqlConfig/config.ts).

`enum`-списки в чистом виде из сгенерированных типов лучше избегать, потому что при добавлении в них новых значений на фронте нужно сразу же фиксить коллизии, если используется где-то проход по ключам этого списка. Поэтому нужно ручками задавать перечисление в константе (это важно) и уже потом реиспользовать.

## Линтинг

Линтинг осуществляется с помощью `eslint`
