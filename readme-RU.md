## Описание

Плагин предоставляет в редакторе Gutenberg 2 типа спойлеров:

WordPress 5.0 представляет новый редактор блоков (кодовое имя "Gutenberg"), который предлагает новый опыт редактирования и создания контента.  
Плагин предоставляет в редакторе блоков 2 типа спойлеров:

* Little Spoiler
* Box spoiler

Little Spoiler - маленький спойлер для обычного текста.

Box spoiler - состоит из 2 блоков:  
Открывающий спойлер (Box Spoiler Start) и закрывающий спойлер (Box Spoiler End)  
Между ними вы вставляете в редакторе блоков нужный блок (или множество блоков) с содержимым, которое вы хотите скрыть.

В фронтенде (внешняя часть сайта) спойлер (аккордеон) открывается с анимацией.  
В редакторе (в админке гутенберг редактора) вы можете выбрать цветовой дизайн спойлера.

Возможность задать свой новый цвет или установить свою палитру (набор) цветов. Смотри FAQ

Нужно скрыть часть публикации? или вам нужен FAQ? - плагин идеально подходит для этого.

Видео:  
[![See video](http://img.youtube.com/vi/IrC1yVttMho/0.jpg)](http://www.youtube.com/watch?v=IrC1yVttMho "See video")

Плагин присутствует в официальном репозитории WordPress: [скачать](https://wordpress.org/plugins/otfm-gutenberg-spoiler/)

## Установка

1. Закачайте папку `otfm-gutenberg-spoiler` в папку `/wp-content/plugins/` или через админку файл otfm-gutenberg-spoiler.zip в "Плагины" 'Добавить новый' и укажите этот зип архив с вашего ПК.
2. Активируйте OtFm Gutenberg Spoiler плагин в админке на странице "Плагины".
3. Используйте блоки OtFm Gutenberg Spoiler при написании контента через новый блочный редактор WordPress 5.0.

## Требования

PHP 7.4, 8.0+ рекомендованы, WordPress 6.1

## Переводы

Доступен на английском, русском, украинском, испанском, шведском, голландском, японском, французском, итальянском, норвежском, португальском, немецком, китайском и других языках (требуется поддержка сообщестива)

## Благодарности

Спасибо [Nilo Velez](https://profiles.wordpress.org/nilovelez/) за перевод на испанский.  
Спасибо [Tor-Bjorn Fjellner](https://profiles.wordpress.org/tobifjellner/) за перевод на шведский.  
Спасибо [Peter Smits](https://profiles.wordpress.org/psmits1567/) за перевод на голландский.  
Спасибо [miccweb](https://profiles.wordpress.org/miccweb/) за перевод на японский.  
Спасибо [FX Bénard](https://profiles.wordpress.org/fxbenard/) за перевод на французский.  
Спасибо [Luisa Ravelli](https://profiles.wordpress.org/darkavenger/) и [aliceorru](https://profiles.wordpress.org/aliceorru/) за перевод на итальянский.  
Спасибо [Eivind](https://profiles.wordpress.org/meinmycell/) за перевод на норвежский.  
Спасибо [Pedro Mendonça](https://profiles.wordpress.org/pedromendonca/) за перевод на португальский.  
Спасибо [Sergey Kovalets](https://profiles.wordpress.org/sergeykovalets/) за перевод на украинский.  
Спасибо [Jens Ratzel](https://profiles.wordpress.org/jensratzel/) за перевод на немецкий.  
Спасибо [Alex Lion](https://profiles.wordpress.org/alexclassroom/) за перевод на китайский (Taiwan).   
Спасибо [Pieterjan Deneys](https://profiles.wordpress.org/nekojonez/) за перевод на голландский (Belgium).

## FAQ

**Поддержка доступности? Управление по клавише tab?**  
Да!  
Навигация по клавише "Tab":  
Кнопка "Стрелка вверх" (UP arrow) - если фокус стоит на открытом спойлере, это закроет его  
Клавиша "Стрелка вниз" (Down key) - если фокус стоит на закрытом спойлере, это откроет его  
Или "Enter" клавиша, или "Space bar" (пробел) нажат - переключает состояние выбранного спойлера (если открыт - закроет, если закрыт - откроет его).  
Кнопка "End" - перемещает фокус на последний спойлер на странице  
Кнопка "Home" - перемещает фокус на первый спойлер на странице

Поддержка скрин ридеров (screen readers)

**Как я могу скрыть несколько блоков?**

1. найди "Box Spoiler Start" и вставь (это откроет спойлер)
2. блоки, блоки, блоки...
3. найди "Box Spoiler End" и вставь (это закроет спойлер)

**Как я могу добавить свой цвет?**  
Добавьте этот сниппет в functions.php:

```
// add new colors to spoiler
function otfmgs_add_new_colors($colors){
    $colors[]= array( 'color' => '#bd4747', 'name' => 'my_brown' );
    $colors[]= array( 'color' => '#32dd94', 'name' => 'my_green' );
    //... etc
    
    return $colors;
}
add_filter('otfmgs_colors','otfmgs_add_new_colors');
```

где: #bd4747 - новый цвет в hex формате

результат: https://yadi.sk/i/223x_1-S3e_H1w

(доступно в плагине с версии 1.4.0)

**Как я могу заменить все цвета?**  
Добавьте этот сниппет в functions.php:

```
// add my color palette to spoiler
function otfmgs_add_my_color_pallete($colors){
    $colors['new'][]= array( 'color' => '#bd4747', 'name' => 'my_brown' );
    $colors['new'][]= array( 'color' => '#32dd94', 'name' => 'my_green' );
    //... etc
    
    return $colors;
}
add_filter('otfmgs_colors','otfmgs_add_my_color_pallete');
```

где: #bd4747 - новый цвет в hex формате

результат: https://yadi.sk/i/Fv7BaxRLkjj_SA

(доступно в плагине с версии 1.4.0)

**Какие ВП темы работают с OtFm Gutenberg Spoiler?**  
Любая правильно разработанная тема WordPress будет работать с OtFm Gutenberg Spoiler

**Как найти блок спойлера?**

1. Переходите в новый редактор блоков (добавить новую запись)
2. Нажмите "Добавить блок"
3. "Поиск блоков" ищите "спойлер" или "spoiler" или "otfm" или "faq"

**Бесплатен ли OtFm Gutenberg Spoiler?**
Да! Основные функции OtFm Gutenberg Spoiler абсолютно бесплатны.

**Где я могу попросить о помощи?**
Напишите мне: Otshelnik-Fm@yandex.ru

## Changelog

[Полный список изменений](https://github.com/Otshelnik-Fm/otfm-gutenberg-spoiler#changelog)

## Author

**Vova Druzhaev** [(Otshelnik-Fm)](https://otshelnik-fm.ru/)  
