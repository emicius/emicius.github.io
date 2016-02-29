# Paskaita #1


##Ką apžvelgsim

- MXD šablonai
- Sluoksnių failai
- Duomenų saugojimo būdai / DB kūrimas
- Duomenų atrinkimas (Clip, Select)



# Žemėlapių šablonai


## Žemėlapių šablonai - tiesiog "švarūs" *.MXD failai:


## Šablono kūrimas:

- pašalinami esami sluoksniai 
- išvalomi teksto laukai
- padaroma nuotrauka (Thumbnail)
- SAVE.



# Sluoksnių failai (lyr)


## ***.lyr** failas saugo:

* sluoksnio metaduomenis;
* kelią iki vektorinių duomenų (Source);
* atvaizdavimo parametrus;
* simbolizaciją;
* sluoksnio užklausos filtrą (Definition query);
* ryšius (joins, relates);
* kitą informaciją.


## ***.lyr** failas saugo visus sluoksnio parametrus:

![Layer Properties](./slides/img/layer_properties.jpg)


## ***.lyr** failas nesaugo:

* geometrijos;
* atributinės informacijos.



# GIS duomenų saugojimas


## Shape failai

|||
|-|-:|
|![SHP failas](./slides/img/shp.png)|***.shp** saugo geometriją|
|![DBF failas](./slides/img/dbf.png)|***.dbf** saugo atributinius duomenis|
|![DBF failas](./slides/img/shx.png)|***.shx** saugo elementų indeksus|
|||

Note: Tai - labiausiai paplitęs GIS duomenų formatas. Šio failo specifikacija - atvira, todėl Shape failo formatą palaiko praktiškai visos su GIS susijusios programos. Nuadojamas apsikeitimui ir nedideliuose projektuose.


## Personal geodatabase

|||
|-|-:|
|![MDB failas](./slides/img/mdb.png)|***.mdb** - viename faile visi duomenys|
|||


## File geodatabase

|||
|-|-:|
|![GDB failas](./slides/img/gdb.png)|***.gdb** - katalogas su sisteminiais DB failais|
|||


## Enterprise geodatabase

|||
|-|-:|
|![GDB failas](./slides/img/enterprise.png)| **ArcSDE** technologijos jungtys su reliacinėmis DB|
|||

Note: ArcSDE technologija (ArcGIS Server dalis) leidžia prisijungti prie IBM DB2, Informix, Microsoft SQL Server, Postgre SQL ir Oracle korporatyvinių duomenų bazių.


## Privalumai / trūkumai

|Savybė|![SHP failas](./slides/img/shp.png)|![MDB failas](./slides/img/mdb.png)|![GDB failas](./slides/img/gdb.png)|
|-|:-:|:-:|:-:|
|Indeksavimas|+-|-|+|
|Dydžio limitas|2GB|2GB|sl.<1TB|
|Potipiai|-|-|+|
|Atviras formatas|+|-|-|
|Topologija|+-|+|+|
|Galudinimas|-|+-|+|
|Rastrų talpinimas|-|+|+|
|Laukelių pavadinimai|8|32|64|
|Atributų ryšiai|-|-|+|



# Duomenų atrinkimas


## Dalį sluoksnio objektų galima atrinkti keliais būdais:

- pasirenkant ir išsaugant kaip naują sluoksnį (**Data>Export data..**)
- vieno sluoksnio objektus pasirenkant pagal jų poziciją kito sluoksnio objektų atžvilgiu (**Select by location**)
- vieno sluoksnio objektus apkerpant kito sluoksnio objektų aprėptimi (**Clip**).


## Select + export

Pele pasirenkti objektai eksportuojami į naują sluoksnį

![Export data](./slides/img/export_data.jpg)


## Select by location + export

![select by location](./slides/img/select_location.jpg)


## Clip
Vieno sluoksnio objektai apkerpami pagal kito sluoksnio objektus.

![Clip](./slides/img/clip_tool.gif)
