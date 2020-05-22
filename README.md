# react-wordpress

## React, Hooks and Wordpress REST API v2 Personel Website and Blog

This project has been developed on the classic Wordpress script. Can be easily integrated for any Wordpress web page and blog.

## DEMO

https://www.ugurgelisken.com

![Demo Home Page](https://www.linkpicture.com/q/demo_1.jpg)

![Demo Blog Page](https://www.linkpicture.com/q/demo_2.jpg)

## FEATURES (v1)

- Developed using React 16+ and Hooks.
- Client Side Rendering.
- It offers a structure as close as possible to the classic Wordpress structure, but it does not support themes and plugins.
- Supports Home, About Me, Portfolio, Blog and Communication pages, shows when new pages are added.
- Supported by Category and Search.
- Announcement contents are shown separately in the lower right corner.
- It is fully mobile compatible. Developed with responsive design and PWA supported.
- Supports SEO! It is currently supported by the Google Analtyics plugin. Previously, if you have WordPress posts, it is compatible with their link in search engines, not 404 pages. Newly entered content can also be detected by search engines. Even my personal experience; Compared to the classic WordPress, daily visitor count and friendship request count from Linkedin have increased even more.

## DEVELOPMENT PROCESS (v2+)

- What I am missing now is SEO. Further developments and arrangements can be made in this regard.
- The interface can be improved a little more and an improvement can be made on the theme.
- Dark mode feature can be added.
- Performance improvements can be made.
- If there are any errors or wrong methods in the encodings will be corrected.

## SETUP

**npm install**

Load the modules with this command.

**npm start**

Run the project via localhost with this command.

**npm build**

Compile the project under the **/build** folder with this command.

The project captures Wordpress content currently available at www.ugurgelisken.com

## LANGUAGE SUPPORT

Interface support can be changed with language support.

**./locales/tr/translation.json** You can update the language package as you wish.

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

## SETTINGS

You can define global variables and parameters with **./Config.js**

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

## DESCRIPTION OF THE SETTINGS

**title**: The title of the page.

**originURL**: The URL where your web page is live.

**baseURL**: The URL where WordPress APIs will be used..

**wpToken**: It is described in the article 3 in the integration process. Required by React to access APIs.

**perPageItem**: How many content will be shown on the page when the API is pulled.

**perPage20**: Showing 20 content on the page when the API is pulled. Some pages have 20 content. For example Category, Search.

**perPage10**: Showing 10 content on the page when the API is pulled. 10 pages are shot on some pages. Like Blog.

**perPage5**: 5 content shown on the page when the API is pulled. Some pages have 5 content. For example Recent Comments.

**contactFormId**: It is explained in the second article in the integration process. Required for the integration of the contact form with the Contact 7 Form on the React side.

**specialPageSlugs**: Identifies API extensions of custom pages within an array. For example, for ugurgelisken.com/about, the request is sent as slug = about me in the WP JSON API. These sections are Pages prepared by WordPress. Normally, every page created in WordPress is shown by React on the menu of the web page. However, we do not want some pages to appear. For example, we do not want pages such as subpage and promo in the menu.

**disabledCategorySlugs**: We may not want the contents of some categories we added as posts to appear in the Category list. For example, we shoot the post content with the "announcement" karegori slug to show as an announcement separately in the lower right corner of the page. Since it is a separate content, it will be absurd for it to appear in the Category list.

**socialMediaURL**: I personally wanted to link to my social media accounts. I also defined them in this area parametrically. It is not mandatory, and the relevant connection buttons can be removed from the interface.

## INTEGRATION PROCESS STEPS

1. First, the classic Wordpress installation is made and it is ensured that it supports "WP REST API v2". Check it from Plugins page from Wordpress Admin page. Or install it.

Install the "WP Mail SMTP" plugin for sending e-mails and make the necessary adjustments. This step also applies to normal WordPress, so normal WordPress contact forms won't work if it's not done.

2. Herhangi bir üyelik gerektirmeden React tarafında eposta gönderilebilir. Bunun için "Contact form 7 to api" eklentisi kurulmalıdır. 

Sonrasında da "Contact Form 7" eklentisini kurun. Ancak sürüm "5.1.4" olmasına dikkat edin! Daha üst sürümler desteklemez. Bir form oluşturun (Mesela [contact-form-7 id="2495" title="İletişim formu 1"]) ve bunun ID'sini bir yere not edin. Bu ID'yi Config.js'te contactFormId'de girin.

2. E-mail can be sent by React without any membership. For this, the "Contact form 7 to api" plugin must be installed.

Then install the "Contact Form 7" plugin. But make sure the version is "5.1.4"! Higher versions do not support. Create a form (eg [contact-form-7 id = "2495" title = "Contact form 1"]) and write down its ID. Enter this ID in contactFormId in Config.js.

Release all API endpoints in the Protected REST APIs tab.

4. On the React side, after compiling the project for you, compile it with the command "npm build". Copy the code contained in "index.html" and edit it by pasting it in WordPress's own index.php file as follows. You do not need to send the index.html file while uploading.

 Transfer all the files to the root directory (public_html) on your web server.
 
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

6. Edit the **.htaccess** file as follows.

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

6. In the final stage, you can now clean WordPress files if you want.

## ADVICES

- A page was designed in WordPress for the homepage. You can also make the homepage view with the / home directory defined in Config.js.
- You can allow or remove Pages and Posts for comment. This is reflected on React's side and access to comments can be turned on or off.
