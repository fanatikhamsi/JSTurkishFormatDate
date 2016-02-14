# Javascript Türkçe Tarih Formatı

## Hakkında
Javascriptte tarih formatına göre Türkçe ay ve gün formatlarını da destekleyen js eklentisidir.

## Örnek Kullanımlar

```sh
var simdikiTarih = new Date();
```

```sh
simdikiTarih.toTurkishFormatDate("dd.mm.yyyy") //Çıktı : 14.02.2016
```

```sh
simdikiTarih.toTurkishFormatDate("dd MM DD yyyy") //Çıktı : 14 Şubat Pazar 2016
```

```sh
simdikiTarih.toTurkishFormatDate("dd MM yyyy") //Çıktı : 14 Şubat 2016 
```

## Formatlar
dd                      Ay günlerinin sıfır dolgulu iki haneli gösterimi		01'den 31'e

DD                      Ay günlerinin metinsel gösterimi                        Pazar'dan Cumartesi'ye

mm                      Ayın sıfır dolgulu sayısal gösterimi                    01'den 12'ye

MM                      Ayın metinsel kısa gösterimi                            Ocak'dan Aralık'a kadar

yy                      Yılın iki haneli gösterimi                              Örnekler: 99 ya da 16 gibi

yyyy                    Yılın iki haneli gösterimi                              Örnekler: 1999 ya da 2016 gibi

hh                      Saatin, 12-saatlik sıfır dolgulu gösterimi              01'den 12'ye

HH                      Saatin, 24-saatlik sıfır dolgulu gösterimi              00'dan 23'e

ii                      Sıfır dolgulu dakika gösterimi                          00 ile 59 arasında

ss                      Sıfır dolgulu saniye gösterimi                          00 ile 59 arasında

