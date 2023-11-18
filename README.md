# WeatherFromArina
В данном репозитории хранятся файлы на создание приожения "Погода" от Арины.
1. Код написан без использования библиотек и фреймворков.
2. В приложении осуществлен поиск погоды и местоположения по введенным координатм, а так же по введенному названию города(пользователь может выбрать любой понравившейся ему вариант или попробовать все, однако они немного отличаются).
3. Как работает:
   3.1 В первой форме мы вводим координаты в десчтичном формате, далее формируетс карточка с описанием погоды в ней отображается: название города, соответсвующего координатам, погода в этом городе по градусам цельсия, описание погоды("состояние"), дата и сила ветра. Так же включена иконка погоды, соответсвующая состоянию погоды.
   3.2. Вместе с карточкой погоды отображается карта(сделала ее из API 2GIS поэтому местность отображается только у российского местоположения, но погоду можно посмотреть по всему миру), на карте находится маркер, обозначающий координаты местоположения.
   3.3. При обновлении координат погода и карта занова генерируются в этих же карточках.
   3.4. Далее идет форма, отображающая погоду и местоположение по названию города. Карточка погоды и карты отображается с аналогичными данными. Для разнообразия интерфейса карта с местоположением следует под карточкой с погодой. Здесь сохраняется история введеных запросов, т.е карточки с новыми данными(с новыми названиями городов) генерируются над старыми карточками, таким образом вы можете посмотреть погоду в нескольких городах. Каждый город отображается меткой на карте. Виджеты с местоположением так же сохраняются.
4. Деплой:
   Сайт размещен на хостинге от GitHub Pages посмотреть его из браузера вы можете по ссылке:
