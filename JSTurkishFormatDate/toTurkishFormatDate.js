/*
 Based on fanatikhamsi code https://github.com/fanatikhamsi/
 Contributors:
 Selim Çoban - @fanatikhamsi
 ------------------
 Örnek:
    var simdikiTarih = new Date();

    simdikiTarih.toTurkishFormatDate("dd.mm.yyyy")
    Çıktı: 14.02.2016

    simdikiTarih.toTurkishFormatDate("dd MM DD yyyy")
    Çıktı: 14 Şubat Pazar 2016

    simdikiTarih.toTurkishFormatDate("dd MM yyyy")
    Çıktı: 14 Şubat 2016
 */
Date.prototype.toTurkishFormatDate = function(format) {
    var date = this,
            day = date.getDate(),
            weekDay = date.getDay(),
            month = date.getMonth() + 1,
            year = date.getFullYear(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

    var monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
    var dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");

    if (!format) {
        format = "dd.MM.yyyy";
    }


    format = format.replace("mm", month.toString().padL(2, "0"));

    format = format.replace("MM", monthNames[month]);

    if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2, 2));
    }

    format = format.replace("dd", day.toString().padL(2, "0"));
    
    format = format.replace("DD", dayNames[weekDay]);

    if (format.indexOf("HH") > -1) {
        format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'));
    }

    if (format.indexOf("hh") > -1) {
        if (hours > 12) {
            hours -= 12;
        }

        if (hours === 0) {
            hours = 12;
        }
        format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'));
    }

    if (format.indexOf("ii") > -1) {
        format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'));
    }

    if (format.indexOf("ss") > -1) {
        format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'));
    }

    return format;
};