# react-wordpress

## React, Hooks ve Wordpress REST API v2 Kişisel Web Sayfası ve Blog

Bu proje, klasik Wordpress script'i üzerine geliştirilmiştir. Herhangi bir Wordpress web sayfası ve blog'u için rahatlıkla entegre edilebilir. 

## DEMO

https://www.ugurgelisken.com

![Demo Home Page](https://www.linkpicture.com/q/demo_1.jpg)

![Demo Blog Page](https://www.linkpicture.com/q/demo_2.jpg)

## ÖZELLİKLER (v1)

- React 16+ ve Hooks kullanılarak geliştirilmiştir.
- Klasik Wordpress yapısına mümkün olduğunca yakın bir yapı sunar, ancak tema ve plugin desteği yoktur.
- Ana Sayfa, Hakkımda, Portfolio, Blog ve İletişim sayfalarını destekler, yeni sayfalar eklendiğinde gösterir.
- Category ve Search ile desteklenmiştir.
- Duyuru içerikleri sağ alt köşede ayrı gösterilir.
- Tamamen mobil uyumludur. Responsive tasarım ile geliştirilmiştir ve PWA desteklidir.
- SEO destekler!  Şu an Google Analtyics eklentis ile desteklenmiştir. Daha öncesinde eğer WordPress yayınlarınız varsa, onların arama motorlarındaki linkleri ile uyumludur, 404 sayfasına düşmez. Yeni girilen içerikler de arama motorları tarafından tespit edilebilir. Hatta şahsi deneyimim; klasik WordPress'e göre günlük ziyaretçi sayım ve Linkedin'den arkadaşlık istek sayım daha da arttı.

## GELİŞTİRME SÜRECİ (v2+)

- Şu an eksik gördüğüm kısımlar SEO. Bu konuda daha da geliştirmeler ve düzenlemeler yapılabilir.
- Arayüz biraz daha geliştirilebilir ve tema konusunda bir geliştirme yapılabilir.
- Karanlık mod özelliği eklenebilir.
- Performans geliştirmeleri yapılabilir.
- Varsa kodlamalardaki hatalar veya yanlış yöntemler düzeltilecek.

## KURULUM

**npm install**

Bu komut ile modülleri yükleyin.

**npm start**

Bu komut ile localhost üzerinden projeyi çalıştırın.

**npm build**

Bu komut ile projeyi **/build** klasörü altında derleyin.

Proje, şu an www.ugurgelisken.com adresinde yer alan Wordpress içeriklerini çekmektedir.

## DİL DESTEĞİ

Dil paketi desteği ile arayüz metinleri değiştirilebilir.

**./locales/tr/translation.json** dil paketini dilediğiniz gibi güncelleyebilirsiniz.

```
{
    "title": "Uğur GELİŞKEN",
    "sub-title-1": "Frontend & Fullstack Developer",
    "sub-title-2": "Hybrid Mobile App. Developer",
    "sub-title-3": "Fullstack Designer",
    "sub-title-4": "Adobe MVP [ 2013 .. 2015 ]",
    "copyright": "© 2000 - 2020 ugurgelisken.com",
    "write-me": "Bana yaz",
    "page": "Sayfa: ",
    "read-more": "Devamını oku",
    "loading": "Yükleniyor...",
    "search": "Ara",
    "categories": "Karegoriler",
    "contact_form_name_title": "İsim",
    "contact_form_subject_title": "Konu",
    "contact_form_email_title": "E-posta",
    "contact_form_Message_title": "Mesaj",
    "contact_form_sent_success": "Mesajınız bana gönderildi. En kısa zamanda cevaplayacağımdan emin olabilirsiniz.",
    "send": "Gönder",
    "last_to_post": "Son 10 içerik",
    "last_to_comments": "Son 5 yorum",
    "no_post": "İçerik bulunamadı",
    "disable_comments":"Bu içerik yorumlara kapalı.",
    "add_comment_first": "Daha önce bu içeriğe yorum yapılmamış. İlk yorum bırakan sen ol.",
    "comments": "Yorumlar",
    "add_comment": "Yorum Bırak",
    "comment": "Yorum",
    "name_surname": "Ad Soyad",
    "comment_sent": "Yorumunuz gönderildi. Onaylandıktan sonra yayınlanacaktır.",
    "captcha_title": "Güvenlik kodu",
    "comment_name_error": "Lütfen adınızı ve soyadınızı giriniz...",
    "comment_message_error": "Lütfen mesajınızı giriniz...",
    "comment_captcha_error": "Güvenlik kodu eşleşmiyor, lütfen kontrol ediniz.",
    "search_title": "Aranan içerik: ",
    "search_result_no": "Aranan kriterlere göre bir içerik bulunamadı.",
    "view": "incele"
}
```

## AYARLAR

**./Config.js** ile global değişkenleri ve parametreleri tanımlayabilirsiniz.

```
module.exports = global._ = {
    title: "Uğur GELİŞKEN",
    originURL: "https://ugurgelisken.com",
    baseURL: "https://www.ugurgelisken.com/wp-json/wp/v2/",
    wpToken: "Bearer yQzeU27zChdNpNGLVXPQ4AL4XclbzgNe",
    perPageItem: 5,
    perPage20: 20,
    perPage10: 10,
    perPage5: 5,
    contactFormId: 2495
    specialPageSlugs: {
        blog: "blog",
        home: "home",
        announcement: "announcement",
        portfolio: "portfolio",
        contact: "iletisim",
        about: "hakkimda",
        projects: "proje"
    },
    disabledCategorySlugs: {
        0: "subpage",
        1: "portfolio",
        2: "announcement",
        3: "promo"
    },
    socialMediaURL: {
        linkedin: "https://www.linkedin.com/in/u%C4%9Fur-geli%C5%9Fken-53007361/",
        udemy: "https://www.udemy.com/user/ugur-gelisken/",
        googlePlay:  "https://play.google.com/store/books/author?id=U%C4%9Fur+GEL%C4%B0%C5%9EKEN&gl=TR"
    }
};
```

## AYARLARIN AÇIKLAMALARI

**title**: Sayfanın başlığı.
**originURL**: Web sayfanızın yayında olduğu URL.
**baseURL**: WordPress API'lerinin kullanılacağı URL.
**wpToken**: Entegresyan sürecinde 3. maddede anlatılıyor. React tarafından API'lere erişim için gereklidir.
**perPageItem**: API çekilirken sayfada kaç içerik gösterileceği.
**perPage20**: API çekilirken sayfada 20 içerik gösterilmesi. Bazı sayfalarda 20 içerik çekiliyor. Mesela Category, Search.
**perPage10**: API çekilirken sayfada 10 içerik gösterilmesi. Bazı sayfalarda 10 içerik çekiliyor. Mesela Blog.
**perPage5**: API çekilirken sayfada 5 içerik gösterilmesi. Bazı sayfalarda 5 içerik çekiliyor. Mesela Son Yorumlar.
**contactFormId**: Entegrasyon sürecinde 2. maddede anlatılıyor. React tarafında iletişim formunun Contact 7 Form ile entegrasyonu için gerekli.
**specialPageSlugs**: Bir dizi içinde özel sayfaların API uzantılarını tanımlar. Örneğin ugurgelisken.com/about için WP JSON API'de slug=hakkimda olarak istek gönderilir. Bu kısımlar, WordPress tarafında hazırlanan Sayfa'lardır. Normalde WordPress'te oluşturulan her sayfa React tarafında web sayfasının menüsünde gösterilir. Ancak bazı sayfaların görünmesini istemeyiz. Mesela subpage, promo gibi sayfaları menüde istemiyoruz.
**disabledCategorySlugs**: Post olarak eklediğimiz bazı kategorilerdeki içeriklerin de Category listesinde görünmesini istemeyebiliriz. Mesela "announcement" kategori slug'lı post içeriğini ayrı olarak sayfanın sağ alt köşesinde duyuru olarak göstermek için çekiyoruz. Ayrı bir içerik olduğu için bunun Category listesinde görünmesi abes kaçacaktır.
**socialMediaURL**: Şahsi olarak sosyal medya hesaplarıma bağlantı vermek istedim. Bunları da bu alanda parametrik olarak tanımladım. Zorunlu değildir, arayüzden de ilgili bağlantı butonları kaldırılabilir.

## ENTEGRASYON SÜRECİ ADIMLARI

1. İlk olarak klasik Wordpress kurulumu yapılır ve "WP REST API v2" desteklediğinden emin olunur. Wordpress Admin sayfasından Plugins sayfasından kontrol edin. Yoksa yükleyin.
E-posta gönderimi için "WP Mail SMTP" eklentisini kurun ve gerekli ayarlamaları yapın. Bu aşama, normal WordPress için de geçerlidir, yani yapılmazsa normal WordPress iletişim formları da çalışmaz.

2. Herhangi bir üyelik gerektirmeden React tarafında eposta gönderilebilir. Bunun için "Contact form 7 to api" eklentisi kurulmalıdır. 

Sonrasında da "Contact Form 7" eklentisini kurun. Ancak sürüm "5.1.4" olmasına dikkat edin! Daha üst sürümler desteklemez. Bir form oluşturun (Mesela [contact-form-7 id="2495" title="İletişim formu 1"]) ve bunun ID'sini bir yere not edin. Bu ID'yi Config.js'te contactFormId'de girin.

3. "WordPress REST API Authentication" (Diğer ismi ile miniOrange API Authentication) eklentisini kurun. Böylece React tarafında herhangi bir üyelik gerektirmeden ziyaretçiler yorum yazabilecek ve bazı oturum açma gereksinimi hissettiren sayfalarla çalışılabilecek. 

Eklentiyi kurduktan sonra Configure API Authentication sekmesine gidin ve API Key oluşturun. Bu key'i de React projemizde yer alan Config.js'te wpToken key'ine Bearer ile ekleyin. 

Protected REST APIs sekmesinde bütün API uç noktalarını serbest bırakın.

4. React tarafında projeyi kendinize göre uyarladıktan sonra "npm build" komutu ile derleyin. "index.html" içinde yer alan kodları kopyalayın ve WordPress'in kendi index.php dosyası içinde aşağıdaki gibi yapıştırarak düzenleyin. Upload ederken index.html dosyasını göndermenize gerek yoktur.

5. Bütün dosyaları web sunucunuzda kök dizine (public_html) transfer edin. 

**index.php**

```
<?php
header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}

require( dirname( __FILE__ ) . '/wp-blog-header.php' );

echo '<!doctype html><html lang="tr"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><link rel="icon" href="/favicon.ico"/><link rel="icon" href="/assets/favicons/32x32.png" sizes="32x32"/><link rel="icon" href="/assets/favicons/192x192.png" sizes="192x192"/><link rel="apple-touch-icon-precomposed" href="/assets/favicons/180x180.png"/><meta name="viewport" content="width=device-width,initial-scale=1"/><link rel="stylesheet" href="/assets/reset.css"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/><link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet"><link rel="manifest" href="/manifest.json"/><title></title><link href="/static/css/main.930ca7b5.chunk.css" rel="stylesheet"></head><body><noscript></noscript><div id="root"></div><script>!function(e){function r(r){for(var n,i,l=r[0],f=r[1],a=r[2],c=0,s=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(p&&p(r);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,r=0;r<u.length;r++){for(var t=u[r],n=!0,l=1;l<t.length;l++){var f=t[l];0!==o[f]&&(n=!1)}n&&(u.splice(r--,1),e=i(i.s=t[0]))}return e}var n={},o={1:0},u=[];function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)i.d(t,n,function(r){return e[r]}.bind(null,n));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/";var l=this.webpackJsonpindex=this.webpackJsonpindex||[],f=l.push.bind(l);l.push=r,l=l.slice();for(var a=0;a<l.length;a++)r(l[a]);var p=f;t()}([])</script><script src="/static/js/2.b8fc6101.chunk.js"></script><script src="/static/js/main.8aa4d29d.chunk.js"></script></body></html>';
```

6. **.htaccess** dosyasını aşağıdaki gibi düzenleyin. 

```
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} ^(.*)/min/(\w+)\.(css|js)$
RewriteCond %1/wp-content/cache/$2/$1.$2 -f
RewriteRule min/(\w+)\.(css|js) wp-content/cache/$2/$1.$2 [L]
</IfModule>

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{HTTP:Authorization} ^(.)
RewriteRule ^(.) - [E=HTTP_AUTHORIZATION:%1]
</IfModule>

<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
</IfModule>
```

6. Son aşamada isterseniz artık WordPress dosyalarını temizleyebilirsiniz.

## TAVSİYELER

Ana sayfa için WordPress'te bir sayfa tasarlandı. Siz de ana sayfa görünümünü Config.js'te tanımlanan /home dizini ile yapabilirsiniz.
Page ve Post'lara yorum için izin verebilir veya kaldırabilirsiniz. Bu durum React tarafına da yansır ve yorumlara erişim açılabilir veya kapatılabilir.
