# Paskaita #1


##Ką apžvelgsim

- MXD šablonai
- Sluoksnių failai
- Duomenų saugojimo būdai / DB kūrimas
- Duomenų atrinkimas (Clip, Select)



# Sluoksnių failai (lyr)


## ***.lyr** failas saugo:

* sluoksnio metaduomenys;
* kelias iki vektorinių duomenų (Source);
* atvaizdavimo parametrai;
* simbolizacija;
* sluoksnio užklausos filtas ([[SQL]]);
* ryšiai;
* kita informacija.


## ***.lyr** failas saugo:

![Layer Properties](./slides/img/clayer_properties.jpg)




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



# Duomenų atrinkimas


## Dalį sluoksnio objektų galima atrinkti keliais būdais:

- pasirenkant ir išsaugant kaip naują sluoksnį (**Data>Export data..**)
- vieno sluoksnio objektus pasirenkant pagal jų poziciją kito sluoksnio objektų atžvilgiu (**Select by location**)
- vieno sluoksnio objektus apkerpant kito sluoksnio objektų aprėptimi (**Clip**).


## Clip
Vieno sluoksnio objektai apkerpami pagal kito sluoksnio objektus.

![Clip](./slides/img/clip_tool.gif)
