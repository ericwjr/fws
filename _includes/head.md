<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{% if page.title %} {{page.title}} | {% endif %}{{site.title}}</title>
  {% if page.noindex  %}
    <meta name="robots" content="noindex" />
  {% endif %}
  <meta property="og:site_name" content="{{site.title}}" />
  <meta itemprop = 'description' name="description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
  <meta property="og:description" content="{{ page.excerpt | default: site.description | strip_html | normalize_whitespace | truncate: 160 | escape }}">
  <meta property="og:locale" content="en_US" />
  {% if page.layout == 'post' %}
    <meta property="og:type" content="article" />
    <meta property="og:title" content="{{page.title}}" />
    <meta property="og:url" content="{{site.baseurl}}/{{page.title}}" />
    <meta property="article:published_time" content="{{page.date | date_to_xmlschema}}" />
    <script type="application/ld+json">
      {"@context": "http://schema.org",
      "@type": "BlogPosting"",
      "name": "{{site.title}}",
      "headline": "{{page.tite}}",
      "description": "{{page.description}}",
      "url": "{{site.baseur}}/{{page.permalink}}"}
    </script>
  {% endif %}
  {% if page.image %}
    <meta property="og:image" content="{{site.baseur}}/assets/posts/{{page.image}}" />
    <meta property="og:image:width" content="720" />
    <meta property="og:image:height" content="360" />
    <meta name="twitter:site" content="@{{site.twitter}}" />
    <meta name="twitter:image" content="{{site.baseur}}/assets/posts/{{page.image}}?w=240" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="@{{site.twitter}}" />
  {% endif %}
  <link rel = 'icon' type = 'image/ico' sizes = '32X32' href = "{{site.baseurl}}/assets/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="{{site.baseurl}}/apple.png">
  <link rel="mask-icon" href="{{site.baseurl}}/assets/safari.svg" color="#5bbad5">
  <meta name="theme-color" content="#ffffff">
  <link rel="canonical" href="{{ page.url | replace:'index.htm l','' | absolute_url }}">
  {% if jekyll.environment == 'production' and site.google_analytics %}
  {% include analytics.md %}
  {% endif %}
  <link rel = 'stylesheet' href = '/assets/main.css'>
  <script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
</head>
